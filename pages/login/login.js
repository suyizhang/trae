import request from '~/api/request';

Page({
  data: {
    phoneNumber: '',
    isPhoneNumber: false,
    isCheck: false,
    isSubmit: false,
    isPasswordLogin: false,
    passwordInfo: {
      account: '',
      password: '',
    },
    radioValue: '',
  },

  /* 自定义功能函数 */
  changeSubmit() {
    if (this.data.isPasswordLogin) {
      if (this.data.passwordInfo.account !== '' && this.data.passwordInfo.password !== '' && this.data.isCheck) {
        this.setData({ isSubmit: true });
      } else {
        this.setData({ isSubmit: false });
      }
    } else if (this.data.isPhoneNumber && this.data.isCheck) {
      this.setData({ isSubmit: true });
    } else {
      this.setData({ isSubmit: false });
    }
  },

  // 手机号变更
  onPhoneInput(e) {
    const isPhoneNumber = /^[1][3,4,5,7,8,9][0-9]{9}$/.test(e.detail.value);
    this.setData({
      isPhoneNumber,
      phoneNumber: e.detail.value,
    });
    this.changeSubmit();
  },

  // 用户协议选择变更
  onCheckChange(e) {
    const { value } = e.detail;
    this.setData({
      radioValue: value,
      isCheck: value === 'agree',
    });
    this.changeSubmit();
  },

  onAccountChange(e) {
    this.setData({ passwordInfo: { ...this.data.passwordInfo, account: e.detail.value } });
    this.changeSubmit();
  },

  onPasswordChange(e) {
    this.setData({ passwordInfo: { ...this.data.passwordInfo, password: e.detail.value } });
    this.changeSubmit();
  },

  // 切换登录方式
  changeLogin() {
    this.setData({ isPasswordLogin: !this.data.isPasswordLogin, isSubmit: false });
  },

  // 微信登录
  async wechatLogin() {
    try {
      // 检查用户是否同意协议
      if (!this.data.isCheck) {
        wx.showToast({
          title: '请先同意用户协议',
          icon: 'none',
          duration: 2000
        });
        return;
      }

      // 调用微信登录接口获取code
      const { code } = await wx.login();
      if (!code) {
        throw new Error('微信登录失败，请稍后重试');
      }

      // 获取用户授权
      const userInfoRes = await this.getUserProfile();
      let userInfo = null;
      if (userInfoRes && userInfoRes.userInfo) {
        userInfo = userInfoRes.userInfo;
      } else {
        // 用户拒绝授权，但仍然可以继续登录流程
        console.warn('用户拒绝授权获取信息');
      }

      // 发送code和用户信息到后端进行登录验证
      const res = await request('/api/login/wechatLogin', 'post', { 
        data: { 
          code,
          userInfo: userInfo
        } 
      });
      
      // 保存token
      await wx.setStorageSync('access_token', res.data.token);
      
      // 如果是新用户，提示注册成功，否则提示登录成功
      const toastTitle = res.data.isNewUser ? '注册成功' : '登录成功';
      
      // 显示登录成功提示
      wx.showToast({
        title: toastTitle,
        icon: 'success',
        duration: 1500
      });

      // 跳转到个人中心页面
      setTimeout(() => {
        wx.switchTab({
          url: `/pages/my/index`,
        });
      }, 1500);
    } catch (error) {
      console.error('微信登录失败:', error);
      wx.showToast({
        title: error.message || '微信登录失败，请稍后重试',
        icon: 'none',
        duration: 2000
      });
    }
  },

  // 获取用户信息
  async getUserProfile() {
    try {
      // 调用微信接口获取用户信息
      const userInfo = await wx.getUserProfile({
        desc: '用于完善会员资料',
      });
      
      // 保存用户信息到本地
      await wx.setStorageSync('userInfo', userInfo.userInfo);
      return userInfo;
    } catch (error) {
      console.warn('获取用户信息失败:', error);
      return null;
    }
  },

  async login() {
    try {
      if (this.data.isPasswordLogin) {
        const res = await request('/login/postPasswordLogin', 'post', { data: this.data.passwordInfo });
        await wx.setStorageSync('access_token', res.data.token);
        wx.switchTab({
          url: `/pages/my/index`,
        });
      } else {
        const res = await request('/login/getSendMessage', 'get');
        wx.navigateTo({
          url: `/pages/loginCode/loginCode?phoneNumber=${this.data.phoneNumber}`,
        });
      }
    } catch (error) {
      console.error('登录失败:', error);
      wx.showToast({
        title: error.message || '登录失败，请稍后重试',
        icon: 'none',
        duration: 2000
      });
    }
  },
});
