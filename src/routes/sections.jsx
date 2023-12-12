import { lazy, Suspense } from 'react'
import { Outlet, Navigate, useRoutes } from 'react-router-dom'

import { useSelector } from 'react-redux'
import DashboardLayout from 'src/layouts/dashboard'

export const IndexPage = lazy(() => import('src/pages/app'))
export const Landing = lazy(() => import('src/pages/landing'))
export const BlogPage = lazy(() => import('src/pages/blog'))
export const UserPage = lazy(() => import('src/pages/user'))
export const LoginPage = lazy(() => import('src/pages/login'))
export const RegisterPage = lazy(() => import('src/pages/register'))
export const ProductsPage = lazy(() => import('src/pages/products'))
export const Page404 = lazy(() => import('src/pages/page-not-found'))

// ----------------------------------------------------------------------



export default function Router () {
  
  const isAuthenticated = useSelector(state => state.users.logined.success)
  
  let routes
  if (!isAuthenticated) {
    routes = useRoutes([
      {
        path: '/',
        element: <Landing />
      },     
      {
        path: 'login',
        element: <LoginPage />
      },
      {
        path: 'register',
        element: <RegisterPage />
      },
      {
        path: '*',
        element: <Navigate to='/login' replace />
      }
    ])
  } else {
    routes = useRoutes([
      {
        path: '/',
        element: <Landing />
      },
      {
        element: (
          <DashboardLayout>
            <Suspense>
              <Outlet />
            </Suspense>
          </DashboardLayout>
        ),
        children: [
          { path: 'overview', element: <IndexPage /> },
          { path: 'user', element: <UserPage /> },
          { path: 'products', element: <ProductsPage /> },
          { path: 'blog', element: <BlogPage /> }
        ]
      },
      {
        path: '404',
        element: <Page404 />
      },
      {
        path: '*',
        element: <Navigate to='/404' replace />
      }
    ])
  }
  return routes
}
