"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeService = void 0;
const decorator_1 = require("@midwayjs/decorator");
/**
 * 首页服务
 * 提供首页相关数据
 */
let HomeService = class HomeService {
    /**
     * 获取首页卡片列表
     * @returns 卡片列表
     */
    async getCards() {
        // 模拟数据库查询
        return [
            {
                url: '/static/home/card0.png',
                desc: '少年,星空与梦想',
                tags: [
                    {
                        text: 'AI绘画',
                        theme: 'primary',
                    },
                    {
                        text: '版权素材',
                        theme: 'success',
                    },
                ],
            },
            {
                url: '/static/home/card1.png',
                desc: '仰望星空的少女',
                tags: [
                    {
                        text: 'AI绘画',
                        theme: 'primary',
                    },
                    {
                        text: '版权素材',
                        theme: 'success',
                    },
                ],
            },
            {
                url: '/static/home/card3.png',
                desc: '仰望星空的少年',
                tags: [
                    {
                        text: 'AI绘画',
                        theme: 'primary',
                    },
                    {
                        text: '版权素材',
                        theme: 'success',
                    },
                ],
            },
            {
                url: '/static/home/card2.png',
                desc: '少年,星空与梦想',
                tags: [
                    {
                        text: 'AI绘画',
                        theme: 'primary',
                    },
                    {
                        text: '版权素材',
                        theme: 'success',
                    },
                ],
            },
            {
                url: '/static/home/card4.png',
                desc: '多彩的天空',
                tags: [
                    {
                        text: 'AI绘画',
                        theme: 'primary',
                    },
                    {
                        text: '版权素材',
                        theme: 'success',
                    },
                ],
            },
        ];
    }
    /**
     * 获取首页轮播图列表
     * @returns 轮播图列表
     */
    async getSwipers() {
        // 模拟数据库查询
        return new Array(6).fill({ url: '/static/home/swiper0.png' });
    }
};
HomeService = __decorate([
    (0, decorator_1.Provide)()
], HomeService);
exports.HomeService = HomeService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3NlcnZpY2UvaG9tZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLG1EQUE4QztBQUk5Qzs7O0dBR0c7QUFFSSxJQUFNLFdBQVcsR0FBakIsTUFBTSxXQUFXO0lBQ3RCOzs7T0FHRztJQUNILEtBQUssQ0FBQyxRQUFRO1FBQ1osVUFBVTtRQUNWLE9BQU87WUFDTDtnQkFDRSxHQUFHLEVBQUUsd0JBQXdCO2dCQUM3QixJQUFJLEVBQUUsVUFBVTtnQkFDaEIsSUFBSSxFQUFFO29CQUNKO3dCQUNFLElBQUksRUFBRSxNQUFNO3dCQUNaLEtBQUssRUFBRSxTQUFTO3FCQUNqQjtvQkFDRDt3QkFDRSxJQUFJLEVBQUUsTUFBTTt3QkFDWixLQUFLLEVBQUUsU0FBUztxQkFDakI7aUJBQ0Y7YUFDRjtZQUNEO2dCQUNFLEdBQUcsRUFBRSx3QkFBd0I7Z0JBQzdCLElBQUksRUFBRSxTQUFTO2dCQUNmLElBQUksRUFBRTtvQkFDSjt3QkFDRSxJQUFJLEVBQUUsTUFBTTt3QkFDWixLQUFLLEVBQUUsU0FBUztxQkFDakI7b0JBQ0Q7d0JBQ0UsSUFBSSxFQUFFLE1BQU07d0JBQ1osS0FBSyxFQUFFLFNBQVM7cUJBQ2pCO2lCQUNGO2FBQ0Y7WUFDRDtnQkFDRSxHQUFHLEVBQUUsd0JBQXdCO2dCQUM3QixJQUFJLEVBQUUsU0FBUztnQkFDZixJQUFJLEVBQUU7b0JBQ0o7d0JBQ0UsSUFBSSxFQUFFLE1BQU07d0JBQ1osS0FBSyxFQUFFLFNBQVM7cUJBQ2pCO29CQUNEO3dCQUNFLElBQUksRUFBRSxNQUFNO3dCQUNaLEtBQUssRUFBRSxTQUFTO3FCQUNqQjtpQkFDRjthQUNGO1lBQ0Q7Z0JBQ0UsR0FBRyxFQUFFLHdCQUF3QjtnQkFDN0IsSUFBSSxFQUFFLFVBQVU7Z0JBQ2hCLElBQUksRUFBRTtvQkFDSjt3QkFDRSxJQUFJLEVBQUUsTUFBTTt3QkFDWixLQUFLLEVBQUUsU0FBUztxQkFDakI7b0JBQ0Q7d0JBQ0UsSUFBSSxFQUFFLE1BQU07d0JBQ1osS0FBSyxFQUFFLFNBQVM7cUJBQ2pCO2lCQUNGO2FBQ0Y7WUFDRDtnQkFDRSxHQUFHLEVBQUUsd0JBQXdCO2dCQUM3QixJQUFJLEVBQUUsT0FBTztnQkFDYixJQUFJLEVBQUU7b0JBQ0o7d0JBQ0UsSUFBSSxFQUFFLE1BQU07d0JBQ1osS0FBSyxFQUFFLFNBQVM7cUJBQ2pCO29CQUNEO3dCQUNFLElBQUksRUFBRSxNQUFNO3dCQUNaLEtBQUssRUFBRSxTQUFTO3FCQUNqQjtpQkFDRjthQUNGO1NBQ0YsQ0FBQztJQUNKLENBQUM7SUFFRDs7O09BR0c7SUFDSCxLQUFLLENBQUMsVUFBVTtRQUNkLFVBQVU7UUFDVixPQUFPLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSwwQkFBMEIsRUFBRSxDQUFDLENBQUM7SUFDaEUsQ0FBQztDQUNGLENBQUE7QUF6RlksV0FBVztJQUR2QixJQUFBLG1CQUFPLEdBQUU7R0FDRyxXQUFXLENBeUZ2QjtBQXpGWSxrQ0FBVyJ9