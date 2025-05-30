import { Bootstrap } from '@midwayjs/bootstrap';

/**
 * 应用启动入口
 */
Bootstrap.run().catch(err => {
  console.error('启动失败', err);
  process.exit(1);
});