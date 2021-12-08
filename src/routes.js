
import SignIn from './components/Common/SignIn'
import NotFound from './components/Common/NotFound'
import Admin from './container/Admin/User/Pages/UserPage'

const routes = [
    {
        path: "/sign-in",
        exact: true,
        element: < SignIn />
    },
    {
        path: "/admin",
        exact: true,
        element: < Admin />
    },
    {
        path: "*",
        exact: false,
        element: < NotFound />
    }
]

export default routes