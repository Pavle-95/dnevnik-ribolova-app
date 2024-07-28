import { defineStore } from "pinia";
import { getSingleWater } from '../services/waterSearchServices'
import { ref } from "vue";

import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

export const useWaterStore = defineStore('useWaterStore', ()=> {

  /// Regular Variables
  let isLoading = ref(false);

  let waters = ref([]);

  let singleWater = ref({});

  let popularWaters = ref([
    {
      "imgUrl": "images/perucac-dam.jpg",
      "Naziv": "Perućačko",
      "wikiPageURL": "/wiki/Perućac_%28jezero%29",
      "fishInArea": ['mladica', 'mrena', 'klen', 'plotica', 'saran-ceski', 'skobalj', 'som'],
      "coordinates": '19.403574, 43.967523',
    },
    {
      "imgUrl": "images/barje.jpg",
      "Naziv": "Barje",
      "wikiPageURL": "/wiki/%D0%91%D0%B0%D1%80%D1%98%D0%B5_(%D1%98%D0%B5%D0%B7%D0%B5%D1%80%D0%BE)",
      "fishInArea": ['saran-ceski', 'smudj', 'stuka', 'tolstolobik-beli', 'klen', 'som', 'deverika'],
      "coordinates": '21.810334, 42.807216',
    },
    {
      "imgUrl": "images/dunav-reka.jpg",
      "Naziv": "Dunav",
      "wikiPageURL": "/wiki/%D0%91%D0%B0%D1%80%D1%98%D0%B5_(%D1%98%D0%B5%D0%B7%D0%B5%D1%80%D0%BE)",
      "fishInArea": ['mladica', 'mrena', 'klen', 'plotica', 'saran-ceski', 'skobalj', 'som'],
      "coordinates": '20.353059, 45.016691',
    },
  ]);

  async function getSingleWaterStore(water_id, token) {
    isLoading.value = true;
    try {
      const response = await getSingleWater(water_id, token);
      singleWater.value = response; 
      isLoading.value = false;

    } catch (error) {
      console.log(error);
      // Handle network errors or other issues
      toast("Doslo je do greske, Vratite se nazad", {
        autoClose: 1500,
        "theme": "dark",
        "type": "warning",
        "dangerouslyHTMLString": true
      })

      isLoading.value = true;
    }
  };


  return { waters, singleWater, popularWaters, isLoading, getSingleWaterStore }
});
