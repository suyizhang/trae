import request from '~/api/request';
import useToastBehavior from '~/behaviors/useToast';

Page({
  behaviors: [useToastBehavior],

  data: {
    isLoad: false,
    service: [],
    personalInfo: {},
    gridList: [
      {
        name: '全部发布',
        icon: 'root-list',
        type: 'all',
        url: '',
      },
      {
        name: '审核中',
        icon: 'search',
        type: 'progress',
        url: '',
      },
      {
        name: '已发布',
        icon: 'upload',
        type: 'published',
        url: '',
      },
      {
        name: '草稿箱',
        icon: 'file-copy',
        type: 'draft',
        url: '',
      },
    ],

    settingList: [
      { name: '联系客服', icon: 'service', type: 'service' },
      { name: '设置', icon: 'setting', type: 'setting', url: '/pages/setting/index' },
    ],
  },

  onLoad() {
    this.getServiceList();
  },

  async onShow() {
    const Token = wx.getStorageSync('access_token');
    try {
      const personalInfo = await this.getPersonalInfo();

      if (Token) {
        this.setData({
          isLoad: true,
          personalInfo,
        });
      }
    } catch (error) {
      console.error('获取个人信息失败:', error);
      this.onShowToast('#t-toast', '获取个人信息失败');
    }
  },

  getServiceList() {
    request('/api/getServiceList')
      .then((res) => {
        const { service } = res.data;
        this.setData({ service });
      })
      .catch((error) => {
        console.error('获取服务列表失败:', error);
        this.onShowToast('#t-toast', '获取服务列表失败');
      });
  },

  async getPersonalInfo() {
    try {
      const res = await request('/api/genPersonalInfo');
      return res.data;
    } catch (error) {
      console.error('获取个人信息详情失败:', error);
      throw error; // 向上传递错误，让调用者处理
    }
  },

  onLogin(e) {
    wx.navigateTo({
      url: '/pages/login/login',
    });
  },

  onNavigateTo() {
    wx.navigateTo({ url: `/pages/my/info-edit/index` });
  },

  onEleClick(e) {
    const { name, url } = e.currentTarget.dataset.data;
    if (url) return;
    this.onShowToast('#t-toast', name);
  },
});
