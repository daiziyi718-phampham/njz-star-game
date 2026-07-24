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
    prompt: "找到安全路线避开猪猪！",
    enemyGroups: [{ type: "normal", count: 1, speed: "slow" }],
    maze: { difficulty: "easy-medium", features: [] },
    starCount: 8,
    timeLimitSeconds: null,
    laser: { mode: "disabled", maxShots: null },
    characterEasterEgg: null
  },
  {
    id: 4,
    prompt: "使用激光消灭敌人吧！",
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
    timeLimitSeconds: 90,
    laser: { mode: "unlimited", maxShots: null },
    characterEasterEgg: null
  },
  {
    id: 9,
    prompt: "更多星星等待你的发现！",
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
    timeLimitSeconds: 120,
    laser: { mode: "unlimited", maxShots: null },
    characterEasterEgg: null
  },
  {
    id: 11,
    prompt: "不要浪费你的能量！",
    enemyGroups: [{ type: "normal", count: 3, speed: "normal" }],
    maze: { difficulty: "medium-complex", features: [] },
    starCount: 18,
    timeLimitSeconds: null,
    laser: { mode: "limited", maxShots: 3 },
    characterEasterEgg: 3
  },
  {
    id: 12,
    prompt: "猪猪又回来了！",
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
    prompt: "找到最快的路线！",
    enemyGroups: [{ type: "respawning", count: 3, speed: "normal" }],
    maze: { difficulty: "complex", features: [] },
    starCount: 22,
    timeLimitSeconds: null,
    laser: { mode: "limited", maxShots: 3 },
    characterEasterEgg: null
  },
  {
    id: 15,
    prompt: "做好准备迎接挑战！",
    enemyGroups: [{ type: "respawning", count: 3, speed: "normal" }],
    maze: { difficulty: "complex", features: [] },
    starCount: 22,
    timeLimitSeconds: 120,
    laser: { mode: "limited", maxShots: 3 },
    characterEasterEgg: 4
  },
  {
    id: 16,
    prompt: "更复杂的迷宫出现了！",
    enemyGroups: [{ type: "respawning", count: 3, speed: "normal" }],
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
    enemyGroups: [{ type: "respawning", count: 4, speed: "normal" }],
    maze: { difficulty: "complex-plus", features: [] },
    starCount: 24,
    timeLimitSeconds: null,
    laser: { mode: "unlimited", maxShots: null },
    characterEasterEgg: null
  },
  {
    id: 18,
    prompt: "猪猪的速度突破极限！",
    enemyGroups: [{ type: "respawning", count: 4, speed: "extreme" }],
    maze: { difficulty: "complex-plus", features: [] },
    starCount: 24,
    timeLimitSeconds: null,
    laser: { mode: "unlimited", maxShots: null },
    characterEasterEgg: null
  },
  {
    id: 19,
    prompt: "猪猪堵住了前进道路！",
    enemyGroups: [{ type: "respawning", count: 4, speed: "extreme" }],
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
    enemyGroups: [{ type: "respawning", count: 4, speed: "extreme" }],
    maze: { difficulty: "complex-plus", features: [] },
    starCount: 24,
    timeLimitSeconds: 120,
    laser: { mode: "limited", maxShots: 5 },
    characterEasterEgg: null
  },
  {
    id: 21,
    prompt: "猪猪学会追逐了！",
    enemyGroups: [{ type: "accelerating", count: 5, speed: "extreme" }],
    maze: { difficulty: "complex-plus", features: [] },
    starCount: 28,
    timeLimitSeconds: null,
    laser: { mode: "unlimited", maxShots: null },
    characterEasterEgg: 5
  },
  {
    id: 22,
    prompt: "听说猪猪还会分裂？",
    enemyGroups: [
      { type: "normal", count: 3, speed: "extreme" },
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
    prompt: "迷宫里出现了神秘通道！",
    enemyGroups: [
      { type: "normal", count: 3, speed: "extreme" },
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
    prompt: "猪猪已经变得非常强大！",
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
    prompt: "最后的冒险开始了！",
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
    timeLimitSeconds: 120,
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
