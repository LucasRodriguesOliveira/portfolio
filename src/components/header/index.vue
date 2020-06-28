<template>
  <div id="header">
    <header>
      <!-- Nome -->
      <div class="header-name">
        Lucas<span class="hide-sm"> Rodrigues de</span> Oliveira
      </div>
      <!-- Ícones -->
      <div class="header-icons">
        <div>
          <a href="https://github.com/LucasRodriguesOliveira">
            <i class="fab fa-github"></i>
          </a>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/lucas-rodrigues-de-oliveira-8548b6125/">
            <i class="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </header>
    <MenuComponent></MenuComponent>
  </div>
</template>

<script>
import MenuComponent from './menu'

export default {
  components: {
    MenuComponent
  }
}
</script>

<style scoped>
  a:link, a:hover, a:active, a:visited {
    color: white;
  }

  header {
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Roboto;
    background-color: #00695C;
    color: white;
  }

  .header-name {
    font-size: 2rem;
    text-align: center;
    flex-grow: 9;
    font-family: Comfortaa;
  }

  .header-icons {
    font-size: 1.5rem;
    text-align: center;
    flex-grow: 1;
  }

  i.fa, i.fab {
    margin: 5px;
  }

  .hide-sm {
    display: none;
  }

  @media only screen and (min-width: 600px){
    .hide-sm {
      display: inline;
    }

    header {
      padding: 10px;
    }

    .header-name {
      transform: translateX(5%);
    }
  }

  @media only print {
    div {
      display: none;
    }
  }
</style>
