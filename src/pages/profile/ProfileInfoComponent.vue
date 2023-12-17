<script setup>
  import FishermanForm from './partials/FishermanForm.vue';
  import LicenseForm from './partials/LicenseForm.vue'
  import UserHeader from './partials/UserHeader.vue';
  import { ref } from 'vue';

  // Store  
  import { useAuthStore } from '../../stores/authStore'
  const userInfo = useAuthStore();

  const user = ref(userInfo.user);
  const newUser = ref({});
  const fishermanFormData = ref({});
  const licenseFormData = ref({});
  const isEdit = ref(false);


  function onFormSumbitHandler() {
    newUser.value = {...fishermanFormData.value, ...licenseFormData.value}
    user.value = newUser.value;
    userInfo.userUpdate(newUser.value);
    isEdit.value = false;
  }

  function editUser() {
    isEdit.value = true;
  }

  function cancelEdit() {
    isEdit.value = false;
  }

  function fishermanFormChange(data){
    fishermanFormData.value = data;
  }

  function licenseFormChange(data){
    licenseFormData.value = data;
  }

</script>

<template>
  <section class="profile-info">
    <article class="container profile-info-holder">
      <div class="profile-header">
        <UserHeader :user="user" />
      </div>

      <div class="edit-btn">
        <button class="edit btn-primary" v-if="!isEdit" @click="editUser">Edit</button>
        <button class="save btn-primary" v-if="isEdit" @click="onFormSumbitHandler">Save</button>
        <button class="cancel btn-primary" v-if="isEdit" @click="cancelEdit">Cancel</button>
      </div>

      <div class="profile-content" >
        <FishermanForm
          @fishermanFormSubmit="fishermanFormChange"
          :user="user"
          :isEdit="isEdit"  
        />
        <LicenseForm 
          @licenseFormSubmit="licenseFormChange"
          :user="user"
          :isEdit="isEdit"    
        />
      </div>
    </article>
  </section>
</template>

<style lang="scss" scoped>
  .profile-info {
    padding: 80px 0px 120px;
    .profile-info-holder {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-wrap: wrap;
      .profile-header {
        flex: 0 0 100%;
        margin-bottom: 20px;
        display: flex;
        gap: 35px;
        justify-content: center;
        align-items: center;
      }

      .edit-btn {
        width: 100%;
        margin: 15px 0px 15px 20px;
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        button {
          border: none;
          padding: 15px 20px;
          font-size: 16px;
        }
        .edit {
          color: #2154cb;
          &::after {
            background: linear-gradient(90deg, #2154cb 0%, #131529 103.55%);
          }
        }
        .save {

        }
        .cancel {

        }
      }
      .profile-content {
        margin-top: 16px;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        gap: 16px;
      }
    }
  }
</style>