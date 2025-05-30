"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportMiddleware = void 0;
const decorator_1 = require("@midwayjs/decorator");
/**
 * 请求报告中间件
 * 用于记录请求信息和响应时间
 */
let ReportMiddleware = class ReportMiddleware {
    resolve() {
        return async (ctx, next) => {
            // 记录开始时间
            const startTime = Date.now();
            // 记录请求信息
            ctx.logger.info(`请求开始: ${ctx.method} ${ctx.path}`);
            // 执行下一个中间件
            await next();
            // 计算响应时间
            const duration = Date.now() - startTime;
            // 记录响应信息
            ctx.logger.info(`请求结束: ${ctx.method} ${ctx.path} 状态码: ${ctx.status} 耗时: ${duration}ms`);
        };
    }
    static getName() {
        return 'report';
    }
};
ReportMiddleware = __decorate([
    (0, decorator_1.Middleware)()
], ReportMiddleware);
exports.ReportMiddleware = ReportMiddleware;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwb3J0Lm1pZGRsZXdhcmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbWlkZGxld2FyZS9yZXBvcnQubWlkZGxld2FyZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQSxtREFBaUQ7QUFHakQ7OztHQUdHO0FBRUksSUFBTSxnQkFBZ0IsR0FBdEIsTUFBTSxnQkFBZ0I7SUFDM0IsT0FBTztRQUNMLE9BQU8sS0FBSyxFQUFFLEdBQVksRUFBRSxJQUFrQixFQUFFLEVBQUU7WUFDaEQsU0FBUztZQUNULE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUM3QixTQUFTO1lBQ1QsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsTUFBTSxJQUFJLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1lBRW5ELFdBQVc7WUFDWCxNQUFNLElBQUksRUFBRSxDQUFDO1lBRWIsU0FBUztZQUNULE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxTQUFTLENBQUM7WUFDeEMsU0FBUztZQUNULEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLE1BQU0sSUFBSSxHQUFHLENBQUMsSUFBSSxTQUFTLEdBQUcsQ0FBQyxNQUFNLFFBQVEsUUFBUSxJQUFJLENBQUMsQ0FBQztRQUMxRixDQUFDLENBQUM7SUFDSixDQUFDO0lBRUQsTUFBTSxDQUFDLE9BQU87UUFDWixPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDO0NBQ0YsQ0FBQTtBQXJCWSxnQkFBZ0I7SUFENUIsSUFBQSxzQkFBVSxHQUFFO0dBQ0EsZ0JBQWdCLENBcUI1QjtBQXJCWSw0Q0FBZ0IifQ==