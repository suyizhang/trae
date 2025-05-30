import { IMiddleware } from '@midwayjs/core';
import { Middleware } from '@midwayjs/decorator';
import { NextFunction, Context } from '@midwayjs/koa';

/**
 * CORS中间件
 * 用于处理跨域请求
 */
@Middleware()
export class CorsMiddleware implements IMiddleware<Context, NextFunction> {
  resolve() {
    return async (ctx: Context, next: NextFunction) => {
      // 允许的来源
      ctx.set('Access-Control-Allow-Origin', '*');
      // 允许的HTTP方法
      ctx.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
      // 允许的请求头
      ctx.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
      // 允许发送凭证
      ctx.set('Access-Control-Allow-Credentials', 'true');
      // 预检请求的有效期，单位为秒
      ctx.set('Access-Control-Max-Age', '86400');

      // 处理OPTIONS预检请求
      if (ctx.method === 'OPTIONS') {
        ctx.status = 204;
        return;
      }

      // 继续下一个中间件
      await next();
    };
  }

  static getName(): string {
    return 'cors';
  }
}