// app.js
import config from './config';
import Mock from './mock/index';
import createBus from './utils/eventBus';
import request from './api/request';

// 仅在模拟模式下导入模拟函数
let connectSocket, fetchUnreadNum;
if (config.isMock) {
  Mock();
  // 动态导入模拟函数
  const chatMock = require('./mock/chat');
  connectSocket = chatMock.connectSocket;
  fetchUnreadNum = chatMock.fetchUnreadNum;
}

App({
  onLaunch() {
    const updateManager = wx.getUpdateManager();

    updateManager.onCheckForUpdate((res) => {
      // console.log(res.hasUpdate)
    });

    updateManager.onUpdateReady(() => {
      wx.showModal({
        title: '更新提示',
        content: '新版本已经准备好，是否重启应用？',
        success(res) {
          if (res.confirm) {
            updateManager.applyUpdate();
          }
        },
      });
    });

    // this.getUnreadNum();
    this.connect();
  },
  globalData: {
    userInfo: null,
    unreadNum: 0, // 未读消息数量
    socket: null, // SocketTask 对象
  },

  /** 全局事件总线 */
  eventBus: createBus(),

  /** 初始化WebSocket */
  connect() {
    // 如果不是模拟模式，则使用真实的WebSocket连接
    if (!config.isMock) {
      const socket = wx.connectSocket({
        url: `${config.wsUrl || 'ws://localhost:10302'}/ws`,
        success: () => {
          console.log('WebSocket连接成功');
        },
        fail: (err) => {
          console.error('WebSocket连接失败:', err);
        }
      });
      
      socket.onMessage((data) => {
        try {
          data = JSON.parse(data.data);
          if (data.type === 'message' && !data.data.message.read) {
            this.setUnreadNum(this.globalData.unreadNum + 1);
          }
        } catch (error) {
          console.error('解析WebSocket消息失败:', error);
        }
      });
      
      this.globalData.socket = socket;
      return;
    }
    
    // 模拟模式下使用mock的连接
    const socket = connectSocket();
    socket.onMessage((data) => {
      data = JSON.parse(data);
      if (data.type === 'message' && !data.data.message.read) this.setUnreadNum(this.globalData.unreadNum + 1);
    });
    this.globalData.socket = socket;
  },

  /** 获取未读消息数量 */
  async getUnreadNum() {
    try {
      if (!config.isMock) {
        const res = await request('/api/unreadNum');
        this.globalData.unreadNum = res.data;
        this.eventBus.emit('unread-num-change', res.data);
      } else {
        // 模拟模式下使用mock的函数
        const { data } = await fetchUnreadNum();
        this.globalData.unreadNum = data;
        this.eventBus.emit('unread-num-change', data);
      }
    } catch (error) {
      console.error('获取未读消息数量失败:', error);
      // 默认设置为0
      this.globalData.unreadNum = 0;
      this.eventBus.emit('unread-num-change', 0);
    }
  },

  /** 设置未读消息数量 */
  setUnreadNum(unreadNum) {
    this.globalData.unreadNum = unreadNum;
    this.eventBus.emit('unread-num-change', unreadNum);
  },
});
