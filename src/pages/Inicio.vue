<template>
  <div>
    <div class="notebook">
      <i class="fas fa-laptop-code"></i>
    </div>
    <div class="describe">
      <div class="describe-main">Desenvolvedor web</div>
      <div class="describe-sub">{ Front-end e Back-end }</div>
      <div class="annotation">Mobile em breve</div>
    </div>
    <div class="resume">
      Pressione <span>CTRL + P</span> ou baixe aqui meu <a href="https://docs.google.com/document/d/1VyFMex0PWm82nqhBN8imjCxBACqAks0HOr33YHkN1C8/edit?usp=sharing">Currículo</a>
    </div>
    <div class="projects-link">
      Que tal ver alguns <router-link to="/projetos">projetos</router-link>?
    </div>
    <router-link to="/contato">
      <div class="contact">
        <div class="bracket">{</div>
        <div class="button">Entre em contato</div>
        <div class="bracket">}</div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
  .notebook {
    margin: 10px 20px;
    text-align: center;
  }

  i.fa-laptop-code {
    color: #707070;
    font-size: 4rem;
  }

  .describe {
    margin: 20px;
    font-size: 1.3rem;
  }

  .annotation {
    color: #1DE9B6;
    font-size: 1rem;
    margin-top: 5px;
  }

  .projects-link, .resume, .describe {
    font-family: Roboto;
    text-align: center;
    color: #707070;
  }

  .projects-link, .resume {
    font-size: 0.8rem;
    margin: 10px;
  }

  span {
    color: #00BFA5;
  }

  a {
    color: #00BFA5;
  }

  .contact {
    display: flex;
    margin: 20px;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-family: Roboto;
  }

  .contact > * {
    margin-left: 5px;
    margin-right: 5px;
  }

  .bracket {
    color: #7ABF99;
    font-size: 3rem;
  }

  .button {
    font-size: 1.2rem;
    background-color: #3CB371;
    padding: 10px;
    box-shadow: 2px 2px 1px rgba(0, 0, 0, 1);
    color: white;
  }

  @media only screen and (min-width: 600px) {
    i.fa-laptop-code {
      font-size: 6rem;
    }

    .describe {
      font-size: 2.5rem;
    }

    .annotation {
      font-size: 1.8rem;
    }

    .projects-link, .resume {
      font-size: 1.5rem;
    }

    .bracket {
      font-size: 5rem;
    }

    .button {
      font-size: 2rem;
    }
  }

  @media only screen and (min-width: 1000px) {
    i.fa-laptop-code {
      font-size: 4rem;
    }

    .describe {
      font-size: 1.8rem;
    }

    .annotation {
      font-size: 1.2rem;
    }

    .projects-link, .resume {
      font-size: 1rem;
    }

    .bracket {
      font-size: 3rem;
    }

    .button {
      font-size: 1.5rem;
    }
  }
</style>
