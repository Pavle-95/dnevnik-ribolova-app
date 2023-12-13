import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useRouter } from 'vue-router';
import { jwtDecode } from 'jwt-decode';

export const useAuthStore = defineStore('useAuthStore', () => {

  const isUser = ref(false);
  const userName = ref(null);
  const userToken = ref(null);

  function isUserLogin() {
    const router = useRouter();
    const token =
    JSON.parse(localStorage.getItem("user")) &&
    JSON.parse(localStorage.getItem("user"))["token"];

    if(token !== null) {
      if (jwtDecode(token).exp < Date.now() / 1000 !== true) {
        isUser.value = true;
        userName.value = JSON.parse(localStorage.getItem('user')).user.fullName;
        userToken.value = JSON.parse(localStorage.getItem('user')).token;
      } else {
        isUser.value = false;
        localStorage.clear();
        router.push('/login');
      }
    }
    else {
      isUser.value = false;
      localStorage.clear();
      router.push('/login');
    }
  }


  return { isUser, userName, userToken, isUserLogin }
})
