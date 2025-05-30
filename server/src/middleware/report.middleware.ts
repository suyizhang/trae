import { IMiddleware } from '@midwayjs/core';
import { Middleware } from '@midwayjs/decorator';
import { NextFunction, Context } from '@midwayjs/koa';

/**
 * 请求报告中间件
 * 用于记录请求信息和响应时间
 */
@Middleware()
export class ReportMiddleware implements IMiddleware<Context, NextFunction> {
  resolve() {
    return async (ctx: Context, next: NextFunction) => {
      // 记录开始时间
      const startTime = Date.now();
      // 记录请求信息
      ctx.logger.info(`请求开始: ${ctx.method} ${ctx.path}`);

      // 执行下一个中间件
      await next();

      // 计算响应时间
      const duration = Date.now() - startTime;
      // 记录响应信息
      ctx.logger.info(`请求结束: ${ctx.method} ${ctx.path} 状态码: ${ctx.status} 耗时: ${duration}ms`);
    };
  }

  static getName(): string {
    return 'report';
  }
}