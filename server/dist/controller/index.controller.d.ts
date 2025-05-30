import { ResponseService } from '../service/response.service';
import { IResponse } from '../interface/response';
/**
 * 首页控制器
 * 处理根路径的API请求
 */
export declare class IndexController {
    responseService: ResponseService;
    /**
     * 根路径处理
     * @returns 欢迎信息响应
     */
    index(): Promise<IResponse<{
        message: string;
    }>>;
}
