import { LoginService } from '../service/login.service';
import { ResponseService } from '../service/response.service';
import { IResponse } from '../interface/response';
/**
 * 登录控制器
 * 处理登录相关的API请求
 */
export declare class LoginController {
    loginService: LoginService;
    responseService: ResponseService;
    /**
     * 密码登录
     * @param body 请求体
     * @returns 登录响应
     */
    passwordLogin(body: {
        username: string;
        password: string;
    }): Promise<IResponse<{
        token: string;
    }>>;
    /**
     * 验证码登录
     * @param body 请求体
     * @returns 登录响应
     */
    codeLogin(body: {
        phone: string;
        code: string;
    }): Promise<IResponse<{
        token: string;
    }>>;
}
