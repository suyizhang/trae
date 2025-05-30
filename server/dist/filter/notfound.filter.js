"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotFoundFilter = void 0;
const decorator_1 = require("@midwayjs/decorator");
const core_1 = require("@midwayjs/core");
/**
 * 404错误过滤器
 * 用于处理资源未找到的情况
 */
let NotFoundFilter = class NotFoundFilter {
    async catch(err, ctx) {
        // 记录404错误
        ctx.logger.warn(`路径 ${ctx.path} 不存在`);
        // 返回统一的错误格式
        return {
            code: 404,
            success: false,
            message: '请求的资源不存在',
            data: null,
        };
    }
};
NotFoundFilter = __decorate([
    (0, decorator_1.Catch)(core_1.httpError.NotFoundError)
], NotFoundFilter);
exports.NotFoundFilter = NotFoundFilter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90Zm91bmQuZmlsdGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2ZpbHRlci9ub3Rmb3VuZC5maWx0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsbURBQTRDO0FBQzVDLHlDQUE0RDtBQUc1RDs7O0dBR0c7QUFFSSxJQUFNLGNBQWMsR0FBcEIsTUFBTSxjQUFjO0lBQ3pCLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBb0IsRUFBRSxHQUFZO1FBQzVDLFVBQVU7UUFDVixHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxDQUFDO1FBRXRDLFlBQVk7UUFDWixPQUFPO1lBQ0wsSUFBSSxFQUFFLEdBQUc7WUFDVCxPQUFPLEVBQUUsS0FBSztZQUNkLE9BQU8sRUFBRSxVQUFVO1lBQ25CLElBQUksRUFBRSxJQUFJO1NBQ1gsQ0FBQztJQUNKLENBQUM7Q0FDRixDQUFBO0FBYlksY0FBYztJQUQxQixJQUFBLGlCQUFLLEVBQUMsZ0JBQVMsQ0FBQyxhQUFhLENBQUM7R0FDbEIsY0FBYyxDQWExQjtBQWJZLHdDQUFjIn0=