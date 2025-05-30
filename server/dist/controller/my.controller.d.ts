import { MyService } from '../service/my.service';
import { ResponseService } from '../service/response.service';
import { IResponse } from '../interface/response';
import { IUserInfo } from '../interface/user';
import { IServiceList } from '../interface/service';
/**
 * 个人中心控制器
 * 处理个人中心相关的API请求
 */
export declare class MyController {
    myService: MyService;
    responseService: ResponseService;
    /**
     * 获取个人信息
     * @returns 个人信息响应
     */
    getPersonalInfo(): Promise<IResponse<IUserInfo>>;
    /**
     * 获取服务列表
     * @returns 服务列表响应
     */
    getServiceList(): Promise<IResponse<IServiceList>>;
}
