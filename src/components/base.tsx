import { Component } from "@tarojs/taro"
import { ComponentClass, HTMLAttributes } from "react"

interface IProps extends HTMLAttributes<{}> {
}

class BaseComponent extends Component {
  static options = {
    addGlobalClass: true,
  }
}

export default BaseComponent as ComponentClass<IProps, {}>
