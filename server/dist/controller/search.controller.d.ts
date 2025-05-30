import { SearchService } from '../service/search.service';
import { ResponseService } from '../service/response.service';
import { IResponse } from '../interface/response';
import { ISearchHistory, ISearchPopular } from '../interface/search';
/**
 * 搜索控制器
 * 处理搜索相关的API请求
 */
export declare class SearchController {
    searchService: SearchService;
    responseService: ResponseService;
    /**
     * 获取搜索历史
     * @returns 搜索历史响应
     */
    getSearchHistory(): Promise<IResponse<ISearchHistory>>;
    /**
     * 获取热门搜索
     * @returns 热门搜索响应
     */
    getSearchPopular(): Promise<IResponse<ISearchPopular>>;
}
