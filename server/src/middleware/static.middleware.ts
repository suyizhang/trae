import { IMiddleware } from '@midwayjs/core';
import { Middleware } from '@midwayjs/decorator';
import { NextFunction, Context } from '@midwayjs/koa';
import * as path from 'path';
import * as fs from 'fs';

/**
 * 静态资源中间件
 * 用于提供静态文件服务
 */
@Middleware()
export class StaticMiddleware implements IMiddleware<Context, NextFunction> {
  resolve() {
    return async (ctx: Context, next: NextFunction) => {
      // 检查请求路径是否以/static开头
      if (ctx.path.startsWith('/static/')) {
        // 获取项目根目录
        const rootDir = path.resolve(__dirname, '../../../');
        // 构建静态文件路径
        const filePath = path.join(rootDir, ctx.path);

        try {
          // 检查文件是否存在
          if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
            // 设置Content-Type
            const ext = path.extname(filePath).toLowerCase();
            const mimeTypes = {
              '.html': 'text/html',
              '.js': 'application/javascript',
              '.css': 'text/css',
              '.json': 'application/json',
              '.png': 'image/png',
              '.jpg': 'image/jpeg',
              '.jpeg': 'image/jpeg',
              '.gif': 'image/gif',
              '.svg': 'image/svg+xml',
            };

            ctx.type = mimeTypes[ext] || 'application/octet-stream';
            ctx.body = fs.createReadStream(filePath);
            return;
          }
        } catch (error) {
          ctx.logger.error(`静态文件访问错误: ${error.message}`);
        }
      }

      // 如果不是静态文件或文件不存在，继续下一个中间件
      await next();
    };
  }

  static getName(): string {
    return 'static';
  }
}