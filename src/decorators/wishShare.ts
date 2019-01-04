
export interface ShareConfig {
  title?: string
  path?: string
  imageUrl?: string
}

export default function share(option?: ShareConfig) {
  return WrappedComponent => {
    class WishShare extends WrappedComponent {
      onShareAppMessage() {
        const shareInfo = super.onShareAppMessage
          ? super.onShareAppMessage()
          : {}
        return Object.assign(
          {
            title: "默认分享",
            path: "pages/index/index",
          },
          option,
          shareInfo,
        )
      }
    }

    // tslint:disable-next-line
    return WishShare as any;
  }
}
