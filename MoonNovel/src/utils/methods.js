/**
 * Create by CC on 2018/12/6
 */
'use strict'
import api from './request'

class Methods {
  removeUserSession() {
    if (this.getUserSession()) {
      api.post('/api/user/logout', {}).finally(() => {
        sessionStorage.removeItem('credential')
        sessionStorage.removeItem('userName')
      })
    }
  }

  getUserSession() {
    return sessionStorage.getItem('credential') || ''
  }

  setUserSession(session = '') {
    sessionStorage.setItem('credential', session)
  }

  hotkeys(fn, keyCode, ...args) {
    document.onkeydown = (e) => {
      var code = e.key
      if (code === keyCode && typeof fn === 'function') {
        fn.apply(this, args)
        e.preventDefault()
      }
    }
  }
}

const methods = new Methods()
export default methods
