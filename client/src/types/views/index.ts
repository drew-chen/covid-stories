/**
 * These are the types for any component, page, or layout but NOT Vuex. See the
 * types/store directory for the store types.
 */

interface NavItem {
  readonly label: string,
  readonly route: string
}

export interface NavItemsModel extends Array<NavItem> {}
