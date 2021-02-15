# ncform-bootstrap

ncform-bootstrap widget for [ncform](https://github.com/ncform/ncform)

## Install and basic usage

```
npm i -s ncform-bootstrap
```

**Add the widget**

```
import ncformBootstrap from 'ncform-bootstrap';

Vue.use(vueNcform, { extComponents: {ncformBootstrap} });

// or vm.$ncformAddWidget({name: 'ncformBootstrap', widget: ncformBootstrap});

```

**Use the widget**

```
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "widget": "ncform-bootstrap",
      "widgetConfig": {
      }
    }
  }
}
```

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

You only need to care about `src/components/index.vue`

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Run your end-to-end tests
```
npm run test:e2e
```

### Run your unit tests
```
npm run test:unit
```
