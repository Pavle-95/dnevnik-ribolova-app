import { ref } from 'vue'
import { defineStore } from 'pinia'
import { addCatchList } from 'services/catchService';
import { useAuthStore } from './authStore';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';



export const useCatchStore = defineStore('useCatchStore', () => {

  let userToken = useAuthStore().userToken;
  let fishList = ref([]);
  let catchForEdit = ref(null);

  function fetchDataFromLocalStorage() {    
    if(localStorage.getItem('currentCatch') !== null && localStorage.getItem('currentCatch') !== '') {
      fishList.value = JSON.parse(localStorage.getItem('currentCatch'));
    } 
  }

  function addCatchToList(newCatch) {
    fishList.value.push(newCatch)
  }

  function removeCatchFromList(id) {
    // Removing catchWithSameId
    const updatedList = fishList.value.filter(element => element.catch_id !== id);
    fishList.value = updatedList;
        
    // Updating localStorage
    localStorage.setItem("currentCatch", fishList.value)
  }

  function editCatchFromList(id) {
    catchForEdit.value = fishList.value.filter(element => element.catch_id === id);

    console.log(catchForEdit.value);
  }

  async function saveCatchToDatabase(fishListToSave) {

    if(fishListToSave.length <= 0 ) {
      toast("Ne mozes sacuvati praznu listu!", {
        autoClose: 1000,
        "theme": "dark",
        "type": "warning",
        "dangerouslyHTMLString": true
      }); 
    }
    else {
      try {
        const response = await addCatchList(fishListToSave, userToken);

        fishList.value = [];
        localStorage.removeItem('currentCatch');

        toast(response.message, {
          autoClose: 1000,
          "theme": "dark",
          "type": "success",
          "dangerouslyHTMLString": true
        }); 

      } catch (error) {
        console.log(error);
      }

    }
  }

  return { fishList, catchForEdit, addCatchToList, saveCatchToDatabase,
     fetchDataFromLocalStorage, removeCatchFromList, editCatchFromList }
})
