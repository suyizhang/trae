import { ICard } from '../interface/card';
import { ISwiper } from '../interface/swiper';
/**
 * 首页服务
 * 提供首页相关数据
 */
export declare class HomeService {
    /**
     * 获取首页卡片列表
     * @returns 卡片列表
     */
    getCards(): Promise<ICard[]>;
    /**
     * 获取首页轮播图列表
     * @returns 轮播图列表
     */
    getSwipers(): Promise<ISwiper[]>;
}
