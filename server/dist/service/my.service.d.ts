import { IUserInfo } from '../interface/user';
import { IServiceList } from '../interface/service';
/**
 * 个人中心服务
 * 提供个人中心相关数据
 */
export declare class MyService {
    /**
     * 获取个人信息
     * @returns 个人信息
     */
    getPersonalInfo(): Promise<IUserInfo>;
    /**
     * 获取服务列表
     * @returns 服务列表
     */
    getServiceList(): Promise<IServiceList>;
}
