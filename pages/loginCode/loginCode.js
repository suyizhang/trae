import request from '~/api/request';

Page({
  data: {
    phoneNumber: '',
    sendCodeCount: 60,
    verifyCode: '',
  },

  timer: null,

  onLoad(options) {
    const { phoneNumber } = options;
    if (phoneNumber) {
      this.setData({ phoneNumber });
    }
    this.countDown();
  },

  onVerifycodeChange(e) {
    this.setData({
      verifyCode: e.detail.value,
    });
  },

  countDown() {
    this.setData({ sendCodeCount: 60 });
    this.timer = setInterval(() => {
      if (this.data.sendCodeCount <= 0) {
        this.setData({ isSend: false, sendCodeCount: 0 });
        clearInterval(this.timer);
      } else {
        this.setData({ sendCodeCount: this.data.sendCodeCount - 1 });
      }
    }, 1000);
  },

  sendCode() {
    if (this.data.sendCodeCount === 0) {
      this.countDown();
    }
  },

  async login() {
    try {
      const res = await request('/login/postCodeVerify', 'get', { code: this.data.verifyCode });
      await wx.setStorageSync('access_token', res.data.token);
      wx.switchTab({
        url: `/pages/my/index`,
      });
    } catch (error) {
      console.error('验证码登录失败:', error);
      wx.showToast({
        title: error.message || '验证码登录失败，请稍后重试',
        icon: 'none',
        duration: 2000
      });
    }
  },
});
