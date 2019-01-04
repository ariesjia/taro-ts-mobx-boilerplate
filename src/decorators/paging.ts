import Taro from "@tarojs/taro"
import get from "lodash/get"

export default function testable() {
  return WrappedComponent => {
    class Paging extends WrappedComponent {

      onPullDownRefresh() {
        if (super.onPullDownRefresh) {
          super.onPullDownRefresh()
        }
        const enablePullDownRefresh = get(this, "config.enablePullDownRefresh")
        if (enablePullDownRefresh && this.reload) {
          return this.reload()
            .then(Taro.stopPullDownRefresh)
            .catch(Taro.stopPullDownRefresh)
        }
      }

      onReachBottom() {
        if (super.onReachBottom) {
          super.onReachBottom()
        }
        const enableFetchMore = get(this, "config.enableFetchMore")
        if (enableFetchMore && this.loadMore) {
          this.loadMore()
        }
      }
    }

    // tslint:disable-next-line
    return Paging as any;
  }
}
