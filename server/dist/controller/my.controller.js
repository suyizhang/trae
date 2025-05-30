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
exports.MyController = void 0;
const decorator_1 = require("@midwayjs/decorator");
const my_service_1 = require("../service/my.service");
const response_service_1 = require("../service/response.service");
/**
 * 个人中心控制器
 * 处理个人中心相关的API请求
 */
let MyController = class MyController {
    /**
     * 获取个人信息
     * @returns 个人信息响应
     */
    async getPersonalInfo() {
        try {
            const personalInfo = await this.myService.getPersonalInfo();
            return this.responseService.success(personalInfo, 'success');
        }
        catch (error) {
            return this.responseService.error(error.message);
        }
    }
    /**
     * 获取服务列表
     * @returns 服务列表响应
     */
    async getServiceList() {
        try {
            const serviceList = await this.myService.getServiceList();
            return this.responseService.success(serviceList, 'success');
        }
        catch (error) {
            return this.responseService.error(error.message);
        }
    }
};
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", my_service_1.MyService)
], MyController.prototype, "myService", void 0);
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", response_service_1.ResponseService)
], MyController.prototype, "responseService", void 0);
__decorate([
    (0, decorator_1.Get)('/genPersonalInfo'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MyController.prototype, "getPersonalInfo", null);
__decorate([
    (0, decorator_1.Get)('/getServiceList'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MyController.prototype, "getServiceList", null);
MyController = __decorate([
    (0, decorator_1.Controller)('/api')
], MyController);
exports.MyController = MyController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXkuY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250cm9sbGVyL215LmNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsbURBQThEO0FBQzlELHNEQUFrRDtBQUNsRCxrRUFBOEQ7QUFLOUQ7OztHQUdHO0FBRUksSUFBTSxZQUFZLEdBQWxCLE1BQU0sWUFBWTtJQU92Qjs7O09BR0c7SUFFRyxBQUFOLEtBQUssQ0FBQyxlQUFlO1FBQ25CLElBQUk7WUFDRixNQUFNLFlBQVksR0FBRyxNQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDNUQsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsU0FBUyxDQUFDLENBQUM7U0FDOUQ7UUFBQyxPQUFPLEtBQUssRUFBRTtZQUNkLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ2xEO0lBQ0gsQ0FBQztJQUVEOzs7T0FHRztJQUVHLEFBQU4sS0FBSyxDQUFDLGNBQWM7UUFDbEIsSUFBSTtZQUNGLE1BQU0sV0FBVyxHQUFHLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUMxRCxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxTQUFTLENBQUMsQ0FBQztTQUM3RDtRQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ2QsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDbEQ7SUFDSCxDQUFDO0NBQ0YsQ0FBQTtBQWpDQztJQUFDLElBQUEsa0JBQU0sR0FBRTs4QkFDRSxzQkFBUzsrQ0FBQztBQUVyQjtJQUFDLElBQUEsa0JBQU0sR0FBRTs4QkFDUSxrQ0FBZTtxREFBQztBQU8zQjtJQURMLElBQUEsZUFBRyxFQUFDLGtCQUFrQixDQUFDOzs7O21EQVF2QjtBQU9LO0lBREwsSUFBQSxlQUFHLEVBQUMsaUJBQWlCLENBQUM7Ozs7a0RBUXRCO0FBakNVLFlBQVk7SUFEeEIsSUFBQSxzQkFBVSxFQUFDLE1BQU0sQ0FBQztHQUNOLFlBQVksQ0FrQ3hCO0FBbENZLG9DQUFZIn0=