import { HomeService } from '../service/home.service';
import { ResponseService } from '../service/response.service';
import { IResponse } from '../interface/response';
import { ICard } from '../interface/card';
import { ISwiper } from '../interface/swiper';
/**
 * 首页控制器
 * 处理首页相关的API请求
 */
export declare class HomeController {
    homeService: HomeService;
    responseService: ResponseService;
    /**
     * 首页根路径处理
     * @returns 首页基本信息响应
     */
    index(): Promise<IResponse<{
        message: string;
    }>>;
    /**
     * 获取首页卡片列表
     * @returns 卡片列表响应
     */
    getCards(): Promise<IResponse<ICard[]>>;
    /**
     * 获取首页轮播图列表
     * @returns 轮播图列表响应
     */
    getSwipers(): Promise<IResponse<ISwiper[]>>;
}
