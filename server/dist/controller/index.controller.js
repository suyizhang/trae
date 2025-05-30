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
Object.defineProperty(exports, "__esModule", { value: true });
exports.IndexController = void 0;
const decorator_1 = require("@midwayjs/decorator");
const response_service_1 = require("../service/response.service");
/**
 * 首页控制器
 * 处理根路径的API请求
 */
let IndexController = class IndexController {
    /**
     * 根路径处理
     * @returns 欢迎信息响应
     */
    async index() {
        try {
            return this.responseService.success({ message: '欢迎访问微信小程序后端API服务' }, '请求成功');
        }
        catch (error) {
            return this.responseService.error(error.message);
        }
    }
};
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", response_service_1.ResponseService)
], IndexController.prototype, "responseService", void 0);
__decorate([
    (0, decorator_1.Get)('/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], IndexController.prototype, "index", null);
IndexController = __decorate([
    (0, decorator_1.Controller)('/')
], IndexController);
exports.IndexController = IndexController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250cm9sbGVyL2luZGV4LmNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsbURBQThEO0FBQzlELGtFQUE4RDtBQUc5RDs7O0dBR0c7QUFFSSxJQUFNLGVBQWUsR0FBckIsTUFBTSxlQUFlO0lBSTFCOzs7T0FHRztJQUVHLEFBQU4sS0FBSyxDQUFDLEtBQUs7UUFDVCxJQUFJO1lBQ0YsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FDakMsRUFBRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsRUFDL0IsTUFBTSxDQUNQLENBQUM7U0FDSDtRQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ2QsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDbEQ7SUFDSCxDQUFDO0NBQ0YsQ0FBQTtBQWxCQztJQUFDLElBQUEsa0JBQU0sR0FBRTs4QkFDUSxrQ0FBZTt3REFBQztBQU8zQjtJQURMLElBQUEsZUFBRyxFQUFDLEdBQUcsQ0FBQzs7Ozs0Q0FVUjtBQWxCVSxlQUFlO0lBRDNCLElBQUEsc0JBQVUsRUFBQyxHQUFHLENBQUM7R0FDSCxlQUFlLENBbUIzQjtBQW5CWSwwQ0FBZSJ9