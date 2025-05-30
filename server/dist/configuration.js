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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContainerLifeCycle = void 0;
const decorator_1 = require("@midwayjs/decorator");
const koa = __importStar(require("@midwayjs/koa"));
const validate = __importStar(require("@midwayjs/validate"));
const info = __importStar(require("@midwayjs/info"));
const path_1 = require("path");
const report_middleware_1 = require("./middleware/report.middleware");
const static_middleware_1 = require("./middleware/static.middleware");
const cors_middleware_1 = require("./middleware/cors.middleware");
const default_filter_1 = require("./filter/default.filter");
const notfound_filter_1 = require("./filter/notfound.filter");
/**
 * Midway应用配置
 */
let ContainerLifeCycle = class ContainerLifeCycle {
    /**
     * 应用启动完成生命周期
     */
    async onReady() {
        // 注册中间件
        this.app.useMiddleware([cors_middleware_1.CorsMiddleware, static_middleware_1.StaticMiddleware, report_middleware_1.ReportMiddleware]);
        // 注册过滤器
        this.app.useFilter([notfound_filter_1.NotFoundFilter, default_filter_1.DefaultErrorFilter]);
    }
};
__decorate([
    (0, decorator_1.App)(),
    __metadata("design:type", Object)
], ContainerLifeCycle.prototype, "app", void 0);
ContainerLifeCycle = __decorate([
    (0, decorator_1.Configuration)({
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
        importConfigs: [(0, path_1.join)(__dirname, './config')],
    })
], ContainerLifeCycle);
exports.ContainerLifeCycle = ContainerLifeCycle;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9jb25maWd1cmF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbURBQXlEO0FBQ3pELG1EQUFxQztBQUNyQyw2REFBK0M7QUFDL0MscURBQXVDO0FBQ3ZDLCtCQUE0QjtBQUM1QixzRUFBa0U7QUFDbEUsc0VBQWtFO0FBQ2xFLGtFQUE4RDtBQUM5RCw0REFBNkQ7QUFDN0QsOERBQTBEO0FBRTFEOztHQUVHO0FBZUksSUFBTSxrQkFBa0IsR0FBeEIsTUFBTSxrQkFBa0I7SUFJN0I7O09BRUc7SUFDSCxLQUFLLENBQUMsT0FBTztRQUNYLFFBQVE7UUFDUixJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLGdDQUFjLEVBQUUsb0NBQWdCLEVBQUUsb0NBQWdCLENBQUMsQ0FBQyxDQUFDO1FBQzdFLFFBQVE7UUFDUixJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLGdDQUFjLEVBQUUsbUNBQWtCLENBQUMsQ0FBQyxDQUFDO0lBQzNELENBQUM7Q0FDRixDQUFBO0FBWkM7SUFBQyxJQUFBLGVBQUcsR0FBRTs7K0NBQ2U7QUFGVixrQkFBa0I7SUFkOUIsSUFBQSx5QkFBYSxFQUFDO1FBQ2IsT0FBTyxFQUFFO1lBQ1AsUUFBUTtZQUNSLEdBQUc7WUFDSCxPQUFPO1lBQ1AsUUFBUTtZQUNSLE9BQU87WUFDUDtnQkFDRSxTQUFTLEVBQUUsSUFBSTtnQkFDZixrQkFBa0IsRUFBRSxDQUFDLE9BQU8sQ0FBQzthQUM5QjtTQUNGO1FBQ0QsYUFBYSxFQUFFLENBQUMsSUFBQSxXQUFJLEVBQUMsU0FBUyxFQUFFLFVBQVUsQ0FBQyxDQUFDO0tBQzdDLENBQUM7R0FDVyxrQkFBa0IsQ0FhOUI7QUFiWSxnREFBa0IifQ==