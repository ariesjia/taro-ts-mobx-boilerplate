jest.mock("@tarojs/taro", () => ({
  default: {
    getCurrentPages: null,
    navigateBack: null,
    redirectTo: null,
  },
}))
import Taro from "@tarojs/taro"
import { backHome, CONSTANT } from "./route"

describe("route test", () => {
  beforeEach(() => {
    jest.resetModules()
  })

  it('should use redirectTo when currentPages is empty"', () => {
    Taro.getCurrentPages = jest.fn().mockReturnValue([])
    const redirectTo = (Taro.redirectTo = jest.fn())
    backHome()
    expect(redirectTo).toHaveBeenCalled()
  })

  it('should use navigateBack to home page when currentPages include home page"', () => {
    Taro.getCurrentPages = jest
      .fn()
      .mockReturnValue([{}, {}, { route: CONSTANT.HOME_PAGE }, {}, {}])
    const navigateBack = (Taro.navigateBack = jest.fn())
    backHome()
    expect(navigateBack).toHaveBeenCalled()
    expect(navigateBack).toHaveBeenCalledWith({ delta: 2 })
  })

  it('should use navigateBack to home page when currentPages include home page"', () => {
    Taro.getCurrentPages = jest
      .fn()
      .mockReturnValue([{}, {}, { route: CONSTANT.HOME_PAGE }, {}])
    const navigateBack = (Taro.navigateBack = jest.fn())
    backHome()
    expect(navigateBack).toHaveBeenCalled()
    expect(navigateBack).toHaveBeenCalledWith({ delta: 1 })
  })

  it('should use redirectTo when currentPages is not include home page"', () => {
    Taro.getCurrentPages = jest.fn().mockReturnValue([{}, {}, {}, {}, {}])
    const redirectTo = (Taro.redirectTo = jest.fn())
    backHome()
    expect(redirectTo).toHaveBeenCalled()
  })
})
