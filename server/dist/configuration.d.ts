import * as koa from '@midwayjs/koa';
/**
 * Midway应用配置
 */
export declare class ContainerLifeCycle {
    app: koa.Application;
    /**
     * 应用启动完成生命周期
     */
    onReady(): Promise<void>;
}
