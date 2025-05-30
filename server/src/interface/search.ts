/**
 * 搜索历史接口
 */
export interface ISearchHistory {
  /**
   * 历史搜索词
   */
  historyWords: string[];
}

/**
 * 热门搜索接口
 */
export interface ISearchPopular {
  /**
   * 热门搜索词
   */
  popularWords: string[];
}