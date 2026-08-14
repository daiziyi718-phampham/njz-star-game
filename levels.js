/**
 * NJZ Star Maze — 25 关配置
 *
 * 本文件暂未接入 index.html。
 *
 * 字段约定：
 * - hintText: 关卡开始时显示的中文提示
 * - timeLimitSeconds: null 表示不限时
 * - laserLimit: null 表示禁用，数字表示次数限制，"unlimited" 表示无限
 * - laserCooldown: 激光冷却秒数，默认 10 秒
 * - enemyRespawn: true 表示敌人被击中后会复活
 * - laser.mode: "disabled" | "unlimited" | "limited"
 * - laser.maxShots: 仅在 mode 为 "limited" 时使用
 * - enemyGroups: 支持同一关存在多种敌人
 * - enemy speed: "slow" | "normal" | "fast" | "extreme"
 * - enemy type: "normal" | "respawning" | "accelerating" | "splitting"
 * - characterEasterEgg: null 或对应角色编号
 */
window.LEVELS = [
  {
    id: 1,
    prompt: "学会移动和收集星星吧！",
    enemyGroups: [],
    maze: { difficulty: "easy", features: [] },
    starCount: 5,
    timeLimitSeconds: null,
    laser: { mode: "disabled", maxShots: null },
    characterEasterEgg: null
  },
  {
    id: 2,
    prompt: "邪恶猪猪出现了！",
    enemyGroups: [{ type: "normal", count: 1, speed: "slow" }],
    maze: { difficulty: "easy", features: [] },
    starCount: 6,
    timeLimitSeconds: null,
    laser: { mode: "disabled", maxShots: null },
    characterEasterEgg: null
  },
  {
    id: 3,
    prompt: "小心靠近星星的猪",
    enemyGroups: [{ type: "normal", count: 1, speed: "slow" }],
    maze: { difficulty: "easy-medium", features: [] },
    starCount: 8,
    timeLimitSeconds: null,
    laser: { mode: "disabled", maxShots: null },
    characterEasterEgg: null
  },
  {
    id: 4,
    prompt: "按下空格消灭邪恶猪猪",
    enemyGroups: [{ type: "normal", count: 1, speed: "slow" }],
    maze: { difficulty: "medium", features: [] },
    starCount: 10,
    timeLimitSeconds: null,
    laser: { mode: "unlimited", maxShots: null },
    characterEasterEgg: null
  },
  {
    id: 5,
    prompt: "展现你的能力！",
    enemyGroups: [{ type: "normal", count: 2, speed: "normal" }],
    maze: { difficulty: "medium", features: [] },
    starCount: 12,
    timeLimitSeconds: null,
    laser: { mode: "unlimited", maxShots: null },
    characterEasterEgg: null
  },
  {
    id: 6,
    prompt: "猪猪们变得更敏捷了！",
    enemyGroups: [{ type: "normal", count: 2, speed: "fast" }],
    maze: { difficulty: "medium", features: [] },
    starCount: 12,
    timeLimitSeconds: null,
    laser: { mode: "unlimited", maxShots: null },
    characterEasterEgg: 2
  },
  {
    id: 7,
    prompt: "更多猪猪正在靠近！",
    enemyGroups: [{ type: "normal", count: 3, speed: "fast" }],
    maze: { difficulty: "medium", features: [] },
    starCount: 12,
    timeLimitSeconds: null,
    laser: { mode: "unlimited", maxShots: null },
    characterEasterEgg: 1
  },
  {
    id: 8,
    prompt: "抓紧时间完成挑战！",
    enemyGroups: [{ type: "normal", count: 3, speed: "fast" }],
    maze: { difficulty: "medium", features: [] },
    starCount: 12,
    timeLimitSeconds: 30,
    laser: { mode: "unlimited", maxShots: null },
    characterEasterEgg: null
  },
  {
    id: 9,
    prompt: "需要收集更多星星",
    enemyGroups: [{ type: "normal", count: 3, speed: "fast" }],
    maze: { difficulty: "medium", features: [] },
    starCount: 18,
    timeLimitSeconds: null,
    laser: { mode: "unlimited", maxShots: null },
    characterEasterEgg: null
  },
  {
    id: 10,
    prompt: "展现你的迷宫技巧！",
    enemyGroups: [{ type: "normal", count: 3, speed: "fast" }],
    maze: { difficulty: "medium-complex", features: [] },
    starCount: 18,
    timeLimitSeconds: 30,
    laser: { mode: "unlimited", maxShots: null },
    characterEasterEgg: null
  },
  {
    id: 11,
    prompt: "不要浪费你的激光",
    enemyGroups: [{ type: "normal", count: 3, speed: "normal" }],
    maze: { difficulty: "medium-complex", features: [] },
    starCount: 18,
    timeLimitSeconds: null,
    laser: { mode: "limited", maxShots: 3 },
    characterEasterEgg: 3
  },
  {
    id: 12,
    prompt: "猪猪学会了复活",
    enemyGroups: [{ type: "respawning", count: 3, speed: "normal" }],
    maze: { difficulty: "medium-complex", features: [] },
    starCount: 18,
    timeLimitSeconds: null,
    laser: { mode: "limited", maxShots: 3 },
    characterEasterEgg: null
  },
  {
    id: 13,
    prompt: "更多星星出现了！",
    enemyGroups: [{ type: "respawning", count: 3, speed: "normal" }],
    maze: { difficulty: "medium-complex", features: [] },
    starCount: 22,
    timeLimitSeconds: null,
    laser: { mode: "limited", maxShots: 3 },
    characterEasterEgg: null
  },
  {
    id: 14,
    prompt: "小心！猪猪开始追你了！",
    enemyGroups: [
      { type: "accelerating", count: 3, speed: "normal", abilities: ["respawn"] }
    ],
    maze: { difficulty: "complex", features: [] },
    starCount: 22,
    timeLimitSeconds: null,
    laser: { mode: "limited", maxShots: 3 },
    characterEasterEgg: null
  },
  {
    id: 15,
    prompt: "时间有限，别被猪猪追上！",
    enemyGroups: [
      { type: "accelerating", count: 3, speed: "normal", abilities: ["respawn"] }
    ],
    maze: { difficulty: "complex", features: [] },
    starCount: 22,
    timeLimitSeconds: 30,
    laser: { mode: "limited", maxShots: 3 },
    characterEasterEgg: 4
  },
  {
    id: 16,
    prompt: "别让猪猪追上你！",
    enemyGroups: [
      { type: "accelerating", count: 3, speed: "normal", abilities: ["respawn"] }
    ],
    maze: {
      difficulty: "complex-plus",
      features: ["dead-ends", "long-routes", "multiple-branches"]
    },
    starCount: 24,
    timeLimitSeconds: null,
    laser: { mode: "unlimited", maxShots: null },
    characterEasterEgg: null
  },
  {
    id: 17,
    prompt: "更多猪猪正在靠近！",
    enemyGroups: [
      { type: "accelerating", count: 4, speed: "normal", abilities: ["respawn"] }
    ],
    maze: { difficulty: "complex-plus", features: [] },
    starCount: 24,
    timeLimitSeconds: null,
    laser: { mode: "unlimited", maxShots: null },
    characterEasterEgg: null
  },
  {
    id: 18,
    prompt: "猪猪变得更快了！",
    enemyGroups: [
      { type: "accelerating", count: 4, speed: "extreme", abilities: ["respawn"] }
    ],
    maze: { difficulty: "complex-plus", features: [] },
    starCount: 24,
    timeLimitSeconds: null,
    laser: { mode: "unlimited", maxShots: null },
    characterEasterEgg: null
  },
  {
    id: 19,
    prompt: "小心！猪猪被消灭后会分裂！",
    enemyGroups: [
      { type: "accelerating", count: 3, speed: "extreme" },
      { type: "splitting", count: 1, speed: "extreme" }
    ],
    maze: {
      difficulty: "complex-plus",
      features: ["narrow-passages", "congestion-zones"]
    },
    starCount: 24,
    timeLimitSeconds: null,
    laser: { mode: "limited", maxShots: 5 },
    characterEasterEgg: null
  },
  {
    id: 20,
    prompt: "展现你的最佳策略！",
    enemyGroups: [
      { type: "accelerating", count: 3, speed: "extreme" },
      { type: "splitting", count: 1, speed: "extreme" }
    ],
    maze: { difficulty: "complex-plus", features: [] },
    starCount: 24,
    timeLimitSeconds: 60,
    laser: { mode: "limited", maxShots: 5 },
    characterEasterEgg: null
  },
  {
    id: 21,
    prompt: "猪猪变得更加凶猛了！",
    enemyGroups: [{ type: "accelerating", count: 5, speed: "extreme" }],
    maze: { difficulty: "complex-plus", features: [] },
    starCount: 28,
    timeLimitSeconds: null,
    laser: { mode: "unlimited", maxShots: null },
    characterEasterEgg: 5
  },
  {
    id: 22,
    prompt: "分裂猪变多了！",
    enemyGroups: [
      { type: "accelerating", count: 3, speed: "extreme" },
      { type: "splitting", count: 2, speed: "extreme" }
    ],
    maze: { difficulty: "complex-plus", features: [] },
    starCount: 28,
    timeLimitSeconds: null,
    laser: { mode: "unlimited", maxShots: null },
    characterEasterEgg: null
  },
  {
    id: 23,
    prompt: "小心越来越多的猪猪！",
    enemyGroups: [
      { type: "accelerating", count: 3, speed: "extreme" },
      { type: "splitting", count: 2, speed: "extreme" }
    ],
    maze: { difficulty: "complex-plus", features: ["portals"] },
    starCount: 28,
    timeLimitSeconds: null,
    laser: { mode: "unlimited", maxShots: null },
    characterEasterEgg: null
  },
  {
    id: 24,
    prompt: "猪猪的力量已经变得非常庞大。",
    enemyGroups: [
      {
        type: "accelerating",
        count: 5,
        speed: "extreme",
        abilities: ["split"]
      }
    ],
    maze: { difficulty: "complex-plus", features: ["portals"] },
    starCount: 28,
    timeLimitSeconds: null,
    laser: { mode: "limited", maxShots: 3 },
    characterEasterEgg: null
  },
  {
    id: 25,
    prompt: "最后的决战！",
    enemyGroups: [
      {
        type: "accelerating",
        count: 5,
        speed: "extreme",
        abilities: ["split"]
      }
    ],
    maze: { difficulty: "final-complex", features: ["portals"] },
    starCount: 28,
    timeLimitSeconds: 60,
    laser: { mode: "limited", maxShots: 3 },
    characterEasterEgg: null
  }
].map(({ prompt, ...level }) => ({
  ...level,
  hintText: prompt,
  enemyRespawn: level.enemyGroups.some(
    group => group.type === "respawning"
  ),
  laserCooldown: level.laserCooldown ?? 10,
  laserLimit:
    level.laser.mode === "disabled"
      ? null
      : level.laser.mode === "unlimited"
        ? "unlimited"
        : level.laser.maxShots
}));
