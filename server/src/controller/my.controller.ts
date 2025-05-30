import { Controller, Get, Inject } from '@midwayjs/decorator';
import { MyService } from '../service/my.service';
import { ResponseService } from '../service/response.service';
import { IResponse } from '../interface/response';
import { IUserInfo } from '../interface/user';
import { IServiceList } from '../interface/service';

/**
 * 个人中心控制器
 * 处理个人中心相关的API请求
 */
@Controller('/api')
export class MyController {
  @Inject()
  myService: MyService;

  @Inject()
  responseService: ResponseService;

  /**
   * 获取个人信息
   * @returns 个人信息响应
   */
  @Get('/genPersonalInfo')
  async getPersonalInfo(): Promise<IResponse<IUserInfo>> {
    try {
      const personalInfo = await this.myService.getPersonalInfo();
      return this.responseService.success(personalInfo, 'success');
    } catch (error) {
      return this.responseService.error(error.message);
    }
  }

  /**
   * 获取服务列表
   * @returns 服务列表响应
   */
  @Get('/getServiceList')
  async getServiceList(): Promise<IResponse<IServiceList>> {
    try {
      const serviceList = await this.myService.getServiceList();
      return this.responseService.success(serviceList, 'success');
    } catch (error) {
      return this.responseService.error(error.message);
    }
  }
}