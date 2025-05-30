import { IMiddleware } from '@midwayjs/core';
import { NextFunction, Context } from '@midwayjs/koa';
/**
 * 静态资源中间件
 * 用于提供静态文件服务
 */
export declare class StaticMiddleware implements IMiddleware<Context, NextFunction> {
    resolve(): (ctx: Context, next: NextFunction) => Promise<void>;
    static getName(): string;
}
