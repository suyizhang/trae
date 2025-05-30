/**
 * 登录服务
 * 提供登录相关功能
 */
export declare class LoginService {
    /**
     * 密码登录
     * @param username 用户名
     * @param password 密码
     * @returns 登录结果
     */
    passwordLogin(username: string, password: string): Promise<{
        token: string;
    }>;
    /**
     * 验证码登录
     * @param phone 手机号
     * @param code 验证码
     * @returns 登录结果
     */
    codeLogin(phone: string, code: string): Promise<{
        token: string;
    }>;
}
