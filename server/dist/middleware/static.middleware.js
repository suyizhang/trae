"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StaticMiddleware = void 0;
const decorator_1 = require("@midwayjs/decorator");
const path = __importStar(require("path"));
const fs = __importStar(require("fs"));
/**
 * 静态资源中间件
 * 用于提供静态文件服务
 */
let StaticMiddleware = class StaticMiddleware {
    resolve() {
        return async (ctx, next) => {
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
                }
                catch (error) {
                    ctx.logger.error(`静态文件访问错误: ${error.message}`);
                }
            }
            // 如果不是静态文件或文件不存在，继续下一个中间件
            await next();
        };
    }
    static getName() {
        return 'static';
    }
};
StaticMiddleware = __decorate([
    (0, decorator_1.Middleware)()
], StaticMiddleware);
exports.StaticMiddleware = StaticMiddleware;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljLm1pZGRsZXdhcmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbWlkZGxld2FyZS9zdGF0aWMubWlkZGxld2FyZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLG1EQUFpRDtBQUVqRCwyQ0FBNkI7QUFDN0IsdUNBQXlCO0FBRXpCOzs7R0FHRztBQUVJLElBQU0sZ0JBQWdCLEdBQXRCLE1BQU0sZ0JBQWdCO0lBQzNCLE9BQU87UUFDTCxPQUFPLEtBQUssRUFBRSxHQUFZLEVBQUUsSUFBa0IsRUFBRSxFQUFFO1lBQ2hELHFCQUFxQjtZQUNyQixJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxFQUFFO2dCQUNuQyxVQUFVO2dCQUNWLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLFdBQVcsQ0FBQyxDQUFDO2dCQUNyRCxXQUFXO2dCQUNYLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFFOUMsSUFBSTtvQkFDRixXQUFXO29CQUNYLElBQUksRUFBRSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFO3dCQUM3RCxpQkFBaUI7d0JBQ2pCLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7d0JBQ2pELE1BQU0sU0FBUyxHQUFHOzRCQUNoQixPQUFPLEVBQUUsV0FBVzs0QkFDcEIsS0FBSyxFQUFFLHdCQUF3Qjs0QkFDL0IsTUFBTSxFQUFFLFVBQVU7NEJBQ2xCLE9BQU8sRUFBRSxrQkFBa0I7NEJBQzNCLE1BQU0sRUFBRSxXQUFXOzRCQUNuQixNQUFNLEVBQUUsWUFBWTs0QkFDcEIsT0FBTyxFQUFFLFlBQVk7NEJBQ3JCLE1BQU0sRUFBRSxXQUFXOzRCQUNuQixNQUFNLEVBQUUsZUFBZTt5QkFDeEIsQ0FBQzt3QkFFRixHQUFHLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSwwQkFBMEIsQ0FBQzt3QkFDeEQsR0FBRyxDQUFDLElBQUksR0FBRyxFQUFFLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUM7d0JBQ3pDLE9BQU87cUJBQ1I7aUJBQ0Y7Z0JBQUMsT0FBTyxLQUFLLEVBQUU7b0JBQ2QsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsYUFBYSxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztpQkFDaEQ7YUFDRjtZQUVELDBCQUEwQjtZQUMxQixNQUFNLElBQUksRUFBRSxDQUFDO1FBQ2YsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVELE1BQU0sQ0FBQyxPQUFPO1FBQ1osT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQztDQUNGLENBQUE7QUE1Q1ksZ0JBQWdCO0lBRDVCLElBQUEsc0JBQVUsR0FBRTtHQUNBLGdCQUFnQixDQTRDNUI7QUE1Q1ksNENBQWdCIn0=