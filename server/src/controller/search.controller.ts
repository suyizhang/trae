import { Controller, Get, Inject } from '@midwayjs/decorator';
import { SearchService } from '../service/search.service';
import { ResponseService } from '../service/response.service';
import { IResponse } from '../interface/response';
import { ISearchHistory, ISearchPopular } from '../interface/search';

/**
 * 搜索控制器
 * 处理搜索相关的API请求
 */
@Controller('/api')
export class SearchController {
  @Inject()
  searchService: SearchService;

  @Inject()
  responseService: ResponseService;

  /**
   * 获取搜索历史
   * @returns 搜索历史响应
   */
  @Get('/searchHistory')
  async getSearchHistory(): Promise<IResponse<ISearchHistory>> {
    try {
      const searchHistory = await this.searchService.getSearchHistory();
      return this.responseService.success(searchHistory, '请求成功');
    } catch (error) {
      return this.responseService.error(error.message);
    }
  }

  /**
   * 获取热门搜索
   * @returns 热门搜索响应
   */
  @Get('/searchPopular')
  async getSearchPopular(): Promise<IResponse<ISearchPopular>> {
    try {
      const searchPopular = await this.searchService.getSearchPopular();
      return this.responseService.success(searchPopular, '请求成功');
    } catch (error) {
      return this.responseService.error(error.message);
    }
  }
}