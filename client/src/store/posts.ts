/**
 * Defines store for posts. Note that these annotations, due to the limitations
 * of Vuex, are not used when the store is accessed in Vue components. Thus,
 * wrapper functions with their own annotations need to be used.
*/
import Vue from 'vue'
import { GetterTree, ActionTree, MutationTree } from 'vuex'
import {
  SET_POSTS,
  SET_LOADING,
  SET_CURR_POST_ID
} from '../types/store/mutations.type'
import { FETCH_POSTS } from '../types/store/actions.type'
import { RootState, PostsState } from '../types/store'
import { PostsModel, PostModel } from '../types/models'

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
  currPost ({ posts, currPostId }): PostModel | undefined {
    if (currPostId === undefined) {
      return undefined
    }
    const currPost = posts.find(p => p.id === currPostId)
    // if (currPost === undefined) {
    //   throw new Error('Post not found.')
    // }
    return currPost
  }
}

export const mutations: MutationTree<PostsState> = {
  [SET_POSTS] (state, posts: PostsModel) {
    Vue.set(state, 'posts', posts)
  },
  [SET_LOADING] (state, loading: boolean) {
    state.loading = loading
  },
  [SET_CURR_POST_ID] (state, currPostId: number) {
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
