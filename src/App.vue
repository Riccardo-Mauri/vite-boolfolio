<script>
//1- Importazione del componenente necessario che voglio aggiungere qua
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  data() {
    return {
      
    }
  },
  //2- Dichiarazione del componente 
  components: {
    AppHeader,
    AppMain,
    AppFooter
  },
  methods: {
    
  }
}
</script>

<template>
  <div>
    <!--3- Utilizzo del componenete -->
    <AppHeader />
    <AppMain />
    <AppFooter />
  </div>
</template>

<style scoped>

</style>
