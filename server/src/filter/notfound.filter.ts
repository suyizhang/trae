import { Catch } from '@midwayjs/decorator';
import { httpError, MidwayHttpError } from '@midwayjs/core';
import { Context } from '@midwayjs/koa';

/**
 * 404错误过滤器
 * 用于处理资源未找到的情况
 */
@Catch(httpError.NotFoundError)
export class NotFoundFilter {
  async catch(err: MidwayHttpError, ctx: Context) {
    // 记录404错误
    ctx.logger.warn(`路径 ${ctx.path} 不存在`);

    // 返回统一的错误格式
    return {
      code: 404,
      success: false,
      message: '请求的资源不存在',
      data: null,
    };
  }
}