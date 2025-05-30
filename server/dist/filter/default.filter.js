"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultErrorFilter = void 0;
const decorator_1 = require("@midwayjs/decorator");
/**
 * 默认错误过滤器
 * 用于处理所有未分类的错误
 */
let DefaultErrorFilter = class DefaultErrorFilter {
    async catch(err, ctx) {
        // 记录错误日志
        ctx.logger.error(err);
        // 返回统一的错误格式
        return {
            code: 500,
            success: false,
            message: err.message,
            data: null,
        };
    }
};
DefaultErrorFilter = __decorate([
    (0, decorator_1.Catch)()
], DefaultErrorFilter);
exports.DefaultErrorFilter = DefaultErrorFilter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC5maWx0ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZmlsdGVyL2RlZmF1bHQuZmlsdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLG1EQUE0QztBQUc1Qzs7O0dBR0c7QUFFSSxJQUFNLGtCQUFrQixHQUF4QixNQUFNLGtCQUFrQjtJQUM3QixLQUFLLENBQUMsS0FBSyxDQUFDLEdBQVUsRUFBRSxHQUFZO1FBQ2xDLFNBQVM7UUFDVCxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUV0QixZQUFZO1FBQ1osT0FBTztZQUNMLElBQUksRUFBRSxHQUFHO1lBQ1QsT0FBTyxFQUFFLEtBQUs7WUFDZCxPQUFPLEVBQUUsR0FBRyxDQUFDLE9BQU87WUFDcEIsSUFBSSxFQUFFLElBQUk7U0FDWCxDQUFDO0lBQ0osQ0FBQztDQUNGLENBQUE7QUFiWSxrQkFBa0I7SUFEOUIsSUFBQSxpQkFBSyxHQUFFO0dBQ0ssa0JBQWtCLENBYTlCO0FBYlksZ0RBQWtCIn0=