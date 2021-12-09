const routes = [
  {
    path: "/",
    component: () => import("@/views/mycomponent")
  },
  {
    path: "/loginUser",
    component: () => import("@/views/LoginUser")
  },
  {
    path: "/loginToken",
    component: () => import("@/views/LoginToken")
  },
  {
    path: "/forgotPassword",
    component: () => import("@/views/ForgotPassword")
  },
]

export default routes