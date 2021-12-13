
import SignIn from './components/Common/SignIn'
import NotFound from './components/Common/NotFound'
import SignUp from './components/Client/SignUp'
import Admin from './container/Admin'


export const adminRoutes = [
    {
        path: "/admin/*",
        exact: false,
        element: < Admin />
    },
    {
        path: "/sign-in",
        exact: true,
        element: < SignIn />
    },
    {
        path: "/sign-up",
        exact: true,
        element: < SignUp />
    },
    
    {
        path: "*",
        exact: false,
        element: < NotFound />
    }
]

// export const routesPrivate = [
//     {
//         path: "/sign-in",
//         exact: true,
//         element: < SignIn />
//     },
//     {
//         path: "/sign-up",
//         exact: true,
//         element: < SignUp />
//     },
//     {
//         path: "/admin",
//         exact: true,
//         element: < Admin />
//     },
//     {
//         path: "*",
//         exact: false,
//         element: < NotFound />
//     }
// ]