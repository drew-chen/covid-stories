/**
 * Defines store for posts. Note that these annotations, due to the limitations
 * of Vuex, are not used when the store is accessed in Vue components. Thus,
 * wrapper functions with their own annotations need to be used.
 */
import Vue from 'vue'
import { GetterTree, ActionTree, MutationTree } from 'vuex'
import {
  SET_POSTS,
  SET_LOADING
} from '../types/store/mutations.type'
import { FETCH_POSTS } from '../types/store/actions.type'
import { RootState, PostsState } from '../types/store'
import { PostsModel, PostModel } from '../types/models'

// Initial state.
export const state = (): PostsState => ({
  posts: [],
  loading: true
})

export const getters: GetterTree<PostsState, RootState> = {
  posts ({ posts }) {
    return posts
  },
  getPostById: ({ posts }) => (id: number): PostModel | undefined => {
    const post = posts.find(p => p.id === id)
    // if (currPost === undefined) {
    //   throw new Error('Post not found.') // TODO: error handling, redirect to 404
    // }
    return post
  }
}

export const mutations: MutationTree<PostsState> = {
  [SET_POSTS] (state, posts: PostsModel) {
    Vue.set(state, 'posts', posts)
  },
  [SET_LOADING] (state, loading: boolean) {
    state.loading = loading
  }
}

export const actions: ActionTree<PostsState, RootState> = {
  async [FETCH_POSTS] ({ commit }) {
    const { data } = await this.$axios.get<PostsModel>('/posts')
    commit(SET_POSTS, data)
    commit(SET_LOADING, false)
  }
}
