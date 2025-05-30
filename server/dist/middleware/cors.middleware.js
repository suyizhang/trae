"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CorsMiddleware = void 0;
const decorator_1 = require("@midwayjs/decorator");
/**
 * CORS中间件
 * 用于处理跨域请求
 */
let CorsMiddleware = class CorsMiddleware {
    resolve() {
        return async (ctx, next) => {
            // 允许的来源
            ctx.set('Access-Control-Allow-Origin', '*');
            // 允许的HTTP方法
            ctx.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
            // 允许的请求头
            ctx.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
            // 允许发送凭证
            ctx.set('Access-Control-Allow-Credentials', 'true');
            // 预检请求的有效期，单位为秒
            ctx.set('Access-Control-Max-Age', '86400');
            // 处理OPTIONS预检请求
            if (ctx.method === 'OPTIONS') {
                ctx.status = 204;
                return;
            }
            // 继续下一个中间件
            await next();
        };
    }
    static getName() {
        return 'cors';
    }
};
CorsMiddleware = __decorate([
    (0, decorator_1.Middleware)()
], CorsMiddleware);
exports.CorsMiddleware = CorsMiddleware;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29ycy5taWRkbGV3YXJlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL21pZGRsZXdhcmUvY29ycy5taWRkbGV3YXJlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBLG1EQUFpRDtBQUdqRDs7O0dBR0c7QUFFSSxJQUFNLGNBQWMsR0FBcEIsTUFBTSxjQUFjO0lBQ3pCLE9BQU87UUFDTCxPQUFPLEtBQUssRUFBRSxHQUFZLEVBQUUsSUFBa0IsRUFBRSxFQUFFO1lBQ2hELFFBQVE7WUFDUixHQUFHLENBQUMsR0FBRyxDQUFDLDZCQUE2QixFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQzVDLFlBQVk7WUFDWixHQUFHLENBQUMsR0FBRyxDQUFDLDhCQUE4QixFQUFFLGlDQUFpQyxDQUFDLENBQUM7WUFDM0UsU0FBUztZQUNULEdBQUcsQ0FBQyxHQUFHLENBQUMsOEJBQThCLEVBQUUsNkJBQTZCLENBQUMsQ0FBQztZQUN2RSxTQUFTO1lBQ1QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxrQ0FBa0MsRUFBRSxNQUFNLENBQUMsQ0FBQztZQUNwRCxnQkFBZ0I7WUFDaEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsRUFBRSxPQUFPLENBQUMsQ0FBQztZQUUzQyxnQkFBZ0I7WUFDaEIsSUFBSSxHQUFHLENBQUMsTUFBTSxLQUFLLFNBQVMsRUFBRTtnQkFDNUIsR0FBRyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7Z0JBQ2pCLE9BQU87YUFDUjtZQUVELFdBQVc7WUFDWCxNQUFNLElBQUksRUFBRSxDQUFDO1FBQ2YsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVELE1BQU0sQ0FBQyxPQUFPO1FBQ1osT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztDQUNGLENBQUE7QUE1QlksY0FBYztJQUQxQixJQUFBLHNCQUFVLEdBQUU7R0FDQSxjQUFjLENBNEIxQjtBQTVCWSx3Q0FBYyJ9