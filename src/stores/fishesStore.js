import { ref } from 'vue'
import { defineStore } from 'pinia'


export const useFishesStore = defineStore('useFishesStore', () => {

  let allFishes = ref([]);



  return { allFishes }
})