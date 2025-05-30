import { Provide } from '@midwayjs/decorator';
import { ICard } from '../interface/card';
import { ISwiper } from '../interface/swiper';

/**
 * 首页服务
 * 提供首页相关数据
 */
@Provide()
export class HomeService {
  /**
   * 获取首页卡片列表
   * @returns 卡片列表
   */
  async getCards(): Promise<ICard[]> {
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
  async getSwipers(): Promise<ISwiper[]> {
    // 模拟数据库查询
    return new Array(6).fill({ url: '/static/home/swiper0.png' });
  }
}