/**
 * 统一响应接口
 * 用于规范API返回格式
 */
export interface IResponse<T = any> {
  /**
   * 状态码
   * 200: 成功
   * 400: 客户端错误
   * 401: 未授权
   * 403: 禁止访问
   * 404: 资源不存在
   * 500: 服务器错误
   */
  code: number;

  /**
   * 是否成功
   */
  success: boolean;

  /**
   * 消息
   */
  message: string;

  /**
   * 数据
   */
  data: T | null;
}