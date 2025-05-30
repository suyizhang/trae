import { Context } from '@midwayjs/koa';
/**
 * 默认错误过滤器
 * 用于处理所有未分类的错误
 */
export declare class DefaultErrorFilter {
    catch(err: Error, ctx: Context): Promise<{
        code: number;
        success: boolean;
        message: string;
        data: any;
    }>;
}
