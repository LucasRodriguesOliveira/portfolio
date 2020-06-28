<template>
  <div>
    <div class="title">Todos os Projetos</div>
    <ul class="project-list">
      <li v-for="p in projects" :key="p.id">
        <!-- <router-link :to="`/projetos/${p.id}`">--><img :src="getImage(p.img)"><!--</router-link> -->
        <div class="project-name">{{ p.name }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      projects: [
        { id: 1, name: 'Portfolio', img: 'portfolio-thumbnail.png' }
      ]
    }
  },

  methods: {
    getImage (src) {
      return require(`../assets/${src}`)
    }
  }
}
</script>

<style scoped>
  .title {
    font-family: Roboto;
    font-size: 1.5rem;
    text-align: center;
    padding: 10px;
    color: #00BFA5;
  }

  img {
    width: 100%;
    object-fit: cover;
    opacity: 0.75;
  }

  ul {
    list-style-type: none;
    overflow: scroll;
  }

  li {
    margin: 10px 15px 20px 25px;
    box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.3);
    position: relative;
    width: 80%;
  }

  .project-name {
    background-color: rgba(0, 0, 0, 0.6);
    color: white;
    font-family: Roboto;
    font-size: 1.2rem;
    text-align: center;
    position: absolute;
    width: 100%;
    bottom: 0;
    padding: 5%;
  }

  @media only screen and (min-width: 600px) {
    .title {
      font-size: 2.5rem;
    }

    li {
      margin: 10px auto 20px auto;
      width: 70%;
    }

    .project-name {
      font-size: 2rem;
    }
  }

  @media only screen and (min-width: 1000px) {
    .title {
      font-size: 1.8rem;
    }

    li {
      margin: 10px auto 20px auto;
      width: 40%;
      height: 25vw;
    }

    .project-name {
      font-size: 2rem;
    }

    img {
      height: 100%;
    }

    ul {
      overflow: auto;
    }
  }
</style>
