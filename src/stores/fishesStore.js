import { ref } from 'vue';
import { defineStore } from 'pinia';
import { getFish } from '../services/fishesService';

import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';


export const useFishesStore = defineStore('useFishesStore', () => {
  /// Regular Variables
  let isLoading = ref(false);

  let allFishes = ref([]);
  let singleFish = ref({});


  async function getSingleFish(fish_id, token) {
    isLoading.value = true;

    try {
      const response = await getFish(fish_id, token);
      singleFish.value = response;
      console.log(singleFish.value);

      isLoading.value = false;
    } 
    catch (error) {
      toast("Doslo je do greske, Vratite se nazad", {
        autoClose: 1500,
        "theme": "dark",
        "type": "warning",
        "dangerouslyHTMLString": true
      })
    }
  }

  return { isLoading, allFishes, singleFish, getSingleFish }
})