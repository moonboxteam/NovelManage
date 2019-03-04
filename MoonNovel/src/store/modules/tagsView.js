/**
 * Create by CC on 2018/12/12
 */
'use strict'

const tagsView = {
  state: {
    language: localStorage.getItem('language') || 'zh'
  },
  mutations: {
    SetLanguage: (state, language = 'zh') => {
      state.language = language
      localStorage.setItem('language', language)
    }
  },
  actions: {
    setLanguage({ commit }, language) {
      commit('SetLanguage', language)
    }
  }
}

export default tagsView
