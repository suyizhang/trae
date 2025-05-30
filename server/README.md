# 微信小程序后端服务

基于MidwayJS框架开发的微信小程序后端服务，提供API接口支持。

## 技术栈

- MidwayJS: 基于TypeScript的Node.js框架
- Koa: Web服务框架
- TypeScript: 类型安全的JavaScript超集
- ESLint: 代码规范检查
- Prettier: 代码格式化
- Jest: 单元测试框架

## 项目结构

```
├── src                     # 源代码目录
│   ├── config              # 配置文件
│   ├── controller          # 控制器
│   ├── filter              # 错误过滤器
│   ├── interface           # 接口定义
│   ├── middleware          # 中间件
│   ├── service             # 服务
│   ├── bootstrap.ts        # 应用启动入口
│   └── configuration.ts    # 应用配置
├── test                    # 测试目录
├── .eslintrc.js           # ESLint配置
├── .prettierrc.js         # Prettier配置
├── jest.config.js         # Jest配置
├── package.json           # 项目依赖
├── tsconfig.json          # TypeScript配置
└── README.md              # 项目说明
```

## 开发指南

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

### 构建生产环境代码

```bash
npm run build
```

### 启动生产环境服务

```bash
npm start
```

### 运行测试

```bash
npm test
```

### 代码检查

```bash
npm run lint
```

### 代码格式化

```bash
npm run format
```

## API接口

### 首页相关

- `GET /home/cards` - 获取首页卡片列表
- `GET /home/swipers` - 获取首页轮播图列表

### 个人中心相关

- `GET /api/genPersonalInfo` - 获取个人信息
- `GET /api/getServiceList` - 获取服务列表

### 搜索相关

- `GET /api/searchHistory` - 获取搜索历史
- `GET /api/searchPopular` - 获取热门搜索

### 登录相关

- `POST /login/postPasswordLogin` - 密码登录
- `POST /login/postCodeVerify` - 验证码登录

## 配置说明

项目配置文件位于 `src/config` 目录下：

- `config.default.ts` - 默认配置，适用于所有环境
- `config.development.ts` - 开发环境配置
- `config.production.ts` - 生产环境配置

## 许可证

MIT