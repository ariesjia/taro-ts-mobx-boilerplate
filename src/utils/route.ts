import Taro from "@tarojs/taro"
import findIndex from "lodash/findIndex"

const HOME_PAGE = "pages/index/index"

export const CONSTANT = {
  HOME_PAGE,
}

export const getCtx = selector => {
  const pages = Taro.getCurrentPages()
  const ctx = pages[pages.length - 1]

  const componentCtx = ctx.selectComponent(selector)

  if (!componentCtx) {
    console.error("无法找到对应的组件，请按文档说明使用组件")
    return null
  }
  return componentCtx
}

export const backPage = route => {
  const currentPages = Taro.getCurrentPages()
  const index = findIndex(currentPages, page => {
    return page.route === route
  })
  if (index >= 0) {
    Taro.navigateBack({ delta: currentPages.length - index - 1 || 1 })
  } else {
    Taro.redirectTo({ url: `/${route}` })
  }
}

export const backHome = () => backPage(HOME_PAGE)
