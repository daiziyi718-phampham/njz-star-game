(() => {
  const music = new Audio('music.mp3');
  music.loop = true;
  music.volume = 0.32;
  music.preload = 'metadata';
  const clips = {};
  for (const name of ['laser', 'step-1', 'step-2', 'pig-chase']) {
    clips[name] = Array.from({ length: name === 'laser' ? 3 : 1 }, () => {
      const audio = new Audio(`assets/audio/${name}.wav`);
      audio.preload = 'auto';
      return audio;
    });
  }
  let unlocked = false, state = 'start', musicEnabled = true, effectsEnabled = true;
  let lastStep = -Infinity, lastPig = -Infinity, stepIndex = 0, musicPending = false;
  try {
    const saved = JSON.parse(localStorage.getItem('njzAudioSettings') || '{}');
    musicEnabled = saved.music !== false;
    effectsEnabled = saved.effects !== false;
  } catch (_) {}
  function play(audio) {
    const promise = audio.play();
    if (promise) promise.catch(() => {});
  }
  function syncMusic() {
    if (!unlocked || !musicEnabled || state === 'paused' || document.hidden) {
      music.pause();
    } else if (music.paused && !musicPending) {
      musicPending = true;
      music.play().catch(() => {}).finally(() => { musicPending = false; });
    }
  }
  function stopEffects() {
    Object.values(clips).flat().forEach(audio => { audio.pause(); audio.currentTime = 0; });
  }
  function effect(name, volume) {
    if (!unlocked || !effectsEnabled || state !== 'playing' || document.hidden) return;
    const pool = clips[name];
    const audio = pool.find(item => item.paused || item.ended) || pool[0];
    audio.currentTime = 0;
    audio.volume = volume;
    play(audio);
  }
  function unlock() {
    unlocked = true;
    syncMusic();
  }
  window.addEventListener('keydown', unlock);
  window.addEventListener('pointerdown', unlock);
  document.addEventListener('visibilitychange', () => {
    syncMusic();
    if (document.hidden) stopEffects();
  });
  for (const kind of ['music', 'effects']) {
    const button = document.getElementById(`${kind}Toggle`);
    function render() {
      const enabled = kind === 'music' ? musicEnabled : effectsEnabled;
      button.textContent = `${kind === 'music' ? '音乐' : '音效'}：${enabled ? '开' : '关'}`;
      button.setAttribute('aria-pressed', String(enabled));
    }
    button.addEventListener('keydown', event => event.stopPropagation());
    button.addEventListener('keyup', event => event.stopPropagation());
    button.addEventListener('click', () => {
      if (kind === 'music') musicEnabled = !musicEnabled;
      else effectsEnabled = !effectsEnabled;
      unlock();
      if (!effectsEnabled) stopEffects();
      try { localStorage.setItem('njzAudioSettings', JSON.stringify({ music: musicEnabled, effects: effectsEnabled })); } catch (_) {}
      render();
      button.blur();
    });
    render();
  }
  window.gameAudio = {
    setState(next) {
      if (state === next) return;
      state = next;
      if (state !== 'playing') stopEffects();
      syncMusic();
    },
    laser() { effect('laser', 0.55); },
    step() {
      const now = performance.now();
      if (now - lastStep < 175) return;
      lastStep = now;
      effect(`step-${1 + stepIndex++ % 2}`, 0.115);
    },
    chase(distance) {
      const now = performance.now();
      if (now - lastPig < 650) return;
      lastPig = now;
      effect('pig-chase', 0.12 + 0.25 * Math.max(0, 1 - distance / 300));
    }
  };
})();
