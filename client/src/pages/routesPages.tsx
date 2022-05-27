import {ADMIN_ROUTE, MAIN_ROUTE, REVIEWS_ROUTE} from './constsPages'
import ReviewsPage from './ReviewsPage'
import MainPage from './MainPage'
import AdminPage from './AdminPage'

export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    Element: AdminPage
  }
]

export const publicRoutes = [
  {
    path: MAIN_ROUTE,
    Element: MainPage
  },
  {
    path: REVIEWS_ROUTE,
    Element: ReviewsPage
  }
]