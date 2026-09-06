# 英语成长地图

小学一年级到六年级的家庭英语学习指南：六年路线、每周课程、教材、KET/PET、YouTube 老师与官方视频、正版电子书入口，以及本机保存的家庭打卡。

目标公开网址：https://teternal.github.io/english-growth-map/

## GitHub Pages 发布

仓库 Settings → Pages → Build and deployment → Source 选择 **GitHub Actions**。
之后每次更新 `main`，发布流程会自动构建并发布网站；也可在 Actions 页手动运行。
是否已经发布成功，以 Actions 中的结果及公开网页检查为准。

## 本地运行

需要 Node.js 22.13 或以上版本。

```sh
npm ci
npm run dev
```

GitHub Pages 版本构建：

```sh
npm run build:github
```

静态网页输出在 `dist/client/`。GitHub Pages 项目路径为 `/english-growth-map`；若仓库更名，须同步修改 `build:github` 中的路径。

`npm run build:static` 用于根路径静态托管；`npm run build` 保留原 Sites 构建方式。

## 数据与资源

- 家庭打卡只存储在当前浏览器，不上传服务器；更换域名或设备不会自动同步。
- 外部视频和出版社网站的可访问性取决于访问者的网络条件。
- 电子书采用官方免费资源、样章或正版平台入口，不托管未获授权的教材文件。
- 公开仓库不包含账号凭据、本地环境文件或原 Sites 项目标识。
