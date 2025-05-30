/**
 * 服务项接口
 */
export interface IServiceItem {
    /**
     * 图标
     */
    image: string;
    /**
     * 名称
     */
    name: string;
    /**
     * 类型
     */
    type: string;
    /**
     * 链接
     */
    url: string;
}
/**
 * 服务列表接口
 */
export interface IServiceList {
    /**
     * 服务项列表
     */
    service: IServiceItem[];
}
