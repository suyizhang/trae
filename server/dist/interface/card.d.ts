/**
 * 标签接口
 */
export interface ITag {
    /**
     * 标签文本
     */
    text: string;
    /**
     * 标签主题
     * primary: 主要
     * success: 成功
     * warning: 警告
     * danger: 危险
     */
    theme: 'primary' | 'success' | 'warning' | 'danger';
}
/**
 * 卡片接口
 */
export interface ICard {
    /**
     * 图片URL
     */
    url: string;
    /**
     * 描述
     */
    desc: string;
    /**
     * 标签列表
     */
    tags: ITag[];
}
