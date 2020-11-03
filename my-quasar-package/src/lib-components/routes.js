import HelloWorld from './HelloWorld.vue'

const routes = [
  {
    path: '/HelloWorld',
    name: 'HelloWorld',
    component: HelloWorld
  }
]

const registerRoutes = function (router) {
  router.addRoutes(routes)
}

export default routes
export { registerRoutes }
