import { Provider } from "@tarojs/mobx"
import Taro, { Component, Config } from "@tarojs/taro"
import es6Promise from "es6-promise"

import store from "./store"
import { alert } from "./utils/ui"

es6Promise.polyfill()

import "./app.scss"

class App extends Component {
  config: Config = {
    pages: [
      "pages/index/index",
    ],
    window: {
      backgroundTextStyle: "light",
      navigationBarBackgroundColor: "#fff",
      navigationBarTitleText: "WeChat",
      navigationBarTextStyle: "black",
    },
  }

  componentDidMount() {
    const updateManager = Taro.getUpdateManager()
    updateManager.onCheckForUpdate(function (res) {
      console.log(res.hasUpdate)
    })

    updateManager.onUpdateReady(function () {
      alert("更新提示", "新版本已经准备好，是否重启应用？").then(() => {
        updateManager.applyUpdate()
      })
    })

    updateManager.onUpdateFailed(function () {
      alert("更新提示", "新版本下载失败")
    })
  }

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  render() {
    return <Provider store={store} />
  }
}

Taro.render(<App />, document.getElementById("app"))
