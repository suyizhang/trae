"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseService = void 0;
const decorator_1 = require("@midwayjs/decorator");
/**
 * 响应服务
 * 用于生成统一格式的API响应
 */
let ResponseService = class ResponseService {
    /**
     * 成功响应
     * @param data 数据
     * @param message 消息
     * @returns 响应对象
     */
    success(data, message = '操作成功') {
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
    error(message = '操作失败', code = 400) {
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
    unauthorized(message = '未授权') {
        return this.error(message, 401);
    }
    /**
     * 禁止访问响应
     * @param message 错误消息
     * @returns 响应对象
     */
    forbidden(message = '禁止访问') {
        return this.error(message, 403);
    }
    /**
     * 资源不存在响应
     * @param message 错误消息
     * @returns 响应对象
     */
    notFound(message = '资源不存在') {
        return this.error(message, 404);
    }
    /**
     * 服务器错误响应
     * @param message 错误消息
     * @returns 响应对象
     */
    serverError(message = '服务器错误') {
        return this.error(message, 500);
    }
};
ResponseService = __decorate([
    (0, decorator_1.Provide)()
], ResponseService);
exports.ResponseService = ResponseService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzcG9uc2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZXJ2aWNlL3Jlc3BvbnNlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsbURBQThDO0FBRzlDOzs7R0FHRztBQUVJLElBQU0sZUFBZSxHQUFyQixNQUFNLGVBQWU7SUFDMUI7Ozs7O09BS0c7SUFDSCxPQUFPLENBQUksSUFBTyxFQUFFLE9BQU8sR0FBRyxNQUFNO1FBQ2xDLE9BQU87WUFDTCxJQUFJLEVBQUUsR0FBRztZQUNULE9BQU8sRUFBRSxJQUFJO1lBQ2IsT0FBTztZQUNQLElBQUk7U0FDTCxDQUFDO0lBQ0osQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLEVBQUUsSUFBSSxHQUFHLEdBQUc7UUFDaEMsT0FBTztZQUNMLElBQUk7WUFDSixPQUFPLEVBQUUsS0FBSztZQUNkLE9BQU87WUFDUCxJQUFJLEVBQUUsSUFBSTtTQUNYLENBQUM7SUFDSixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILFlBQVksQ0FBQyxPQUFPLEdBQUcsS0FBSztRQUMxQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsU0FBUyxDQUFDLE9BQU8sR0FBRyxNQUFNO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxRQUFRLENBQUMsT0FBTyxHQUFHLE9BQU87UUFDeEIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILFdBQVcsQ0FBQyxPQUFPLEdBQUcsT0FBTztRQUMzQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7Q0FDRixDQUFBO0FBbEVZLGVBQWU7SUFEM0IsSUFBQSxtQkFBTyxHQUFFO0dBQ0csZUFBZSxDQWtFM0I7QUFsRVksMENBQWUifQ==