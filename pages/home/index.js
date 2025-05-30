import Message from 'tdesign-miniprogram/message/index';
import request from '~/api/request';

// 获取应用实例
// const app = getApp()

Page({
  data: {
    enable: false,
    swiperList: [],
    cardInfo: [],
    // 发布
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName'), // 如需尝试获取用户信息可改为false
  },
  // 生命周期
  async onReady() {
    try {
      const [cardRes, swiperRes] = await Promise.all([
        request('/home/cards'),
        request('/home/swipers'),
      ]);

      this.setData({
        cardInfo: cardRes.data,
        focusCardInfo: cardRes.data.slice(0, 3),
        swiperList: swiperRes.data,
      });
    } catch (error) {
      console.error('获取首页数据失败:', error);
      Message.error({
        context: this,
        offset: [120, 32],
        duration: 3000,
        content: '获取数据失败，请稍后重试',
      });
    }
  },
  onLoad(option) {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true,
      });
    }
    if (option.oper) {
      let content = '';
      if (option.oper === 'release') {
        content = '发布成功';
      } else if (option.oper === 'save') {
        content = '保存成功';
      }
      this.showOperMsg(content);
    }
  },
  onRefresh() {
    this.refresh();
  },
  async refresh() {
    this.setData({
      enable: true,
    });
    
    try {
      const [cardRes, swiperRes] = await Promise.all([
        request('/home/cards'),
        request('/home/swipers'),
      ]);

      setTimeout(() => {
        this.setData({
          enable: false,
          cardInfo: cardRes.data,
          swiperList: swiperRes.data,
        });
      }, 1500);
    } catch (error) {
      console.error('刷新首页数据失败:', error);
      this.setData({
        enable: false,
      });
      Message.error({
        context: this,
        offset: [120, 32],
        duration: 3000,
        content: '刷新失败，请稍后重试',
      });
    }
  },
  showOperMsg(content) {
    Message.success({
      context: this,
      offset: [120, 32],
      duration: 4000,
      content,
    });
  },
  goRelease() {
    wx.navigateTo({
      url: '/pages/release/index',
    });
  },
});
