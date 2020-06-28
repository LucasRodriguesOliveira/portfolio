<template>
  <div id="app">
    <HeaderComponent></HeaderComponent>
    <ContentComponent></ContentComponent>
    <FooterComponent></FooterComponent>
    <CurriculumComponent></CurriculumComponent>
  </div>
</template>

<script>
import HeaderComponent from './components/header'
import ContentComponent from './components/content'
import FooterComponent from './components/footer'
import CurriculumComponent from './components/curriculum'

export default {
  name: 'App',
  components: {
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    CurriculumComponent
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

 html {
   font-size: 16px;
 }

 a:link, a:hover, a:active, a:visited {
   text-decoration: none;
 }

 #app {
   min-height: 100vw;
 }

 @media only screen and (min-width: 1000px) {
   #app {
     min-height: 0;
   }
 }
</style>
