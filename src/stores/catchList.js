// Imports
import { ref } from 'vue'
import { defineStore } from 'pinia'
import { addCatchList } from 'services/catchService';
import { useAuthStore } from './authStore';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';


export const useCatchStore = defineStore('useCatchStore', () => {
// Variables
  let userToken = useAuthStore().userToken;
  let fishList = ref([]);
  let catchForEdit = ref({});

//// Function
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

  function editCatchFromList(newData) {    
    // Finding index of object
    const catchIndex = fishList.value.findIndex(element => element.catch_id === newData.catch_id);
    // Updating list with new data on index
    fishList.value[catchIndex] = newData;
    // Making new list to loose Reactivity 
    const newListofCatchs = fishList.value;
    // Updating localStorage
    localStorage.setItem("currentCatch", JSON.stringify(newListofCatchs))

  }

  async function saveCatchToDatabase(fishListToSave) {
    // Check if list you want to save empty
    if(fishListToSave.length <= 0 ) {
      toast("Ne mozes sacuvati praznu listu!", {
        autoClose: 1000,
        "theme": "dark",
        "type": "warning",
        "dangerouslyHTMLString": true
      }); 
    }
    // If list not empty call backend and try to save it
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
