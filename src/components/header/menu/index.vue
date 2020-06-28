<template>
  <nav class="menu">
    <ul>
      <router-link to="/" exact class="menu-item" active-class="active">
        <li>Início</li>
      </router-link>
      <router-link to="/projetos" class="menu-item" active-class="active">
        <li>Projetos</li>
      </router-link>
      <router-link to="/contato" class="menu-item" active-class="active">
        <li>Contato</li>
      </router-link>
      <!-- <router-link to="/blog" class="menu-item" active-class="active">
        <li>Blog</li>
      </router-link> -->
    </ul>
  </nav>
</template>

<script>
export default {
}
</script>

<style scoped>
  li {
    list-style-type: none;
  }

  .menu {
    background-color: #00796B;
    box-shadow: 0 3px 3px rgba(0, 0, 0, 0.3);
  }

  ul {
    width: 100%;
  }

  .menu-item {
    padding: 16px;
    font-family: Roboto;
    color: white;
    display: inline-block;
    max-width: 25%;
    text-align: center;
  }

  .active {
    background-color: #4DB6AC;
  }

  @media only screen and (min-width: 600px){
    .menu-item {
      font-size: 1.5rem;
    }
  }

  @media only screen and (min-width: 1000px) {
    .menu-item {
      font-size: 1.2rem;
    }
  }
</style>
