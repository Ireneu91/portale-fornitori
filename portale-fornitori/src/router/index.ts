import { createRouter, createWebHistory } from 'vue-router'
import LoginForm from '../components/LoginForm.vue' 
import DashboardView from '../views/DashboardView.vue'
import QuestionarioView from '../views/QuestionarioView.vue'
import CertificazioneView from '../views/CertificazioneView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LoginForm, 
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardView,
    },
    {
      path: '/questionario/:id',
      name: 'questionario',
      component: QuestionarioView,
    },
    {
      path: '/certificazione/:id',
      name: 'certificazione',
      component: CertificazioneView,
    },
  ],
})

export default router