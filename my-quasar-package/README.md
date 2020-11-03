# my-quasar-package

This is a demo on how to create a component library, which uses quasar.

You can use all the stuff your app will offer like `this.$store` or `this.$route`.

## How to add your own components
1. Add components to `src/lib-components/` folder
1. Export components in `src/lib-components/index.js`
1. Add routes to `src/lib-components/routes.js`


Always import your components by full-name!

**CORRECT** 
```
import HelloWorld from './HelloWorld.vue
```

**NOT CORRECT** 
```
import HelloWorld from './HelloWorld
```

## Development
There is a dev environment for testing your components before publishing.

1. Start dev server with `yarn serve`
1. Import components in `dev/App.vue`

    ```js
    import { MyComponent } from "@/entry";
    ```
1. Use them
    ```html
    <template>
        ...
        <my-component />
        ...
    </template>
    ```

## Publish
1. `yarn build`
1. `yarn pack`
1. `yarn publish`
