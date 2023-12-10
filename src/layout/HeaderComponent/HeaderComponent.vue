<script setup>
  import { RouterLink } from 'vue-router';


</script>

<template>
  <header class="header-holder">
    <ul class="container navigation">
      <li class="navigation-link">
        <RouterLink class="logo-link" to="/home">
          <img class="logo-img" src="img/header/dnevnik-ribolova-logo.svg" alt="Logo">
          <p class="logo-text">Dnevnik <br> Ribolova</p>
        </RouterLink>
      </li>
      <li class="navigation-link">
        <RouterLink class="home-link" to="/home">
          Home
        </RouterLink>
      </li>
      <li class="navigation-link">
        <RouterLink class="statistics-link" to="/statistics">
          Statistics
        </RouterLink>
      </li>
      <li class="navigation-link">
        <RouterLink class="location-link" to="/location">
          Location
        </RouterLink>
      </li>
      <li class="navigation-link">
        <RouterLink class="profile-link" to="/profile">
          Profile
        </RouterLink>
      </li>
    </ul>
  </header>
</template>

<style lang="scss" scoped>
  .header-holder {
    .navigation {
      padding: 10px 0px;
      list-style: none;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 35px;
      .navigation-link {
        .logo-link {
          display: flex;
          align-items: center;
        }
        a {
          color: #FBE2B7;
          font-family: 'Jost', sans-serif;
          font-size: 22px;
          font-style: normal;
          font-weight: 700;
          line-height: 35px; /* 159.091% */
          text-transform: uppercase;
          transition: .3s ease-out;
          &:hover {
            transition: .3s ease-out;
            &::after {
              width: 100%;
            }
          }
          &::after {
            transition: .3s ease-out;
            display: block;
            content: '';
            width: 0%;
            height: 2px;
            background: #FBE2B7;
          }
        }
        .profile-link {
          padding: 10px 25px;
          border-radius: 10px;
          border: 1px solid #303030;
          background: #FBE2B7;
          color: #21221C;
          &::after {
            all: unset;
          }
        }
        .logo-link {
          &::after {
            all: unset;
          }
        }
        &:first-of-type {
          margin-right: auto;
        }
        &:last-of-type {
          margin-left: auto;
        }
      }
    }
  }
</style>