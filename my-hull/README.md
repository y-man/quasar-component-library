# my-hull

This is a demo app using quasar and your component library.

## How to reproduce
1. create your project with vue-cli
1. add `vue-cli-plugin-quasar`
1. add your quasar component library
    
    `yarn add my-quasar-package`

1. use `my-quasar-package` in `main.js`
    
    ```js
    import MyQuasarPackage, { RegisterRoutes } from "my-quasar-package/"
    Vue.use(MyQuasarPackage)
    RegisterRoutes(router)
    ```
