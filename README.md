# H-UI
### 项目结构
```
  ├── docs      # UI文档-生产
  ├── lib       # npm包
  ├── packages  # UI组件
  ├── src       # UI文档-开发
```

### 安装及注册使用
```
npm install h-uiii
```
```
import HUI from 'h-uiii'
```
```
import 'h-uiii/h-ui.css'
```
```
Vue.use(HUI)
```
## docs 
##### 文档地址: https://chen8000.github.io/h-ui/

```
npm run build
```

## lib
##### NPM: https://www.npmjs.com/package/h-uiii

```
npm run lib
```

## 发布npm
* cd lib
* npm init
*  "name": "h-uiii"
*  "version": "1.0.5"
* npm config set registry https://registry.npmjs.org
* npm login
* npm publish

