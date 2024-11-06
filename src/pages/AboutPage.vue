<script>
import axios from 'axios';
export default {
  data() {
    
  },
  mounted(){
    
  },
  methods: {
    
  }
  
}
</script>

<template>
  <div class="about-container">
    <h1>Questa è la mia pagina personale</h1>
    <div class="My-info">
      <p>Ciao, sono Riccardo Mauri e sto imparando a programmare.</p>
      <p>Per ora le tecnologie che ho visto e sto cercando di apprendere sono:</p>
      <ul>
        <h3>Front-End</h3>
        <li>HTML</li>
        <li>CSS</li>
        <li>JS</li>
        <li>Vite + Vue</li>
        <h3>Back-End</h3>
        <li>PHP</li>
        <li>SQL</li>
        <li>laravel</li>
      </ul>
    </div>
  </div>

</template>

<style scoped>
  .about-container{
    width: 1000px;
    margin: 0 auto;
    text-align: center;
  }
  .My-info{
    padding: 20px;
  }
  .My-info > ul{
    list-style: none;
    padding: 10px;
  }
</style>
