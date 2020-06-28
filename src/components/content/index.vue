<template>
  <main>
    <router-view></router-view>
  </main>
</template>

<script>

export default {
}
</script>

<style scoped>
  main {
    margin: 30px 15px 15px 15px;
    padding: 5px;
    box-shadow: 0 3px 3px rgba(0, 0, 0, 0.3);
  }

  @media only print {
    main {
      display: none;
    }
  }

  @media only screen and (min-width: 1000px) {
    main {
      margin: 30px 10% 15px 10%;
    }
  }
</style>
