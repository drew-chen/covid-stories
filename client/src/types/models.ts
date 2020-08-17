/** Data types. */

interface NavItem {
  readonly label: string,
  readonly route: string
}

export interface NavItemsModel extends Array<NavItem> {}

export interface PostModel {
  userId: Number,
  id: Number,
  title: string,
  body: string
}

export interface PostsModel extends Array<PostModel> {}
