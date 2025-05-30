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
exports.SearchController = void 0;
const decorator_1 = require("@midwayjs/decorator");
const search_service_1 = require("../service/search.service");
const response_service_1 = require("../service/response.service");
/**
 * 搜索控制器
 * 处理搜索相关的API请求
 */
let SearchController = class SearchController {
    /**
     * 获取搜索历史
     * @returns 搜索历史响应
     */
    async getSearchHistory() {
        try {
            const searchHistory = await this.searchService.getSearchHistory();
            return this.responseService.success(searchHistory, '请求成功');
        }
        catch (error) {
            return this.responseService.error(error.message);
        }
    }
    /**
     * 获取热门搜索
     * @returns 热门搜索响应
     */
    async getSearchPopular() {
        try {
            const searchPopular = await this.searchService.getSearchPopular();
            return this.responseService.success(searchPopular, '请求成功');
        }
        catch (error) {
            return this.responseService.error(error.message);
        }
    }
};
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", search_service_1.SearchService)
], SearchController.prototype, "searchService", void 0);
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", response_service_1.ResponseService)
], SearchController.prototype, "responseService", void 0);
__decorate([
    (0, decorator_1.Get)('/searchHistory'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SearchController.prototype, "getSearchHistory", null);
__decorate([
    (0, decorator_1.Get)('/searchPopular'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SearchController.prototype, "getSearchPopular", null);
SearchController = __decorate([
    (0, decorator_1.Controller)('/api')
], SearchController);
exports.SearchController = SearchController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29udHJvbGxlci9zZWFyY2guY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxtREFBOEQ7QUFDOUQsOERBQTBEO0FBQzFELGtFQUE4RDtBQUk5RDs7O0dBR0c7QUFFSSxJQUFNLGdCQUFnQixHQUF0QixNQUFNLGdCQUFnQjtJQU8zQjs7O09BR0c7SUFFRyxBQUFOLEtBQUssQ0FBQyxnQkFBZ0I7UUFDcEIsSUFBSTtZQUNGLE1BQU0sYUFBYSxHQUFHLE1BQU0sSUFBSSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1lBQ2xFLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQzVEO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDZCxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNsRDtJQUNILENBQUM7SUFFRDs7O09BR0c7SUFFRyxBQUFOLEtBQUssQ0FBQyxnQkFBZ0I7UUFDcEIsSUFBSTtZQUNGLE1BQU0sYUFBYSxHQUFHLE1BQU0sSUFBSSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1lBQ2xFLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQzVEO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDZCxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNsRDtJQUNILENBQUM7Q0FDRixDQUFBO0FBakNDO0lBQUMsSUFBQSxrQkFBTSxHQUFFOzhCQUNNLDhCQUFhO3VEQUFDO0FBRTdCO0lBQUMsSUFBQSxrQkFBTSxHQUFFOzhCQUNRLGtDQUFlO3lEQUFDO0FBTzNCO0lBREwsSUFBQSxlQUFHLEVBQUMsZ0JBQWdCLENBQUM7Ozs7d0RBUXJCO0FBT0s7SUFETCxJQUFBLGVBQUcsRUFBQyxnQkFBZ0IsQ0FBQzs7Ozt3REFRckI7QUFqQ1UsZ0JBQWdCO0lBRDVCLElBQUEsc0JBQVUsRUFBQyxNQUFNLENBQUM7R0FDTixnQkFBZ0IsQ0FrQzVCO0FBbENZLDRDQUFnQiJ9