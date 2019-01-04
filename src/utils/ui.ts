import Taro from "@tarojs/taro"

export const alert = (title, content) => {
  return Taro.showModal({
    title,
    content,
    showCancel: false,
  })
}

export const confirm = (title, content) => {
  return Taro.showModal({
    title,
    content,
  })
}
