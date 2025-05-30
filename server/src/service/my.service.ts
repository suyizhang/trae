import { Provide } from '@midwayjs/decorator';
import { IUserInfo } from '../interface/user';
import { IServiceList } from '../interface/service';

/**
 * 个人中心服务
 * 提供个人中心相关数据
 */
@Provide()
export class MyService {
  /**
   * 获取个人信息
   * @returns 个人信息
   */
  async getPersonalInfo(): Promise<IUserInfo> {
    // 模拟数据库查询
    return {
      image: '/static/avatar1.png',
      name: '小小轩',
      star: '天枰座',
      gender: 0,
      birth: '1994-09-27',
      address: ['440000', '440300'],
      brief: '在你身边，为你设计',
      photos: [
        {
          url: '/static/img_td.png',
          name: 'uploaded1.png',
          type: 'image',
        },
        {
          url: '/static/img_td.png',
          name: 'uploaded2.png',
          type: 'image',
        },
      ],
    };
  }

  /**
   * 获取服务列表
   * @returns 服务列表
   */
  async getServiceList(): Promise<IServiceList> {
    // 模拟数据库查询
    return {
      service: [
        { image: '/static/icon_wx.png', name: '微信', type: 'weixin', url: '' },
        { image: '/static/icon_qq.png', name: 'QQ', type: 'QQ', url: '' },
        { image: '/static/icon_doc.png', name: '腾讯文档', type: 'document', url: '' },
        { image: '/static/icon_map.png', name: '腾讯地图', type: 'map', url: '' },
        { image: '/static/icon_td.png', name: '数据中心', type: 'data', url: '/pages/dataCenter/index' },
        { image: '/static/icon_td.png', name: '数据中心', type: 'data', url: '/pages/dataCenter/index' },
        { image: '/static/icon_td.png', name: '数据中心', type: 'data', url: '/pages/dataCenter/index' },
        { image: '/static/icon_td.png', name: '数据中心', type: 'data', url: '/pages/dataCenter/index' },
      ],
    };
  }
}