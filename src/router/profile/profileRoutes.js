const Profile = [
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('views/ProfileView.vue')
  },
  {
    path: '/profile-license',
    name: 'Profile License',
    component: () => import('views/ProfileLicenseView.vue')
  },
];

export default Profile;

