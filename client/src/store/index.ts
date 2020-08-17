/**
 * Root state.
 * Info on Nuxt + Vuex + Typescript:
 * https://typescript.nuxtjs.org/cookbook/store.html#vanilla
 */

import { ActionTree } from 'vuex'

export const state = () => ({})

export const actions: ActionTree<RootState, RootState> = {
  async nuxtServerInit ({ dispatch }) {
    await dispatch('posts/fetchPosts')
  }
}

export type RootState = ReturnType<typeof state>
