import { Configuration, App } from '@midwayjs/decorator';
import * as koa from '@midwayjs/koa';
import * as validate from '@midwayjs/validate';
import * as info from '@midwayjs/info';
import { join } from 'path';
import { ReportMiddleware } from './middleware/report.middleware';
import { StaticMiddleware } from './middleware/static.middleware';
import { CorsMiddleware } from './middleware/cors.middleware';
import { DefaultErrorFilter } from './filter/default.filter';
import { NotFoundFilter } from './filter/notfound.filter';

/**
 * Midway应用配置
 */
@Configuration({
  imports: [
    // Koa框架
    koa,
    // 参数验证
    validate,
    // 应用信息
    {
      component: info,
      enabledEnvironment: ['local'],
    },
  ],
  importConfigs: [join(__dirname, './config')],
})
export class ContainerLifeCycle {
  @App()
  app: koa.Application;

  /**
   * 应用启动完成生命周期
   */
  async onReady() {
    // 注册中间件
    this.app.useMiddleware([CorsMiddleware, StaticMiddleware, ReportMiddleware]);
    // 注册过滤器
    this.app.useFilter([NotFoundFilter, DefaultErrorFilter]);
  }
}