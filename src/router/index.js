import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'principal',
      component: () => import('../views/principal.vue')
    },
    {
      path: '/curso_listar',
      name: 'curso_listar',
      component: () => import('../views/curso/curso_listar.vue')
    },
    {
      path: '/curso_crear',
      name: 'curso_crear',
      component: () => import('../views/curso/curso_crear.vue')
    },
    {
      path: '/curso_editar/:id',
      name: 'curso_editar',
      component: () => import('../views/curso/curso_editar.vue')
    }
  ]
})

export default router
