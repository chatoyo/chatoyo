# Chatoyo - 在线交流协同办公

*Original Reference: [wanli-go/chatto](https://github.com/Wanli-Go/chatto)*

## Overview

Chatoyo is a beautifully-designed 为米哈游打造的内部**办公、交流、协作**工具App，核心目标是避免对外部协作工具的依赖（e.g. 企业微信、飞书、钉钉）。

此外，我们意识到现有协作工具的不足和米哈游的理想价值，开发团队希望使Chatoyo成为一个即能高效协作、又具有米哈游独特氛围的 **All in One** 的员工平台，并尽可能地“去班味”

Together, we're a team working towards "save the world"!



## Chatoyo 功能

### 核心功能：

1. **out-of-the-box 办公**：一对一聊天、群组聊天、会议、文档、任务管理、考勤打卡等

2. **quality-of-life 细节**：

   - 集成好用的**Todo**（优先级、标签、自动排序、每日提醒等）

   - LLM功能（需接入API）：总结未读内容、自动识别**通知型消息**并提醒是否添加**ToDo**、FAQs、翻译（可开启自动翻译）、语音转文字、AI语义搜索等
   - 状态管理：FocusMode（仅显示项目型、部门型聊天，番茄钟定时器）、自定义工作状态（如“工作中”、“休息中”）及排序功能

### 设计特点：

- **精美紧致**：富有动画感的界面设计
- **建构主义(Constructivism)体验**：让用户自行发现更多功能，以办公功能为起点，逐渐探索其它有趣的内容（如下面的个性化与社交）

### 个性化与社交（“去班味”）：

1. **Profile自定义**：
   - Cardio功能，hover头像时显示小卡片。初始默认简洁办公风，但是可以customize，展示个性化元素（如兴趣标签、动态背景）
     - 参考steam好友
   - 显示动态（如下班时间、成就、赞数）
   - 动态个人主页，支持自定义展示帖子、成就等
2. **频道系统**：
   - 适合兴趣交流的频道（如游戏、哲学、运动等）
   - 频道委托功能（如羽毛球找搭子、技术提问）
3. **成就与等级系统**：
   - 成就任务（如“专注2小时”、“按时下班”）
     - 参考多邻国
   - 稀有奖励与XP系统，升级后可获得名片、头像框等
4. **小程序集成**：打卡、文档、会议、健身房状态。


## Chatoyo Dev Overview

Chatoyo is a **Typescript-Vue** based Vite application that enables portable cross-platform real-time messaging, task management, and employee benefits designed for Mihoyo.

### Run the Project

- clone the project, and run `npm install`.
- set devServer url in `config/dev.ts`. (Default to `localhost:3000`)
- Set up environmental variables: create a `.env` file in the root directory, and set `VITE_NGROK_AUTHTOKEN` to a ngrok token string (optional) to deploy an instance of the frontend server in public internet.
- `npm run dev` will run the project.
  
### File Structure 

1. `/src`:

   - `main.ts`: A script directly appended to `index.html`, where the app is created and mounted.

   - `App.vue`: The main entry point of the Vue app (created in `main.ts`), containing the `<router-view/>` to handle page navigation.
   - **`assets/`**: Contains static assets like images, styles, etc. (**moving images to /public to decrease bundling time.**)
   - **`components/`**: Contains Vue components used throughout the application.
     - `channel`: components for the channel homepage.
     - `chat-view`: the whole messaging area, with a header and a message box.
     - `chats-list`: the list where you can select chats.
     - `home`: components for the home homepage.
     - **`minor-custom`**: where you can find some **small custom UI components**. 
   - `constant/`: Constant values used in the application.
   - **`layouts/`**: Contains major layouts, such as the main layout and the login layout for the application. Directly used by the **vue-router** and uses it to navigate to different pages.
   - **`models/`**: Contains TypeScript interfaces and types used in the application.
     - *Remember to export them in `index.ts`*.
   - **`pages/`**: Contains pages under each layout, for example the channels page in the main page. It's **the endpoint of the router**.
   - **`request/`**: Contains files related to making HTTP requests, such as API configurations (`request.ts`) and types (`type.ts`).
     - The request methods are defined in `main.ts`.
     - a custom cache to store Get requests in a single session, in `cache.ts`.
     - file/multi-part uploads are defined in `upload.ts`.
   - **`services/`**: Contains service files that handle business logic and data manipulation.
   - **`store/`**: Contains Pinia stores for state management.
   - **`utils/`**: Contains utility functions and helpers.

2. Configs

   - `vite.config.ts`: define vite server options (found in `config/`) and plugins, such as mocks defined in `mock/`.
   - `tailwind.config.js`: tailwind configs and plugins.
   - `tsconfig.json`: typescript configs (mainly in `tsconfig.app.json`).
   - other configs are found in root directory and doesn't need detailed explanation.

### Implemented Functions

- Third-party login using Google or Github  (need backend to be run in localhost instance so the OAuth server allows it) (*Custom user creation and logging in not yet implemented*)
- A Homepage and Channels homepage basic UI (*APIs and specific functions not yet implemented*)
- Chatview basic UI (*APIs and functions not yet impl.*)
- Page routing defined
- Request API defined

### Development In-progress (Last Updated 2025.2.17)

Considering the limited time, we intend to implement some of the core features and some details like auto-summarizing for details.

- Implement messaging and TODO
- Refactor UI to support mobile (portrait)
- LLMs to summarize texts
- Personal Homepage UI implementation
- Refine UI details like Cardio
- 每新开一个功能记得新开一个branch

### Confusions & Conflicts

- 