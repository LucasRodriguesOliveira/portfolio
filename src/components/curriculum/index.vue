<template>
  <div class="curriculum">
    <div class="personal-data">
      <div class="header-group">Dados Pessoais</div>
      <ul class="data">
        <li>Lucas Rodrigues de Oliveira</li>
        <li>Solteiro, brasileiro, 22 anos</li>
        <li>Rua Paulo VI, 281 – Jd. Concórdia</li>
        <li>CEP: 85907-470 - Toledo - Paraná</li>
        <li>Cel / Cel 2: (45) 9 9901-5529 / (45) 9 9985-8773</li>
        <li>E-mail: lucasroliveira98@gmail.com</li>
      </ul>
    </div>
    <div class="objective">
      <div class="header-group">Objetivo</div>
      <div class="data">Desenvolvedor Fullstack</div>
    </div>
    <div class="academic">
      <div class="header-group">Formação Acadêmica</div>
      <ul class="data">
        <li>2019 – 2020 - Desenvolvimento de Sistemas – Técnico, Instituto Federal do Paraná (IFPR Assis - Biopark) (Cursando)</li>
        <li>2016 – 2017 - Sistemas de Informação – Bacharelado, Centro Universitário FAG (Incompleto)</li>
      </ul>
    </div>
    <div class="professional-exp">
      <div class="header-group">Experiência Profissional</div>
      <ul class="data">
        <li>
          <div>(Set) 2019 – (Abr) 2020 – Dunamis/Maxicon</div>
          <div>Cargo: Desenvolvedor de Software. (Oracle forms, Oracle db)</div>
        </li>
        <li>
          <div>(Jun) 2019 – (Set) 2019 – Dunamis/Maxicon</div>
          <div>Cargo: Desenvolvedor de Software – Estágio. (Oracle forms, Oracle db)</div>
        </li>
        <li>
          <div>(Dez) 2017 – (Mar) 2018 – MV Sistemas</div>
          <div>Cargo:  Desenvolvedor de Sistemas Java Jr. (Java web - JSP, Servlet, JQuery, Javascript, HTML, CSS)</div>
        </li>
        <li>
          <div>2016 – 2017 – Orca Contabilidade</div>
          <div>Cargo: Suporte Interno</div>
        </li>
      </ul>
    </div>
    <div class="languages">
      <div class="header-group">Idiomas</div>
      <div class="data">Inglês Avançado (Speak Idiomas)</div>
    </div>
    <div class="additional-info">
      <div class="header-group">Informações Adicionais</div>
      <div class="data">
        <div>Conhecimento nas seguintes tecnologias:</div>
        <ul>
          <li>Java SE</li>
          <li>SQL (PostgreSql, Oracle) (PL/PG SQL - PostgreSQL, PLSQL - Oracle)</li>
          <li>NoSQL (MongoDB)</li>
          <li>HTML5, CSS3, JavaScript (ES6+)</li>
          <li>Vue.js (VueRouter, Vuex, Vuetify)</li>
          <li>Nodejs (Hapijs). ORM: Mongoose, Sequelize. Outros: Swagger, Joi, JWT, Boom</li>
          <li>Docker, Docker Compose</li>
          <li>GraphQL (Prisma)</li>
          <li>
            <div>GIT:</div>
            <ul>
              <li>Github: <a href="https://github.com/LucasRodriguesOliveira">https://github.com/LucasRodriguesOliveira</a></li>
              <li>Gitlab: <a href="https://gitlab.com/lucas_oliveira">https://gitlab.com/lucas_oliveira</a></li>
            </ul>
          </li>
          <li>
            <div>SO's:</div>
            <ul>
              <li>Windows</li>
              <li>Linux Mint</li>
            </ul>
          </li>
        </ul>
        <div>1º Lugar na Maratona de Programação na convenção de sistemas Pig Data (2017)</div>
        <div>Grande facilidade de aprendizado e interesse em aprender</div>
        <div>CodersRank (<a href="https://profile.codersrank.io/user/lucasrodriguesoliveira">https://profile.codersrank.io/user/lucasrodriguesoliveira</a>)</div>
        <div>Edabit (<a href="https://edabit.com/user/w8heGiSnQDe3GbSjY">https://edabit.com/user/w8heGiSnQDe3GbSjY</a>)</div>
      </div>
    </div>
    <div class="certifieds">
      <div class="header-group">Certificados</div>
      <ul class="data">
        <li>
          <div>Flisol Cascavel - (Abr) 2017</div>
          <ul>
            <li><a href="https://doity.com.br/validar-certificado">https://doity.com.br/validar-certificado</a> (código: 9U00ZM9)</li>
          </ul>
        </li>
        <li>StartupWeekend - (Set) 2019</li>
        <li>PigData 2ª Edição - (Out) 2019</li>
        <li>
          <div>EW e NodeBR (Nodejs) - (Abr) 2019</div>
          <ul>
            <li>(código: cert_lhysknwy)</li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.curriculum {
  font-size: 16px;
  font-family: Arial, Helvetica, sans-serif;
  margin-top: 20px;
  margin-left: 50px;
  margin-right: 50px;
  background-color: #FFF;
  padding: 20px;
  display: none;
}

.curriculum > div {
  margin: 30px;
}

.header-group {
  font-weight: bold;
}

.personal-data {
  text-align: right;
}

.personal-data ul, .academic ul {
  list-style-type: none;
  margin-top: 10px;
}

.personal-data ul li, .academic ul li, .additional-info ul li {
  padding: 2px;
}

.data {
  padding: 5px;
  margin-top: 10px;
}

.professional-exp ul li {
  margin-top: 15px;
}

.additional-info ul li ul {
  margin-left: 50px;
}

.additional-info .data > * {
  margin: 10px 0;
}

@media only print {
  body {
    background-color: #EEE;
  }

  .curriculum {
    display: block;
  }
}
</style>
