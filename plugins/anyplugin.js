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
