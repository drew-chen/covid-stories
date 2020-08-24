/** Data types. */

interface NavItem {
  readonly label: string,
  readonly route: string
}

export interface NavItemsModel extends Array<NavItem> {}

export interface PostModel {
  userId: number,
  id: number,
  title: string,
  body: string
}

export interface PostsModel extends Array<PostModel> {}
