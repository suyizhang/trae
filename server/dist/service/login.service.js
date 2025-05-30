"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginService = void 0;
const decorator_1 = require("@midwayjs/decorator");
const uuid_1 = require("uuid");
/**
 * 登录服务
 * 提供登录相关功能
 */
let LoginService = class LoginService {
    /**
     * 密码登录
     * @param username 用户名
     * @param password 密码
     * @returns 登录结果
     */
    async passwordLogin(username, password) {
        // 模拟验证用户名和密码
        // 实际应用中应该查询数据库并验证密码
        if (username && password) {
            // 生成token
            return {
                token: (0, uuid_1.v4)(),
            };
        }
        throw new Error('用户名或密码错误');
    }
    /**
     * 验证码登录
     * @param phone 手机号
     * @param code 验证码
     * @returns 登录结果
     */
    async codeLogin(phone, code) {
        // 模拟验证手机号和验证码
        // 实际应用中应该查询数据库并验证验证码
        if (phone && code) {
            // 生成token
            return {
                token: (0, uuid_1.v4)(),
            };
        }
        throw new Error('手机号或验证码错误');
    }
};
LoginService = __decorate([
    (0, decorator_1.Provide)()
], LoginService);
exports.LoginService = LoginService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZXJ2aWNlL2xvZ2luLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsbURBQThDO0FBQzlDLCtCQUFvQztBQUVwQzs7O0dBR0c7QUFFSSxJQUFNLFlBQVksR0FBbEIsTUFBTSxZQUFZO0lBQ3ZCOzs7OztPQUtHO0lBQ0gsS0FBSyxDQUFDLGFBQWEsQ0FBQyxRQUFnQixFQUFFLFFBQWdCO1FBQ3BELGFBQWE7UUFDYixvQkFBb0I7UUFDcEIsSUFBSSxRQUFRLElBQUksUUFBUSxFQUFFO1lBQ3hCLFVBQVU7WUFDVixPQUFPO2dCQUNMLEtBQUssRUFBRSxJQUFBLFNBQU0sR0FBRTthQUNoQixDQUFDO1NBQ0g7UUFDRCxNQUFNLElBQUksS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILEtBQUssQ0FBQyxTQUFTLENBQUMsS0FBYSxFQUFFLElBQVk7UUFDekMsY0FBYztRQUNkLHFCQUFxQjtRQUNyQixJQUFJLEtBQUssSUFBSSxJQUFJLEVBQUU7WUFDakIsVUFBVTtZQUNWLE9BQU87Z0JBQ0wsS0FBSyxFQUFFLElBQUEsU0FBTSxHQUFFO2FBQ2hCLENBQUM7U0FDSDtRQUNELE1BQU0sSUFBSSxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDL0IsQ0FBQztDQUNGLENBQUE7QUFwQ1ksWUFBWTtJQUR4QixJQUFBLG1CQUFPLEdBQUU7R0FDRyxZQUFZLENBb0N4QjtBQXBDWSxvQ0FBWSJ9