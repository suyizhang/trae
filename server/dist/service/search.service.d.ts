import { ISearchHistory, ISearchPopular } from '../interface/search';
/**
 * 搜索服务
 * 提供搜索相关数据
 */
export declare class SearchService {
    /**
     * 获取搜索历史
     * @returns 搜索历史
     */
    getSearchHistory(): Promise<ISearchHistory>;
    /**
     * 获取热门搜索
     * @returns 热门搜索
     */
    getSearchPopular(): Promise<ISearchPopular>;
}
