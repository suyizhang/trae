import { IMiddleware } from '@midwayjs/core';
import { NextFunction, Context } from '@midwayjs/koa';
/**
 * CORS中间件
 * 用于处理跨域请求
 */
export declare class CorsMiddleware implements IMiddleware<Context, NextFunction> {
    resolve(): (ctx: Context, next: NextFunction) => Promise<void>;
    static getName(): string;
}
