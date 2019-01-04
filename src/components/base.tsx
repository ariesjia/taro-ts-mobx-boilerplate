import { Component } from "@tarojs/taro"

class BaseComponent<P = {}, S = {}> extends Component<P, S> {
  static options = {
    addGlobalClass: true,
  }
}

export default BaseComponent
