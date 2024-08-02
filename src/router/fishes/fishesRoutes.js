const Fishes = [
  {
    path: '/fishes',
    name: 'Fishes',
    component: () => import('views/FishesVies.vue')
  },
  {
    path: '/fish/:fish_id',
    name: 'Single Fish',
    component: () => import('views/SingleFishView.vue'),
    props: true,
  },

]

export default Fishes;