import { MidwayHttpError } from '@midwayjs/core';
import { Context } from '@midwayjs/koa';
/**
 * 404错误过滤器
 * 用于处理资源未找到的情况
 */
export declare class NotFoundFilter {
    catch(err: MidwayHttpError, ctx: Context): Promise<{
        code: number;
        success: boolean;
        message: string;
        data: any;
    }>;
}
