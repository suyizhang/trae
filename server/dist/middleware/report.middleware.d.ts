import { IMiddleware } from '@midwayjs/core';
import { NextFunction, Context } from '@midwayjs/koa';
/**
 * 请求报告中间件
 * 用于记录请求信息和响应时间
 */
export declare class ReportMiddleware implements IMiddleware<Context, NextFunction> {
    resolve(): (ctx: Context, next: NextFunction) => Promise<void>;
    static getName(): string;
}
