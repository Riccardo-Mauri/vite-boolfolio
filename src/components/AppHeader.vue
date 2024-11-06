<script>
export default {
  data() {
    return {

    }
  },

}
</script>

<template>
  <header>
    <div>
      <ul>
        <li>
          <router-link :to="{ name: 'home' }">
            Home
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'Projects' }">
            Projects
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'AboutMe' }">
            About Me
          </router-link>
        </li>
      </ul>
    </div>
  </header>
</template>

<style scoped>
header {
  text-align: center;
  padding: 10px 20px;
}
</style>
