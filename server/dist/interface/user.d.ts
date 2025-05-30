/**
 * 照片接口
 */
export interface IPhoto {
    /**
     * 图片URL
     */
    url: string;
    /**
     * 图片名称
     */
    name: string;
    /**
     * 图片类型
     */
    type: string;
}
/**
 * 用户信息接口
 */
export interface IUserInfo {
    /**
     * 头像
     */
    image: string;
    /**
     * 姓名
     */
    name: string;
    /**
     * 星座
     */
    star: string;
    /**
     * 性别
     * 0: 男
     * 1: 女
     */
    gender: number;
    /**
     * 生日
     */
    birth: string;
    /**
     * 地址
     */
    address: string[];
    /**
     * 简介
     */
    brief: string;
    /**
     * 照片列表
     */
    photos: IPhoto[];
}
