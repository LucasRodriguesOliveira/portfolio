<template>
  <footer>
    <div>Todos os direitos reservados</div>
    <div>Desenvolvido e mantido por <span>Lucas R. Oliveira</span></div>
  </footer>
</template>

<script>
export default {
}
</script>

<style scoped>
  footer {
    position: absolute;
    bottom: 0;
    background-color: #004D40;
    color: #00BFA5;
    width: 100%;
    padding: 8px 16px;
    text-align: center;
    font-family: Roboto;
    font-size: 0.8rem;
  }

  span {
    color: #1DE9B6;
  }

  @media only print {
    footer {
      display: none;
    }
  }

  @media only screen and (min-width: 600px) {
    footer {
      font-size: 1.3rem;
    }
  }

  @media only screen and (min-width: 1000px) {
    footer {
      font-size: 1rem;
    }
  }
</style>
