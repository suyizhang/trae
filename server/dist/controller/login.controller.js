"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginController = void 0;
const decorator_1 = require("@midwayjs/decorator");
const login_service_1 = require("../service/login.service");
const response_service_1 = require("../service/response.service");
/**
 * 登录控制器
 * 处理登录相关的API请求
 */
let LoginController = class LoginController {
    /**
     * 密码登录
     * @param body 请求体
     * @returns 登录响应
     */
    async passwordLogin(body) {
        try {
            const { username, password } = body;
            const result = await this.loginService.passwordLogin(username, password);
            return this.responseService.success(result, '登录成功');
        }
        catch (error) {
            return this.responseService.error(error.message);
        }
    }
    /**
     * 验证码登录
     * @param body 请求体
     * @returns 登录响应
     */
    async codeLogin(body) {
        try {
            const { phone, code } = body;
            const result = await this.loginService.codeLogin(phone, code);
            return this.responseService.success(result, '验证码正确');
        }
        catch (error) {
            return this.responseService.error(error.message);
        }
    }
};
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", login_service_1.LoginService)
], LoginController.prototype, "loginService", void 0);
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", response_service_1.ResponseService)
], LoginController.prototype, "responseService", void 0);
__decorate([
    (0, decorator_1.Post)('/postPasswordLogin'),
    __param(0, (0, decorator_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], LoginController.prototype, "passwordLogin", null);
__decorate([
    (0, decorator_1.Post)('/postCodeVerify'),
    __param(0, (0, decorator_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], LoginController.prototype, "codeLogin", null);
LoginController = __decorate([
    (0, decorator_1.Controller)('/login')
], LoginController);
exports.LoginController = LoginController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250cm9sbGVyL2xvZ2luLmNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbURBQXFFO0FBQ3JFLDREQUF3RDtBQUN4RCxrRUFBOEQ7QUFHOUQ7OztHQUdHO0FBRUksSUFBTSxlQUFlLEdBQXJCLE1BQU0sZUFBZTtJQU8xQjs7OztPQUlHO0lBRUcsQUFBTixLQUFLLENBQUMsYUFBYSxDQUFTLElBQTRDO1FBQ3RFLElBQUk7WUFDRixNQUFNLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxHQUFHLElBQUksQ0FBQztZQUNwQyxNQUFNLE1BQU0sR0FBRyxNQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztZQUN6RSxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztTQUNyRDtRQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ2QsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDbEQ7SUFDSCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUVHLEFBQU4sS0FBSyxDQUFDLFNBQVMsQ0FBUyxJQUFxQztRQUMzRCxJQUFJO1lBQ0YsTUFBTSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUM7WUFDN0IsTUFBTSxNQUFNLEdBQUcsTUFBTSxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDOUQsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FDdEQ7UUFBQyxPQUFPLEtBQUssRUFBRTtZQUNkLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ2xEO0lBQ0gsQ0FBQztDQUNGLENBQUE7QUFyQ0M7SUFBQyxJQUFBLGtCQUFNLEdBQUU7OEJBQ0ssNEJBQVk7cURBQUM7QUFFM0I7SUFBQyxJQUFBLGtCQUFNLEdBQUU7OEJBQ1Esa0NBQWU7d0RBQUM7QUFRM0I7SUFETCxJQUFBLGdCQUFJLEVBQUMsb0JBQW9CLENBQUM7SUFDTixXQUFBLElBQUEsZ0JBQUksR0FBRSxDQUFBOzs7O29EQVExQjtBQVFLO0lBREwsSUFBQSxnQkFBSSxFQUFDLGlCQUFpQixDQUFDO0lBQ1AsV0FBQSxJQUFBLGdCQUFJLEdBQUUsQ0FBQTs7OztnREFRdEI7QUFyQ1UsZUFBZTtJQUQzQixJQUFBLHNCQUFVLEVBQUMsUUFBUSxDQUFDO0dBQ1IsZUFBZSxDQXNDM0I7QUF0Q1ksMENBQWUifQ==