import { Catch } from '@midwayjs/decorator';
import { Context } from '@midwayjs/koa';

/**
 * 默认错误过滤器
 * 用于处理所有未分类的错误
 */
@Catch()
export class DefaultErrorFilter {
  async catch(err: Error, ctx: Context) {
    // 记录错误日志
    ctx.logger.error(err);

    // 返回统一的错误格式
    return {
      code: 500,
      success: false,
      message: err.message,
      data: null,
    };
  }
}