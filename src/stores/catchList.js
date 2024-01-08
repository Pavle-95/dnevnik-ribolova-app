import { ref } from 'vue'
import { defineStore } from 'pinia'


export const useCatchStore = defineStore('useCatchStore', () => {

  let fishList = ref([]);


  function addCatchToList(newCatch) {
    fishList.value.push(newCatch)

  }

  return { fishList, addCatchToList }
})
