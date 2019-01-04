import { Text } from "@tarojs/components"
import Taro from "@tarojs/taro"
import classnames from "classnames"
import { ComponentClass, HTMLAttributes } from "react"
import BaseComponent from "../base"

import "./index.scss"

interface IProps extends HTMLAttributes<{}> {
  type: string
}

interface Icon {
  props: IProps
}

class Icon extends BaseComponent {
  render() {
    const { type, className } = this.props
    return (
      <Text className={classnames(["ui-icon", `ui-icon-${type}`, className])} />
    )
  }
}

export default Icon as ComponentClass<IProps, {}>
