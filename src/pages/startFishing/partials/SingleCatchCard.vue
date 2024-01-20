<script setup>
  import { defineProps, ref } from 'vue';
  import { useCatchStore } from 'stores/catchList.js'

  const cathListStore = useCatchStore();
  let addCatchModal = ref('addCatchModal');


  // function editCatchHandler(id) {
  //   addCatchModal.value.showModal();
  //   cathListStore.editCatchFromList(id)
  // }


  defineProps({
    fish: Object,
    fishType: Number,
  })


</script>

<template>
  <article class="single-catch-card">
    <span class="card-img"> 
        <img src="img/allFishesImg/saran-ceski.png" :alt="fish.fishType">
      </span>
      <div class="card-content">
        <p class="fish-name">Ime Ribe: <span>{{ fish.fishType }}</span></p>
        <!-- <p v-if="fish.createdAt !== ''" class="fish-date">Datum: <span>{{ fish.createdAt.split('T')[0] }}</span></p> -->
        <p class="fish-weight">Tezina: <span>{{ fish.fishWeight }}</span></p>
        <p class="fish-baitType">Mamac: <span>{{ fish.baitType }}</span></p>
      </div>
<!-- 
      <span @click="editCatchHandler(fish.catch_id)" class="edit-btn">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 5.00012L1 13.0001V17.0001L5 17.0001L13 9.0001M9 5.00012L11.8686 2.13146L11.8704 2.12976C12.2652 1.73488 12.463 1.53709 12.691 1.46301C12.8919 1.39775 13.1082 1.39775 13.3091 1.46301C13.5369 1.53704 13.7345 1.7346 14.1288 2.12892L15.8686 3.86872C16.2646 4.26474 16.4627 4.46284 16.5369 4.69117C16.6022 4.89201 16.6021 5.10835 16.5369 5.3092C16.4628 5.53736 16.265 5.73516 15.8695 6.13061L15.8686 6.13146L13 9.0001M9 5.00012L13 9.0001" stroke="#60B3FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </span> -->
      <span @click="cathListStore.removeCatchFromList(fish.catch_id)" class="delete-btn">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path id="Vector" d="M8 12H16M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z" stroke="#FF6060" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </span>
  </article>
</template>

<style lang="scss" scoped>
  .single-catch-card {
    position: relative;
    padding: 10px;
    border-radius: 38px;
    border: 2px solid var(--FirstLinear, #94A03C);
    min-width: 330px;
    max-width: 330px;
    transition: .3s ease-in-out;
    .card-img {
      position: relative;
      z-index: 2;
      display: block;
      width: 100%;
      height: auto;
      border-radius: 32px 32px 0px 60px;
      background: linear-gradient(90deg, #94A03C 0%, #1E2913 103.55%);
      padding: 30px;
      img {
        display: block;
        max-width: 100%;
        height: auto;
      }
    }
    .card-content {
      position: relative;
      z-index: 1;
      margin-top: -50px;
      padding: 64px 40px 20px;
      display: block;
      height: auto;
      border-radius: 0px  0px 32px 32px;
      background: #FAF7F3;
      p {
        color: #1E1E1E;
        font-family: 'Jost', sans-serif;
        font-size: 24px;
        font-style: normal;
        font-weight: 400;
        line-height: 140%; /* 33.6px */
        margin-bottom: 6px;
        text-transform: capitalize;
        span {
          color: #1E1E1E;
          font-weight: 600;
        }
        &:last-of-type {
          margin-bottom: 0px;
        }
      }
    }
    .card-type-0, .card-type-1, .card-type-2 {
      margin-top: 5px;
      text-align: center;
      font-family: 'Jost', sans-serif;
      font-size: 34px;
      font-style: normal;
      font-weight: 700;
      line-height: 47px; /* 47.6px */
      background: var(--GoldLinear, linear-gradient(180deg, #FDD727 0%, #5D4A1F 100%));
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .card-type-1 {
      background: var(--SilverLinear, linear-gradient(180deg, #D9D9D9 0%, #5A5A5A 100%));
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .card-type-2 {
      background: var(--BronzeLinear, linear-gradient(180deg, #B96F00 0%, #663200 100%));
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .edit-btn {
      display: none;
      position: absolute;
      top: -30px;
      right: 20px;
      padding: 0px 5px 20px 5px;
      &:hover {
        cursor: pointer;
      }
    }
    .delete-btn {
      display: none;
      position: absolute;
      top: -30px;
      right: -15px;
      padding: 0px 5px 20px 5px;
      &:hover {
        cursor: pointer;
      }
    }
    &:hover {
      .edit-btn, .delete-btn {
        display: block
      }
    }
  }
  .style-type-1 {
    border-radius: 38px;
    border: 2px solid var(--SilverLinear, #D9D9D9);
  }
  .style-type-2 {
    border-radius: 38px;
    border: 2px solid var(--BronzeLinear, #B96F00);
  }
</style>