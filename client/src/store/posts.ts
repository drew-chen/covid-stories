import { GetterTree, ActionTree, MutationTree } from 'vuex'
import { PostModel, PostsModel } from '../types'
import { RootState } from '~/store'

export const state = () => ({
  posts: [] as PostsModel,
  currPost: {} as PostModel,
  loading: true
})

export type PostsState = ReturnType<typeof state>

export const getters: GetterTree<PostsState, RootState> = {
  posts ({ posts }) {
    return posts
  },
  currPost ({ currPost }) {
    return currPost
  }
}

export const mutations: MutationTree<PostsState> = {
  SET_POSTS (state, posts) {
    state.posts = posts
  },
  SET_LOADING (state, loading) {
    state.loading = loading
  }
}

export const actions: ActionTree<PostsState, RootState> = {
  async loadPosts ({ commit }) {
    const { data } = await this.$axios.get<PostsModel>('/posts')
    commit('SET_POSTS', data)
  }
}
