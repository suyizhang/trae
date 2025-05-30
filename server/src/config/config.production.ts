import { MidwayConfig } from '@midwayjs/core';

/**
 * 生产环境配置
 */
export default {
  // 日志配置 - 生产环境下只记录重要日志
  midwayLogger: {
    default: {
      level: 'info',
      consoleLevel: 'warn',
    },
    clients: {
      appLogger: {
        level: 'info',
        consoleLevel: 'error',
      },
    },
  },
} as MidwayConfig;