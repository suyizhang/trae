import { Provide } from '@midwayjs/decorator';
import { v4 as uuidv4 } from 'uuid';

/**
 * 登录服务
 * 提供登录相关功能
 */
@Provide()
export class LoginService {
  /**
   * 密码登录
   * @param username 用户名
   * @param password 密码
   * @returns 登录结果
   */
  async passwordLogin(username: string, password: string): Promise<{ token: string }> {
    // 模拟验证用户名和密码
    // 实际应用中应该查询数据库并验证密码
    if (username && password) {
      // 生成token
      return {
        token: uuidv4(),
      };
    }
    throw new Error('用户名或密码错误');
  }

  /**
   * 验证码登录
   * @param phone 手机号
   * @param code 验证码
   * @returns 登录结果
   */
  async codeLogin(phone: string, code: string): Promise<{ token: string }> {
    // 模拟验证手机号和验证码
    // 实际应用中应该查询数据库并验证验证码
    if (phone && code) {
      // 生成token
      return {
        token: uuidv4(),
      };
    }
    throw new Error('手机号或验证码错误');
  }
}