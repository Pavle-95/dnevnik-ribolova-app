import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useRouter } from 'vue-router';

export const useAuthStore = defineStore('useAuthStore', () => {

  const isUser = ref(false);
  const userName = ref(null);
  const userToken = ref(null);

  function isUserLogin() {
    const router = useRouter();
  
    if (localStorage.getItem('user') !== null) {
      isUser.value = true;
      userName.value = JSON.parse(localStorage.getItem('user')).user.fullName;
      userToken.value = JSON.parse(localStorage.getItem('user')).token;
    } else {
      isUser.value = false;
      router.push('/login');
    }
  }


  return { isUser, userName, userToken, isUserLogin }
})
