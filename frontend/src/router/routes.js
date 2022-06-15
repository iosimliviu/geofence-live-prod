
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'project', component: () => import('pages/ProjectPage.vue') },
      { path: 'projects', component: () => import('pages/ProjectsPage.vue') },
      { path: 'notifications', component: () => import('pages/NotificationsPage.vue') },
      { path: 'users', component: () => import('pages/UsersPage.vue') },
      { path: 'landing', component: () => import('pages/LandingPage.vue') },
      { path: 'info', component: () => import('pages/InfoPage.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
