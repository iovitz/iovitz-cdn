import $ from 'jquery'
import mousetrap from 'mousetrap'

// 拿到Window
const unsafeWindow = window?.unsafeWindow
const scopeWindow = unsafeWindow ? (unsafeWindow.window === unsafeWindow ? unsafeWindow : window) : window

scopeWindow.__MONKEY_SCRIPTS__ = {
  $,
  mousetrap,
}
