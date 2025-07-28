# PS风格面板 插件说明文档

## 简介
PS风格面板是一款基于Adobe CEP技术开发的Photoshop扩展插件，提供风格化操作面板，提升设计效率。

## 目录结构
```
phothShop-plugibs-master/
├── .vscode/
├── css/
├── CSXS/
│   └── manifest.xml
├── js/
│   ├── auth.js
│   ├── CSInterface.js
│   └── main.js
├── jsx/
├── max_plugin/
├── index.html
├── login.html
├── manifest.xml
```

## 安装方法
1. 复制 `phothShop-plugibs-master` 文件夹到以下目录之一：
   - Windows: `C:\Users\<你的用户名>\AppData\Roaming\Adobe\CEP\extensions\`
   - 或 Photoshop 安装目录下的 `Required/CEP/extensions/`
2. 确保 `manifest.xml` 位于 `phothShop-plugibs-master` 根目录下。
3. 启动 Photoshop。
4. 如遇“未签名扩展无法加载”问题，请按如下操作：
   - 打开注册表编辑器，依次添加如下项：
     - `HKEY_CURRENT_USER\Software\Adobe\CSXS.7` ~ `CSXS.11` 下新建 `PlayerDebugMode`，值为 `1`。
   - 或运行如下命令：
     ```
     reg add "HKCU\Software\Adobe\CSXS.11" /v PlayerDebugMode /t REG_DWORD /d 1 /f
     reg add "HKCU\Software\Adobe\CSXS.10" /v PlayerDebugMode /t REG_DWORD /d 1 /f
     reg add "HKCU\Software\Adobe\CSXS.9" /v PlayerDebugMode /t REG_DWORD /d 1 /f
     reg add "HKCU\Software\Adobe\CSXS.8" /v PlayerDebugMode /t REG_DWORD /d 1 /f
     reg add "HKCU\Software\Adobe\CSXS.7" /v PlayerDebugMode /t REG_DWORD /d 1 /f
     ```
5. 在 Photoshop 菜单栏 `窗口 > 扩展(旧版)` 中找到并打开“PS风格面板”。

## 登录账号密码
默认支持以下账号密码（可在 `js/auth.js` 中修改）：

| 用户名 | 密码      |
|--------|-----------|
| admin  | admin123  |
| user   | user123   |
| test   | test123   |

## 常见问题
1. **扩展无法加载/签名错误**
   - 请确认注册表已正确设置 PlayerDebugMode。
   - 确认 `manifest.xml` 在扩展根目录。
2. **登录不了/忘记密码**
   - 默认账号如上，忘记密码请联系管理员或查看 `auth.js`。
3. **扩展不显示**
   - 请确认已在菜单 `窗口 > 扩展(旧版)` 中查找。
   - CEP 扩展仅支持 Photoshop 2021 及以前部分版本，2022及以后建议用 UXP 扩展。

## 联系方式
如需帮助或定制开发，请联系插件作者。 