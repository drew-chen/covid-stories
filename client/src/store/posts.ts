/** Defines store for posts. */
import Vue from 'vue'
import { GetterTree, ActionTree, MutationTree } from 'vuex'
import {
  SET_POSTS,
  SET_LOADING,
  SET_CURR_POST_ID
} from '../types/store/mutations.type'
import { FETCH_POSTS } from '../types/store/actions.type'
import { RootState, PostsState } from '../types/store'
import { PostsModel } from '../types/models'

// Initial state.
export const state = (): PostsState => ({
  posts: [],
  loading: true,
  currPostId: undefined
})

export const getters: GetterTree<PostsState, RootState> = {
  posts ({ posts }) {
    return posts
  },
  currPost ({ posts }) {
    return posts[0]
  }
}

export const mutations: MutationTree<PostsState> = {
  [SET_POSTS] (state, posts) {
    Vue.set(state, 'posts', posts)
  },
  [SET_LOADING] (state, loading) {
    state.loading = loading
  },
  [SET_CURR_POST_ID] (state, currPostId) {
    state.currPostId = currPostId
  }
}

export const actions: ActionTree<PostsState, RootState> = {
  async [FETCH_POSTS] ({ commit }) {
    const { data } = await this.$axios.get<PostsModel>('/posts')
    commit(SET_POSTS, data)
    commit(SET_LOADING, false)
  }
}
