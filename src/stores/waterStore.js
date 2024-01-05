import { defineStore } from "pinia";
import { ref } from "vue";



export const useWaterStore = defineStore('useWaterStore', ()=> {

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
  
  let waters = ref();
  let singleWater = ref();

  // Next Release make this work
  // function getTopLocation() {
    
  // }


  








  return { waters, singleWater, popularWaters }
});
