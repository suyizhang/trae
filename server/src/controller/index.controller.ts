import { Controller, Get, Inject } from '@midwayjs/decorator';
import { ResponseService } from '../service/response.service';
import { IResponse } from '../interface/response';

/**
 * 首页控制器
 * 处理根路径的API请求
 */
@Controller('/api')
export class IndexController {
  @Inject()
  responseService: ResponseService;

  /**
   * 根路径处理
   * @returns 欢迎信息响应
   */
  @Get('/')
  async index(): Promise<IResponse<{ message: string }>> {
    try {
      return this.responseService.success(
        { message: '欢迎访问微信小程序后端API服务' },
        '请求成功'
      );
    } catch (error) {
      return this.responseService.error(error.message);
    }
  }
}