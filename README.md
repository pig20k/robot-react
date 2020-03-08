This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
# 人工智能仿真

### 页面设计

![image-20200308143202436](C:\Users\dav1d\AppData\Roaming\Typora\typora-user-images\image-20200308143202436.png)

#### 效果

![image-20200308144421396](C:\Users\dav1d\AppData\Roaming\Typora\typora-user-images\image-20200308144421396.png)

## 使用React 搭建网站

#### 项目结构

![image-20200308142852084](C:\Users\dav1d\AppData\Roaming\Typora\typora-user-images\image-20200308142852084.png)

#### 项目代码

- 页面设计（topic.jsx）

```html
  <div className="topic">
        <div className="container">
          <div className="title">title</div>
          <div className="selections">
            <Button className="button" onClick={this.onClick}>
              选项一
            </Button>
            <Button className="button" onClick={this.onClick}>
              选项二
            </Button>
          </div>
        </div>

        <div className="steps">
          <Steps
            type="navigation"
            current={this.state.current}
            onChange={this.onChangeStep}
            className="site-navigation-steps"
          >
            <Step status="wait" title="1/4" />
            <Step status="wait" title="2/4" />
            <Step status="wait" title="3/4" />
            <Step status="wait" title="4/4" />
          </Steps>
        </div>
      </div>
```

##### 工具类代码

- 请求（ajaxUtil.js）

  ```javascript
  import axios from 'axios'
  
  export default function ajax(url, data = {}, type = 'GET') {
      if (type === 'GET') {
          return axios.get(url, {
              params: data
          }
          )
      }
      else {
          return axios.post(url, data
          )
      }
  }
  ```

  

- 封装请求(ajaxIndex.js)

  ```javascript
  import ajax from "./ajaxUtil"
  
  function getTopic(){
        return ajax("/api/topic", {id: 'id'}, 'GET')
  }
  
  function subResult(data){
        return ajax("/api/topic", data, 'POST')
  }
  
  export default {getTopic, subResult}
  ```

  

- 内存管理（memoryUtil.js）

  ```javascript
  export default{
        user: {},
  }
  ```

  

- 存储管理（storeUtil.js）

  ```javascript
  import store from 'store'
  
  const USER_KEY = 'user_key'
  
  export default {
        saveUser(user){
              store.set(USER_KEY, user)
       },
       getUser(){
             return store.get(USER_KEY) || null
       },
       removeUser(){
             store.remove(USER_KEY)
       }
  }
  ```

  

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
