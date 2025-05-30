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
exports.HomeController = void 0;
const decorator_1 = require("@midwayjs/decorator");
const home_service_1 = require("../service/home.service");
const response_service_1 = require("../service/response.service");
/**
 * 首页控制器
 * 处理首页相关的API请求
 */
let HomeController = class HomeController {
    /**
     * 首页根路径处理
     * @returns 首页基本信息响应
     */
    async index() {
        try {
            return this.responseService.success({ message: '欢迎访问首页API' }, '请求成功');
        }
        catch (error) {
            return this.responseService.error(error.message);
        }
    }
    /**
     * 获取首页卡片列表
     * @returns 卡片列表响应
     */
    async getCards() {
        try {
            const cards = await this.homeService.getCards();
            return this.responseService.success(cards, '请求成功');
        }
        catch (error) {
            return this.responseService.error(error.message);
        }
    }
    /**
     * 获取首页轮播图列表
     * @returns 轮播图列表响应
     */
    async getSwipers() {
        try {
            const swipers = await this.homeService.getSwipers();
            return this.responseService.success(swipers, '请求成功');
        }
        catch (error) {
            return this.responseService.error(error.message);
        }
    }
};
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", home_service_1.HomeService)
], HomeController.prototype, "homeService", void 0);
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", response_service_1.ResponseService)
], HomeController.prototype, "responseService", void 0);
__decorate([
    (0, decorator_1.Get)('/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], HomeController.prototype, "index", null);
__decorate([
    (0, decorator_1.Get)('/cards'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], HomeController.prototype, "getCards", null);
__decorate([
    (0, decorator_1.Get)('/swipers'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], HomeController.prototype, "getSwipers", null);
HomeController = __decorate([
    (0, decorator_1.Controller)('/home')
], HomeController);
exports.HomeController = HomeController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbnRyb2xsZXIvaG9tZS5jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLG1EQUE4RDtBQUM5RCwwREFBc0Q7QUFDdEQsa0VBQThEO0FBSzlEOzs7R0FHRztBQUVJLElBQU0sY0FBYyxHQUFwQixNQUFNLGNBQWM7SUFPekI7OztPQUdHO0lBRUcsQUFBTixLQUFLLENBQUMsS0FBSztRQUNULElBQUk7WUFDRixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQ3ZFO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDZCxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNsRDtJQUNILENBQUM7SUFFRDs7O09BR0c7SUFFRyxBQUFOLEtBQUssQ0FBQyxRQUFRO1FBQ1osSUFBSTtZQUNGLE1BQU0sS0FBSyxHQUFHLE1BQU0sSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNoRCxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztTQUNwRDtRQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ2QsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDbEQ7SUFDSCxDQUFDO0lBRUQ7OztPQUdHO0lBRUcsQUFBTixLQUFLLENBQUMsVUFBVTtRQUNkLElBQUk7WUFDRixNQUFNLE9BQU8sR0FBRyxNQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDcEQsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUM7U0FDdEQ7UUFBQyxPQUFPLEtBQUssRUFBRTtZQUNkLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ2xEO0lBQ0gsQ0FBQztDQUNGLENBQUE7QUE5Q0M7SUFBQyxJQUFBLGtCQUFNLEdBQUU7OEJBQ0ksMEJBQVc7bURBQUM7QUFFekI7SUFBQyxJQUFBLGtCQUFNLEdBQUU7OEJBQ1Esa0NBQWU7dURBQUM7QUFPM0I7SUFETCxJQUFBLGVBQUcsRUFBQyxHQUFHLENBQUM7Ozs7MkNBT1I7QUFPSztJQURMLElBQUEsZUFBRyxFQUFDLFFBQVEsQ0FBQzs7Ozs4Q0FRYjtBQU9LO0lBREwsSUFBQSxlQUFHLEVBQUMsVUFBVSxDQUFDOzs7O2dEQVFmO0FBOUNVLGNBQWM7SUFEMUIsSUFBQSxzQkFBVSxFQUFDLE9BQU8sQ0FBQztHQUNQLGNBQWMsQ0ErQzFCO0FBL0NZLHdDQUFjIn0=