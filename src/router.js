import VueRouter from 'vue-router'

// Components
import InicioComponent from './pages/Inicio'
import ProjetosComponent from './pages/Projetos'
import ContatoComponent from './pages/Contato'
import BlogComponent from './pages/Blog'

import ProjetosListaComponent from './pages/Projetos-lista'
import ProjetosDetalhesComponent from './pages/Projetos-detalhes'

const router = new VueRouter({
  routes: [
    { path: '', component: InicioComponent },
    {
      path: '/projetos',
      component: ProjetosComponent,
      children: [
        { path: '', component: ProjetosListaComponent },
        { path: ':id', component: ProjetosDetalhesComponent }
      ]
    },
    { path: '/contato', component: ContatoComponent },
    { path: '/blog', component: BlogComponent }
  ],
  mode: 'history'
})

export default router
