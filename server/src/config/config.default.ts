import { MidwayConfig } from '@midwayjs/core';

/**
 * 默认配置
 * 适用于所有环境
 */
export default {
  // 应用基本信息
  keys: '1653992483290_8632',
  koa: {
    port: 10302,
  },
  // 日志配置
  midwayLogger: {
    default: {
      level: 'info',
      consoleLevel: 'info',
    },
    clients: {
      appLogger: {
        level: 'info',
        consoleLevel: 'info',
      },
    },
  },
} as MidwayConfig;