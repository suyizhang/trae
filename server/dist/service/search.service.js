"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchService = void 0;
const decorator_1 = require("@midwayjs/decorator");
/**
 * 搜索服务
 * 提供搜索相关数据
 */
let SearchService = class SearchService {
    /**
     * 获取搜索历史
     * @returns 搜索历史
     */
    async getSearchHistory() {
        // 模拟数据库查询
        return {
            historyWords: ['AI绘画', 'Stable Diffusion', '版权素材', '星空', 'illustration', '原创'],
        };
    }
    /**
     * 获取热门搜索
     * @returns 热门搜索
     */
    async getSearchPopular() {
        // 模拟数据库查询
        return {
            popularWords: [
                '考研和靠边同时上岸应该怎么选？有哪些参考建议',
                '日常饮食中，如何选择优质蛋白',
                '你有没有网购维权成功的经历？求分享经验',
                '夏季带孩子旅游，你的必备物品有哪些',
                '在海外越卖越贵，中国汽车做对了什么',
                '当HR问你离职原因，怎么回答最能被接受',
            ],
        };
    }
};
SearchService = __decorate([
    (0, decorator_1.Provide)()
], SearchService);
exports.SearchService = SearchService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2VydmljZS9zZWFyY2guc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxtREFBOEM7QUFHOUM7OztHQUdHO0FBRUksSUFBTSxhQUFhLEdBQW5CLE1BQU0sYUFBYTtJQUN4Qjs7O09BR0c7SUFDSCxLQUFLLENBQUMsZ0JBQWdCO1FBQ3BCLFVBQVU7UUFDVixPQUFPO1lBQ0wsWUFBWSxFQUFFLENBQUMsTUFBTSxFQUFFLGtCQUFrQixFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFLElBQUksQ0FBQztTQUMvRSxDQUFDO0lBQ0osQ0FBQztJQUVEOzs7T0FHRztJQUNILEtBQUssQ0FBQyxnQkFBZ0I7UUFDcEIsVUFBVTtRQUNWLE9BQU87WUFDTCxZQUFZLEVBQUU7Z0JBQ1osd0JBQXdCO2dCQUN4QixnQkFBZ0I7Z0JBQ2hCLHFCQUFxQjtnQkFDckIsbUJBQW1CO2dCQUNuQixtQkFBbUI7Z0JBQ25CLHFCQUFxQjthQUN0QjtTQUNGLENBQUM7SUFDSixDQUFDO0NBQ0YsQ0FBQTtBQTdCWSxhQUFhO0lBRHpCLElBQUEsbUJBQU8sR0FBRTtHQUNHLGFBQWEsQ0E2QnpCO0FBN0JZLHNDQUFhIn0=