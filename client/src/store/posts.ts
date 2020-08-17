import { GetterTree, ActionTree, MutationTree } from 'vuex'
import { PostModel, PostsModel } from '../types'
import { RootState } from '~/store'

export const state = () => ({
  posts: [] as PostsModel,
  currPost: {} as PostModel
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
