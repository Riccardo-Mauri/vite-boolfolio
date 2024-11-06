<script>
import axios from 'axios';
export default {
  data() {
    return {
      Projects: [],
    }
  },
  mounted() {
    this.getProjects();
  },
  methods: {
    getProjects() {
      axios
        .get('http://127.0.0.1:8000/api/projects')
        .then((res) => {
          console.log(res.data);
          this.Projects = res.data.data;
          console.log(this.Projects);
        });
    }
  }

}
</script>

<template>
  <main>
    <div>
      <h1>Questa è la pagina dei progetti</h1>
    </div>
    <div class="container text-center">
      <div class="projectCard">
        <div v-for="Project in Projects" :key="Project.id" class="">
          <h3>{{ Project.id }}){{ Project.title }}</h3>
          <h5>{{ Project.description }}</h5>
          <div>
            <img :src="Project.image" alt="Project image" />
          </div>
        </div>
      </div>
    </div>
  </main>

</template>

<style scoped>
.main {
  width: 1000px;
}

.projectCard {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.projectCard>* {
  width: 30%;
  border: 2px solid black;
  text-align: center;
  margin: 2px;
  padding: 20px;
}
</style>
