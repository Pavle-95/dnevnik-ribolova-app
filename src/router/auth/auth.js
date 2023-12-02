const Auth = [
  {
    path: '/log-in',
    name: 'Log in',
    component: () => import('views/LogInView.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('views/RegisterView.vue')
  },
];

export default Auth;

