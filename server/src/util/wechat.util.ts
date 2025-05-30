import { makeHttpRequest } from '@midwayjs/core';

/**
 * 微信小程序工具类
 * 提供微信小程序相关的API调用方法
 */
export class WechatUtil {
  // 微信小程序AppID和AppSecret
  private static readonly APPID = 'your_appid'; // 替换为实际的AppID
  private static readonly APPSECRET = 'your_appsecret'; // 替换为实际的AppSecret

  /**
   * 获取微信小程序接口调用凭证
   * @returns 接口调用凭证
   */
  static async getAccessToken(): Promise<string> {
    try {
      const url = `https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${this.APPID}&secret=${this.APPSECRET}`;
      const result = await makeHttpRequest(url, {
        method: 'GET',
        dataType: 'json',
      });

      if (result.status === 200 && result.data) {
        const responseData = result.data as { access_token: string };
        if (responseData.access_token) {
          return responseData.access_token;
        }
      }
      throw new Error('获取微信接口调用凭证失败');
    } catch (error) {
      console.error('获取微信接口调用凭证失败:', error);
      throw error;
    }
  }

  /**
   * 通过code获取微信用户的openid和session_key
   * @param code 微信登录临时凭证
   * @returns 包含openid和session_key的对象
   */
  static async code2Session(code: string): Promise<{ openid: string; session_key: string; unionid?: string }> {
    try {
      const url = `https://api.weixin.qq.com/sns/jscode2session?appid=${this.APPID}&secret=${this.APPSECRET}&js_code=${code}&grant_type=authorization_code`;
      const result = await makeHttpRequest(url, {
        method: 'GET',
        dataType: 'json',
      });

      if (result.status === 200 && result.data) {
        const responseData = result.data as {
          openid: string;
          session_key: string;
          unionid?: string
        };
        if (responseData.openid) {
          return {
            openid: responseData.openid,
            session_key: responseData.session_key,
            unionid: responseData.unionid,
          };
        }
      }
      throw new Error('获取微信用户openid失败');
    } catch (error) {
      console.error('获取微信用户openid失败:', error);
      throw error;
    }
  }

  /**
   * 获取微信用户信息
   * @param openid 用户的openid
   * @param access_token 接口调用凭证
   * @returns 用户信息
   */
  static async getUserInfo(openid: string, access_token: string): Promise<any> {
    try {
      const url = `https://api.weixin.qq.com/cgi-bin/user/info?access_token=${access_token}&openid=${openid}&lang=zh_CN`;
      const result = await makeHttpRequest(url, {
        method: 'GET',
        dataType: 'json',
      });

      if (result.status === 200 && result.data) {
        const responseData = result.data as { openid: string;[key: string]: any };
        if (responseData.openid) {
          return responseData;
        }
      }
      throw new Error('获取微信用户信息失败');
    } catch (error) {
      console.error('获取微信用户信息失败:', error);
      throw error;
    }
  }
}