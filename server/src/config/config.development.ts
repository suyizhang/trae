import { MidwayConfig } from '@midwayjs/core';

/**
 * 开发环境配置
 */
export default {
  // 日志配置 - 开发环境下更详细的日志
  midwayLogger: {
    default: {
      level: 'debug',
      consoleLevel: 'debug',
    },
    clients: {
      appLogger: {
        level: 'debug',
        consoleLevel: 'debug',
      },
    },
  },
} as MidwayConfig;