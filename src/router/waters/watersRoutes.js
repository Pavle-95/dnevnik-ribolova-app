const Waters = [
  {
    path: '/location',
    name: 'Location',
    component: () => import('views/WatersView.vue')
  },

  {
    path: '/location/:lake_id',
    name: 'Single Location',
    component: () => import('views/SingleWaterView.vue'),
    props: true,
  },

]

export default Waters;