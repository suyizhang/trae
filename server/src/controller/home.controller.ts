import { Controller, Get, Inject } from '@midwayjs/decorator';
import { HomeService } from '../service/home.service';
import { ResponseService } from '../service/response.service';
import { IResponse } from '../interface/response';
import { ICard } from '../interface/card';
import { ISwiper } from '../interface/swiper';

/**
 * 首页控制器
 * 处理首页相关的API请求
 */
@Controller('/home')
export class HomeController {
  @Inject()
  homeService: HomeService;

  @Inject()
  responseService: ResponseService;

  /**
   * 首页根路径处理
   * @returns 首页基本信息响应
   */
  @Get('/')
  async index(): Promise<IResponse<{ message: string }>> {
    try {
      return this.responseService.success({ message: '欢迎访问首页API' }, '请求成功');
    } catch (error) {
      return this.responseService.error(error.message);
    }
  }

  /**
   * 获取首页卡片列表
   * @returns 卡片列表响应
   */
  @Get('/cards')
  async getCards(): Promise<IResponse<ICard[]>> {
    try {
      const cards = await this.homeService.getCards();
      return this.responseService.success(cards, '请求成功');
    } catch (error) {
      return this.responseService.error(error.message);
    }
  }

  /**
   * 获取首页轮播图列表
   * @returns 轮播图列表响应
   */
  @Get('/swipers')
  async getSwipers(): Promise<IResponse<ISwiper[]>> {
    try {
      const swipers = await this.homeService.getSwipers();
      return this.responseService.success(swipers, '请求成功');
    } catch (error) {
      return this.responseService.error(error.message);
    }
  }
}