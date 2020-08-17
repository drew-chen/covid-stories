/** Types for Vuex modules. */

import { PostsModel } from '../../types/models'

export interface RootState {}

export interface PostsState {
  posts: PostsModel,
  loading: Boolean,
  currPostId?: number
}
