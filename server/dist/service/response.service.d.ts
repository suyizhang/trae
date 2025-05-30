import { IResponse } from '../interface/response';
/**
 * 响应服务
 * 用于生成统一格式的API响应
 */
export declare class ResponseService {
    /**
     * 成功响应
     * @param data 数据
     * @param message 消息
     * @returns 响应对象
     */
    success<T>(data: T, message?: string): IResponse<T>;
    /**
     * 错误响应
     * @param message 错误消息
     * @param code 错误码
     * @returns 响应对象
     */
    error(message?: string, code?: number): IResponse<null>;
    /**
     * 未授权响应
     * @param message 错误消息
     * @returns 响应对象
     */
    unauthorized(message?: string): IResponse<null>;
    /**
     * 禁止访问响应
     * @param message 错误消息
     * @returns 响应对象
     */
    forbidden(message?: string): IResponse<null>;
    /**
     * 资源不存在响应
     * @param message 错误消息
     * @returns 响应对象
     */
    notFound(message?: string): IResponse<null>;
    /**
     * 服务器错误响应
     * @param message 错误消息
     * @returns 响应对象
     */
    serverError(message?: string): IResponse<null>;
}
