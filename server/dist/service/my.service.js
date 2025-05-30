"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyService = void 0;
const decorator_1 = require("@midwayjs/decorator");
/**
 * 个人中心服务
 * 提供个人中心相关数据
 */
let MyService = class MyService {
    /**
     * 获取个人信息
     * @returns 个人信息
     */
    async getPersonalInfo() {
        // 模拟数据库查询
        return {
            image: '/static/avatar1.png',
            name: '小小轩',
            star: '天枰座',
            gender: 0,
            birth: '1994-09-27',
            address: ['440000', '440300'],
            brief: '在你身边，为你设计',
            photos: [
                {
                    url: '/static/img_td.png',
                    name: 'uploaded1.png',
                    type: 'image',
                },
                {
                    url: '/static/img_td.png',
                    name: 'uploaded2.png',
                    type: 'image',
                },
            ],
        };
    }
    /**
     * 获取服务列表
     * @returns 服务列表
     */
    async getServiceList() {
        // 模拟数据库查询
        return {
            service: [
                { image: '/static/icon_wx.png', name: '微信', type: 'weixin', url: '' },
                { image: '/static/icon_qq.png', name: 'QQ', type: 'QQ', url: '' },
                { image: '/static/icon_doc.png', name: '腾讯文档', type: 'document', url: '' },
                { image: '/static/icon_map.png', name: '腾讯地图', type: 'map', url: '' },
                { image: '/static/icon_td.png', name: '数据中心', type: 'data', url: '/pages/dataCenter/index' },
                { image: '/static/icon_td.png', name: '数据中心', type: 'data', url: '/pages/dataCenter/index' },
                { image: '/static/icon_td.png', name: '数据中心', type: 'data', url: '/pages/dataCenter/index' },
                { image: '/static/icon_td.png', name: '数据中心', type: 'data', url: '/pages/dataCenter/index' },
            ],
        };
    }
};
MyService = __decorate([
    (0, decorator_1.Provide)()
], MyService);
exports.MyService = MyService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZXJ2aWNlL215LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsbURBQThDO0FBSTlDOzs7R0FHRztBQUVJLElBQU0sU0FBUyxHQUFmLE1BQU0sU0FBUztJQUNwQjs7O09BR0c7SUFDSCxLQUFLLENBQUMsZUFBZTtRQUNuQixVQUFVO1FBQ1YsT0FBTztZQUNMLEtBQUssRUFBRSxxQkFBcUI7WUFDNUIsSUFBSSxFQUFFLEtBQUs7WUFDWCxJQUFJLEVBQUUsS0FBSztZQUNYLE1BQU0sRUFBRSxDQUFDO1lBQ1QsS0FBSyxFQUFFLFlBQVk7WUFDbkIsT0FBTyxFQUFFLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztZQUM3QixLQUFLLEVBQUUsV0FBVztZQUNsQixNQUFNLEVBQUU7Z0JBQ047b0JBQ0UsR0FBRyxFQUFFLG9CQUFvQjtvQkFDekIsSUFBSSxFQUFFLGVBQWU7b0JBQ3JCLElBQUksRUFBRSxPQUFPO2lCQUNkO2dCQUNEO29CQUNFLEdBQUcsRUFBRSxvQkFBb0I7b0JBQ3pCLElBQUksRUFBRSxlQUFlO29CQUNyQixJQUFJLEVBQUUsT0FBTztpQkFDZDthQUNGO1NBQ0YsQ0FBQztJQUNKLENBQUM7SUFFRDs7O09BR0c7SUFDSCxLQUFLLENBQUMsY0FBYztRQUNsQixVQUFVO1FBQ1YsT0FBTztZQUNMLE9BQU8sRUFBRTtnQkFDUCxFQUFFLEtBQUssRUFBRSxxQkFBcUIsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRTtnQkFDckUsRUFBRSxLQUFLLEVBQUUscUJBQXFCLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUU7Z0JBQ2pFLEVBQUUsS0FBSyxFQUFFLHNCQUFzQixFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFO2dCQUMxRSxFQUFFLEtBQUssRUFBRSxzQkFBc0IsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRTtnQkFDckUsRUFBRSxLQUFLLEVBQUUscUJBQXFCLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSx5QkFBeUIsRUFBRTtnQkFDNUYsRUFBRSxLQUFLLEVBQUUscUJBQXFCLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSx5QkFBeUIsRUFBRTtnQkFDNUYsRUFBRSxLQUFLLEVBQUUscUJBQXFCLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSx5QkFBeUIsRUFBRTtnQkFDNUYsRUFBRSxLQUFLLEVBQUUscUJBQXFCLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSx5QkFBeUIsRUFBRTthQUM3RjtTQUNGLENBQUM7SUFDSixDQUFDO0NBQ0YsQ0FBQTtBQWpEWSxTQUFTO0lBRHJCLElBQUEsbUJBQU8sR0FBRTtHQUNHLFNBQVMsQ0FpRHJCO0FBakRZLDhCQUFTIn0=