import { Controller, Post, Inject, Body } from '@midwayjs/decorator';
import { LoginService } from '../service/login.service';
import { ResponseService } from '../service/response.service';
import { IResponse } from '../interface/response';

/**
 * 登录控制器
 * 处理登录相关的API请求
 */
@Controller('/api/login')
export class LoginController {
  @Inject()
  loginService: LoginService;

  @Inject()
  responseService: ResponseService;

  /**
   * 密码登录
   * @param body 请求体
   * @returns 登录响应
   */
  @Post('/postPasswordLogin')
  async passwordLogin(@Body() body: { username: string; password: string }): Promise<IResponse<{ token: string }>> {
    try {
      const { username, password } = body;
      const result = await this.loginService.passwordLogin(username, password);
      return this.responseService.success(result, '登录成功');
    } catch (error) {
      return this.responseService.error(error.message);
    }
  }

  /**
   * 验证码登录
   * @param body 请求体
   * @returns 登录响应
   */
  @Post('/postCodeVerify')
  async codeLogin(@Body() body: { phone: string; code: string }): Promise<IResponse<{ token: string }>> {
    try {
      const { phone, code } = body;
      const result = await this.loginService.codeLogin(phone, code);
      return this.responseService.success(result, '验证码正确');
    } catch (error) {
      return this.responseService.error(error.message);
    }
  }

  /**
   * 微信登录
   * @param body 请求体
   * @returns 登录响应
   */
  @Post('/wechatLogin')
  async wechatLogin(@Body() body: { code: string; userInfo?: any }): Promise<IResponse<{ token: string; isNewUser: boolean }>> {
    try {
      const { code, userInfo } = body;
      const result = await this.loginService.wechatLogin(code, userInfo);
      return this.responseService.success(result, '微信登录成功');
    } catch (error) {
      return this.responseService.error(error.message);
    }
  }
}