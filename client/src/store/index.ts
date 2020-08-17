/**
 * Root state.
 * Info on Nuxt + Vuex + Typescript:
 * https://typescript.nuxtjs.org/cookbook/store.html#vanilla
 */

import { ActionTree } from 'vuex'
import { RootState } from '../types/store'

export const state = (): RootState => ({})

export const actions: ActionTree<RootState, RootState> = {
  async nuxtServerInit ({ dispatch }) {
    await dispatch('posts/fetchPosts')
  }
}
