# Pinia persisted state fail in Nuxt 3 when using in plugin

If you init store from plugin start the persist state don't work.

Any message is shown, any warning.

Just it does not work. 


```
// anyplugin.js:
export default defineNuxtPlugin((nuxtApp) => {

   // using here will generate fail in persisting 
  const store = useFailingStore();

  const getCounter = () => {

    // using here will run ok
    // const store = useFailingStore();

    return store.counter;
  };

  return {
    provide: {
        getCounter,
    },
  };

});
```
