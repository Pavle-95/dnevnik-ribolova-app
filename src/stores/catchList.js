// Imports
import { ref } from 'vue'
import { defineStore } from 'pinia'
import { addCatchList, retrieveAllCatch } from 'services/catchService';
import { useAuthStore } from './authStore';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';


export const useCatchStore = defineStore('useCatchStore', () => {
// Variables
  let userToken = useAuthStore().userToken;
  let userId = useAuthStore().user._id;
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

  // async function retriveAllCatchHandler() {
  //   const response = await retriveAllCatch(userId, userToken);

  //   allCatchList.value = response
  //   console.log("Svi ulovi iz baze podataka: ");    
  //   console.log(response);    
  // }
  
async function retrieveAllCatchHandler(timeInput) {
  const response = await retrieveAllCatch(userId, userToken);
  const timeFrame = timeInput; // Change this to "thisMonth" or "lastMonth" as needed
  const stats = calculateFishingStats(response, timeFrame);
  console.log("Fishing Statistics: ", stats);
  return stats;
}

function calculateFishingStats(catchList, timeFrame) {
  const currentDate = new Date();
  let filteredCatches = [];

  // Filter catches based on the selected time frame
  catchList.forEach(catchItem => {
      const catchDate = new Date(catchItem.createdAt);
      
      if (timeFrame === "thisYear" && catchDate.getFullYear() === currentDate.getFullYear()) {
          filteredCatches.push(catchItem);
      } else if (timeFrame === "thisMonth" && 
                 catchDate.getFullYear() === currentDate.getFullYear() && 
                 catchDate.getMonth() === currentDate.getMonth()) {
          filteredCatches.push(catchItem);
      } else if (timeFrame === "lastMonth" && 
                 catchDate.getFullYear() === currentDate.getFullYear() && 
                 catchDate.getMonth() === currentDate.getMonth() - 1) {
          filteredCatches.push(catchItem);
      } else if (timeFrame === "limitles") {
          filteredCatches.push(catchItem); // Include all data
      }
  });

  // Calculate statistics
  const totalCatches = filteredCatches.length;

  // Unique dates for days fishing
  const uniqueDates = new Set(filteredCatches.map(catchItem => new Date(catchItem.createdAt).toISOString().split('T')[0]));
  const daysFishing = uniqueDates.size;

  // Unique fish types
  const uniqueFishTypes = new Set(filteredCatches.map(catchItem => catchItem.fishType));
  const totalSpecies = uniqueFishTypes.size;

  // Calculate hours fishing
  const hoursFishingMap = {};
  
  filteredCatches.forEach(catchItem => {
      const dateKey = new Date(catchItem.createdAt).toISOString().split('T')[0];
      if (!hoursFishingMap[dateKey]) {
          hoursFishingMap[dateKey] = 0;
      }
      hoursFishingMap[dateKey] += 1; // Increment for each catch in a day
  });

  // Total hours fishing is simply the count of catches per day
  const totalHoursFishing = Object.values(hoursFishingMap).reduce((acc, curr) => acc + curr, 0);

  // Calculate average catches per unique day
  const catchAverage = daysFishing > 0 ? (totalCatches / daysFishing).toFixed(2) : 0;

  return {
      totalCatches,
      catchAverage,
      totalSpecies,
      daysFishing,
      hoursFishing: totalHoursFishing,
  };
}



async function retrieveUniqueFishingData(category) {
  const response = await retrieveAllCatch(userId, userToken);
  const stats = extractUniqueValues(category, response);
  console.log(`${category} Data: `, stats);
  return stats;
}

function extractUniqueValues(category, catchList) {
  const stats = {};

  switch (category) {
      case 'typeOfFish':
          stats.data = {};
          catchList.forEach(catchItem => {
              const fishType = catchItem.fishType;
              stats.data[fishType] = (stats.data[fishType] || 0) + 1;
          });
          break;

      case 'fishSize':
          stats.data = {};
          catchList.forEach(catchItem => {
              const fishSize = categorizeFishSize(catchItem.fishWeight);
              stats.data[fishSize] = (stats.data[fishSize] || 0) + 1;
          });
          break;

      case 'location':
          stats.data = {};
          catchList.forEach(catchItem => {
              const location = catchItem.location;
              stats.data[location] = (stats.data[location] || 0) + 1;
          });
          break;

      case 'fishingMethod':
          stats.data = {};
          catchList.forEach(catchItem => {
              const fishingMethod = catchItem.fishingMethod;
              stats.data[fishingMethod] = (stats.data[fishingMethod] || 0) + 1;
          });
          break;

      case 'baitUsed':
          stats.data = {};
          catchList.forEach(catchItem => {
              const baitUsed = catchItem.baitType;
              stats.data[baitUsed] = (stats.data[baitUsed] || 0) + 1;
          });
          break;

      default:
          throw new Error(`Unknown category: ${category}`);
  }

  // Convert the object to an array of { name, value } format
  return convertToArray(stats.data);
}

function categorizeFishSize(weight) {
  if (weight <= 5) return 'od 0 do 5cm';
  if (weight <= 10) return 'od 5 do 10cm';
  if (weight <= 15) return 'od 10 do 15cm';
  if (weight <= 20) return 'od 15 do 20cm';
  if (weight <= 25) return 'od 20 do 25cm';
  return 'preko 25cm';
}

function convertToArray(obj) {
  return Object.entries(obj).map(([name, value]) => ({ name, value }));
}

  return { fishList, catchForEdit, retrieveUniqueFishingData, retrieveAllCatchHandler, addCatchToList, saveCatchToDatabase,
    fetchDataFromLocalStorage, removeCatchFromList, editCatchFromList }
})
