import { Provide } from '@midwayjs/decorator';
import { IResponse } from '../interface/response';

/**
 * 响应服务
 * 用于生成统一格式的API响应
 */
@Provide()
export class ResponseService {
  /**
   * 成功响应
   * @param data 数据
   * @param message 消息
   * @returns 响应对象
   */
  success<T>(data: T, message = '操作成功'): IResponse<T> {
    return {
      code: 200,
      success: true,
      message,
      data,
    };
  }

  /**
   * 错误响应
   * @param message 错误消息
   * @param code 错误码
   * @returns 响应对象
   */
  error(message = '操作失败', code = 400): IResponse<null> {
    return {
      code,
      success: false,
      message,
      data: null,
    };
  }

  /**
   * 未授权响应
   * @param message 错误消息
   * @returns 响应对象
   */
  unauthorized(message = '未授权'): IResponse<null> {
    return this.error(message, 401);
  }

  /**
   * 禁止访问响应
   * @param message 错误消息
   * @returns 响应对象
   */
  forbidden(message = '禁止访问'): IResponse<null> {
    return this.error(message, 403);
  }

  /**
   * 资源不存在响应
   * @param message 错误消息
   * @returns 响应对象
   */
  notFound(message = '资源不存在'): IResponse<null> {
    return this.error(message, 404);
  }

  /**
   * 服务器错误响应
   * @param message 错误消息
   * @returns 响应对象
   */
  serverError(message = '服务器错误'): IResponse<null> {
    return this.error(message, 500);
  }
}