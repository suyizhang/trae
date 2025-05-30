import { Provide } from '@midwayjs/decorator';
import { v4 as uuidv4 } from 'uuid';
import { WechatUtil } from '../util/wechat.util';

// 模拟用户数据存储
interface User {
  id: string;
  username: string;
  password?: string;
  phone?: string;
  openid?: string;
  unionid?: string;
  avatar?: string;
  nickname?: string;
  createdAt: Date;
}

/**
 * 登录服务
 * 提供登录相关功能
 */
@Provide()
export class LoginService {
  // 模拟用户数据库
  private users: User[] = [];

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

  /**
   * 微信登录
   * @param code 微信登录临时凭证code
   * @param frontendUserInfo 前端传来的用户信息
   * @returns 登录结果
   */
  async wechatLogin(code: string, frontendUserInfo?: any): Promise<{ token: string; isNewUser: boolean }> {
    if (!code) {
      throw new Error('微信登录code不能为空');
    }

    try {
      // 调用微信接口获取openid和unionid
      const wxSession = await WechatUtil.code2Session(code);
      const { openid, unionid } = wxSession;

      // 获取微信用户信息
      let userInfo = {
        nickname: '微信用户',
        avatar: 'https://thirdwx.qlogo.cn/mmopen/vi_32/POgEwh4mIHO4nibH0KlMECNjjGxQUq24ZEaGT4poC6icRiccVGKSyXwibcPq4BWmiaIGuG1icwxaQX6grC9VemZoJ8rg/132',
      };

      // 优先使用前端传来的用户信息
      if (frontendUserInfo && frontendUserInfo.nickName && frontendUserInfo.avatarUrl) {
        userInfo = {
          nickname: frontendUserInfo.nickName,
          avatar: frontendUserInfo.avatarUrl,
        };
      } else {
        try {
          // 尝试获取更详细的用户信息
          const accessToken = await WechatUtil.getAccessToken();
          const wxUserInfo = await WechatUtil.getUserInfo(openid, accessToken);
          if (wxUserInfo) {
            userInfo = {
              nickname: wxUserInfo.nickname || userInfo.nickname,
              avatar: wxUserInfo.headimgurl || userInfo.avatar,
            };
          }
        } catch (userInfoError) {
          console.warn('获取微信用户详细信息失败，使用默认信息', userInfoError);
          // 获取用户信息失败，使用默认值继续
        }
      }

      // 查找是否已存在该微信用户
      let user = this.users.find(u => u.openid === openid);
      let isNewUser = false;

      if (!user) {
        // 创建新用户
        user = {
          id: uuidv4(),
          username: `wx_user_${openid.substring(0, 8)}`,
          openid,
          unionid,
          avatar: userInfo.avatar,
          nickname: userInfo.nickname,
          createdAt: new Date(),
        };
        this.users.push(user);
        isNewUser = true;
      } else {
        // 更新用户信息
        user.avatar = userInfo.avatar;
        user.nickname = userInfo.nickname;
      }

      // 生成token
      return {
        token: uuidv4(),
        isNewUser,
      };
    } catch (error) {
      throw new Error('微信登录失败: ' + error.message);
    }
  }
}