import request from '~/api/request';

Page({
  /**
   * 页面的初始数据
   */
  data: {
    totalSituationDataList: null,
    totalSituationKeyList: null,
    completeRateDataList: null,
    complete_rate_keyList: null,
    interactionSituationDataList: null,
    interaction_situation_keyList: null,
    areaDataList: null,
    areaDataKeysList: null,
    memberitemWidth: null,
    smallitemWidth: null,
  },

  onLoad() {
    this.init();
  },

  init() {
    this.getMemberData();
    this.getInteractionData();
    this.getCompleteRateData();
    this.getAreaData();
  },

  /**
   * 获取 "整体情况" 数据
   */
  async getMemberData() {
    try {
      const res = await request('/dataCenter/member');
      const totalSituationData = res.data.template.succ.data.list;
      this.setData({
        totalSituationDataList: totalSituationData,
      });

      // 计算每个.item元素的宽度
      const itemWidth = `${(750 - 32 * (totalSituationData.length - 1)) / totalSituationData.length}rpx`;

      // 更新.item元素的样式
      this.setData({
        memberitemWidth: itemWidth,
      });
    } catch (error) {
      console.error('获取整体情况数据失败:', error);
      wx.showToast({
        title: '获取整体情况数据失败',
        icon: 'none',
        duration: 2000
      });
    }
  },

  /**
   * 获取 "互动情况" 数据
   */
  async getInteractionData() {
    try {
      const res = await request('/dataCenter/interaction');
      const interactionSituationData = res.data.template.succ.data.list;
      this.setData({
        interactionSituationDataList: interactionSituationData,
        interactionSituationKeysList: Object.keys(interactionSituationData[0]),
      });

      // 计算每个.item元素的宽度
      const itemWidth = `${(750 - 32 * (interactionSituationData.length - 1)) / interactionSituationData.length}rpx`;
      // 更新.item元素的样式
      this.setData({
        smallitemWidth: itemWidth,
      });
    } catch (error) {
      console.error('获取互动情况数据失败:', error);
      wx.showToast({
        title: '获取互动情况数据失败',
        icon: 'none',
        duration: 2000
      });
    }
  },

  /**
   * 完播率
   */
  async getCompleteRateData() {
    try {
      const res = await request('/dataCenter/complete-rate');
      const completeRateData = res.data.template.succ.data.list;
      this.setData({
        completeRateDataList: completeRateData,
        completeRateKeysList: Object.keys(completeRateData[0]),
      });

      // 计算每个.item元素的宽度
      const itemHeight = `${380 / completeRateData.length}rpx`;

      // 更新.item元素的样式
      this.setData({
        itemHeight: itemHeight,
      });
    } catch (error) {
      console.error('获取完播率数据失败:', error);
      wx.showToast({
        title: '获取完播率数据失败',
        icon: 'none',
        duration: 2000
      });
    }
  },

  /**
   * 按区域统计
   */
  async getAreaData() {
    try {
      const res = await request('/dataCenter/area');
      const areaData = res.data.template.succ.data.list;
      this.setData({
        areaDataList: areaData,
        areaDataKeysList: Object.keys(areaData[0]),
      });
    } catch (error) {
      console.error('获取区域统计数据失败:', error);
      wx.showToast({
        title: '获取区域统计数据失败',
        icon: 'none',
        duration: 2000
      });
    }
  },
});
