<template>
  <div>
    <div class="contact">
      <i class="fas fa-comment"></i>
    </div>
    <div class="describe">
      <div class="describe-main">Contato</div>
      <div class="describe-sub">Que tal alguma dessas opções?</div>
    </div>
    <ul>
      <li>
        <div class="icon"><i class="fas fa-phone"></i></div>
        <div class="data"><a href="https://api.whatsapp.com/send?phone=5545999015529&text=Olá">(45) 99901-5529</a></div>
      </li>
      <li>
        <div class="icon"><i class="far fa-envelope"></i></div>
        <div class="data"><a href="mailto:lucasroliveira98@gmail.com">lucasroliveira98@gmail.com</a></div>
      </li>
      <li>
        <div class="icon"><i class="fab fa-linkedin"></i></div>
        <div class="data"><a href="https://www.linkedin.com/in/lucas-rodrigues-de-oliveira-8548b6125/">Linkedin</a></div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
  .contact {
    margin: 10px 20px;
    text-align: center;
  }

  .fa-comment {
    color: #707070;
    font-size: 4rem;
  }

  .describe {
    margin: 20px;
    font-size: 1.3rem;
    font-family: Roboto;
    text-align: center;
    color: #707070;
  }

  li {
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 16px 0;
    font-size: 1.2rem;
    font-family: Roboto;
    margin-left: 5%;
  }

  .data {
    margin-left: 5%;
  }

  .icon {
    color: grey;
    font-size: 1.3rem;
  }

  a {
    text-decoration: none;
  }

  a:visited {
    color: blue;
  }

  @media only screen and (min-width: 600px) {
    .fa-comment {
      font-size: 6rem;
    }

    .describe {
      font-size: 2.2rem;
    }

    .icon {
      font-size: 3rem;
    }

    li {
      font-size: 1.6rem;
    }
  }

  @media only screen and (min-width: 1000px) {
    .fa-comment {
      font-size: 4rem;
    }

    .describe {
      font-size: 1.6rem;
    }

    .icon {
      font-size: 2rem;
    }

    li {
      font-size: 1.4rem;
      margin-left: 50%;
      transform: translate(-30%);
    }
  }
</style>
