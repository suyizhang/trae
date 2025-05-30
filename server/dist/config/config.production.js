"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 生产环境配置
 */
exports.default = {
    // 日志配置 - 生产环境下只记录重要日志
    midwayLogger: {
        default: {
            level: 'info',
            consoleLevel: 'warn',
        },
        clients: {
            appLogger: {
                level: 'info',
                consoleLevel: 'error',
            },
        },
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLnByb2R1Y3Rpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29uZmlnL2NvbmZpZy5wcm9kdWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7O0dBRUc7QUFDSCxrQkFBZTtJQUNiLHNCQUFzQjtJQUN0QixZQUFZLEVBQUU7UUFDWixPQUFPLEVBQUU7WUFDUCxLQUFLLEVBQUUsTUFBTTtZQUNiLFlBQVksRUFBRSxNQUFNO1NBQ3JCO1FBQ0QsT0FBTyxFQUFFO1lBQ1AsU0FBUyxFQUFFO2dCQUNULEtBQUssRUFBRSxNQUFNO2dCQUNiLFlBQVksRUFBRSxPQUFPO2FBQ3RCO1NBQ0Y7S0FDRjtDQUNjLENBQUMifQ==