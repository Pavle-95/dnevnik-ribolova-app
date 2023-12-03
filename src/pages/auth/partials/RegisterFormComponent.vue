<script setup>
// Imports
  import { RouterLink } from 'vue-router'
  import { ref } from 'vue';

/// Variables
  var inputName = ref(null); 
  var inputEmail = ref(null); 
  var inputPassword = ref(null); 

  var showPassword = ref(false);

//// Function
  function showPasswordHandler() {
    showPassword.value = !showPassword.value;
  }

  async function formSubmitHandler() {
    try {
      const response = await fetch("http://localhost:5713/register", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({"fullName": inputName.value, "email": inputEmail.value, "password": inputPassword.value}),
    });

    const result = await response.json();
    console.log("Success:", result);
    } catch (error) {
      console.log(error);
    }
  }
</script>

<template>
  <section class="register-form-container">
    <div class="form-holder">

      <h2 class="register-form-header">Registruj se za avanturu</h2>

      <form class="register-form">

        <div class="input-name">
          <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 21.5C20 18.7386 16.4183 16.5 12 16.5C7.58172 16.5 4 18.7386 4 21.5M12 13.5C9.23858 13.5 7 11.2614 7 8.5C7 5.73858 9.23858 3.5 12 3.5C14.7614 3.5 17 5.73858 17 8.5C17 11.2614 14.7614 13.5 12 13.5Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <input v-model="inputName" type="text" placeholder="Ime i Prezime">
        </div>

        <div class="input-email">
          <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 6.5L10.1076 11.1123L10.1097 11.114C10.7878 11.6113 11.1271 11.8601 11.4988 11.9562C11.8272 12.0412 12.1725 12.0412 12.501 11.9562C12.8729 11.86 13.2132 11.6105 13.8926 11.1123C13.8926 11.1123 17.8101 8.10594 20 6.5M3 16.3002V8.7002C3 7.58009 3 7.01962 3.21799 6.5918C3.40973 6.21547 3.71547 5.90973 4.0918 5.71799C4.51962 5.5 5.08009 5.5 6.2002 5.5H17.8002C18.9203 5.5 19.4796 5.5 19.9074 5.71799C20.2837 5.90973 20.5905 6.21547 20.7822 6.5918C21 7.0192 21 7.57899 21 8.69691V16.3036C21 17.4215 21 17.9805 20.7822 18.4079C20.5905 18.7842 20.2837 19.0905 19.9074 19.2822C19.48 19.5 18.921 19.5 17.8031 19.5H6.19691C5.07899 19.5 4.5192 19.5 4.0918 19.2822C3.71547 19.0905 3.40973 18.7842 3.21799 18.4079C3 17.9801 3 17.4203 3 16.3002Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <input v-model="inputEmail" type="email" placeholder="Email Adresa">
        </div>

        <div class="input-password">
          <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 9.5H7.2002C6.08009 9.5 5.51962 9.5 5.0918 9.71799C4.71547 9.90973 4.40973 10.2155 4.21799 10.5918C4 11.0196 4 11.5801 4 12.7002V18.3002C4 19.4203 4 19.9801 4.21799 20.4079C4.40973 20.7842 4.71547 21.0905 5.0918 21.2822C5.51921 21.5 6.07901 21.5 7.19694 21.5L16.8031 21.5C17.921 21.5 18.48 21.5 18.9074 21.2822C19.2837 21.0905 19.5905 20.7842 19.7822 20.4079C20 19.9805 20 19.4215 20 18.3036V12.6969C20 11.579 20 11.0192 19.7822 10.5918C19.5905 10.2155 19.2837 9.90973 18.9074 9.71799C18.4796 9.5 17.9203 9.5 16.8002 9.5H9ZM9 9.5V6.62012C9 4.89699 10.3 3.5 11.9037 3.5C12.7277 3.5 13.4708 3.86879 13.9993 4.46113" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <input v-model="inputPassword" :type="showPassword ? 'text' : 'password'" placeholder="Lozinka" masked="true">

          <svg v-if="!showPassword" @click="showPasswordHandler" class="show-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.5868 13.7788C5.36623 15.5478 8.46953 17.9999 12.0002 17.9999C15.5308 17.9999 18.6335 15.5478 20.413 13.7788C20.8823 13.3123 21.1177 13.0782 21.2671 12.6201C21.3738 12.2933 21.3738 11.7067 21.2671 11.3799C21.1177 10.9218 20.8823 10.6877 20.413 10.2211C18.6335 8.45208 15.5308 6 12.0002 6C8.46953 6 5.36623 8.45208 3.5868 10.2211C3.11714 10.688 2.88229 10.9216 2.7328 11.3799C2.62618 11.7067 2.62618 12.2933 2.7328 12.6201C2.88229 13.0784 3.11714 13.3119 3.5868 13.7788Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M10 12C10 13.1046 10.8954 14 12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>

          <svg v-if="showPassword"  @click="showPasswordHandler" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path id="Vector" d="M3.99989 4L19.9999 20M16.4999 16.7559C15.1473 17.4845 13.6185 17.9999 11.9999 17.9999C8.46924 17.9999 5.36624 15.5478 3.5868 13.7788C3.1171 13.3119 2.88229 13.0784 2.7328 12.6201C2.62619 12.2933 2.62616 11.7066 2.7328 11.3797C2.88233 10.9215 3.11763 10.6875 3.58827 10.2197C4.48515 9.32821 5.71801 8.26359 7.17219 7.42676M19.4999 14.6335C19.8329 14.3405 20.138 14.0523 20.4117 13.7803L20.4146 13.7772C20.8832 13.3114 21.1182 13.0779 21.2674 12.6206C21.374 12.2938 21.3738 11.7068 21.2672 11.38C21.1178 10.9219 20.8827 10.6877 20.4133 10.2211C18.6338 8.45208 15.5305 6 11.9999 6C11.6624 6 11.3288 6.02241 10.9999 6.06448M13.3228 13.5C12.9702 13.8112 12.5071 14 11.9999 14C10.8953 14 9.99989 13.1046 9.99989 12C9.99989 11.4605 10.2135 10.9711 10.5608 10.6113" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </form>

      <button @click=formSubmitHandler class="form-submit btn-primary-active" type="submit">Registruj se.</button>

      <p class="form-login">Imas nalog <RouterLink 
          to="/log-in"
          class="register-link">
          Prijavi se.
        </RouterLink>
      </p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .register-form-container {
    position: relative;
    z-index: 1;
    height: calc(100vh - 160px);
    margin-top: -40px;
    background-image: url('img/auth-bg-img.png');
    background-position: right;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    .form-holder {    
      width: 470px;
      padding: 50px 35px;
      height: auto;
      margin: 0px auto;
      display: flex;
      flex-wrap: wrap;
      gap: 35px;
      border-radius: 24px;
      background: rgba(51, 51, 51, 0.60);
      backdrop-filter: blur(2px);
      .register-form-header {
        flex: 0 0 100%;
        text-align: center;
        color: #FFF;
        font-family: 'Inter';
        font-size: 25px;
        font-style: normal;
        font-weight: 400;
        line-height: 140%; /* 35px */
        text-transform: uppercase;
      }
      .register-form {
        flex: 0 0 100%;
        padding: 20px 0px;
        .input-name, .input-email , .input-password {
          padding: 8px 0px;
          display: flex;
          align-items: center;
          gap: 8px;
          border-bottom: 1px solid var(--FourthLinear, #94A03C);
          svg {
            max-width: 24px;
            height: auto;
            display: block;
          }
          input {
            flex: 1 0 80%;
            background-color: transparent;
            border: none;
            color: rgb(255, 255, 255);
            font-family: 'Inter';
            font-size: 20px;
            font-style: normal;
            font-weight: 400;
            line-height: 140%; /* 28px */
            &::placeholder {
              color: rgba(255, 255, 255, 0.62);
            }
            &:focus {
              outline: none;
            }
          }
        }
        .input-email {
          margin: 32px 0px;
        }
      }
      .form-submit {
        border: none;
        padding: 12px 35px;
        flex: 0 0 100%;
        color: #FFF;
        text-align: center;
        font-family: 'Jost', sans-serif;
        font-size: 18px;
        font-style: normal;
        font-weight: 500;
        line-height: 120%; /* 21.6px */
        border-radius: 8px;

      }
      .form-login {
        text-align: center;
        flex: 0 0 100%;
        color: #FFF;
        font-family: 'Inter';
        font-size: 16px;
        font-style: normal;
        font-weight: 300;
        line-height: 140%; /* 22.4px */
        .register-link {
          color: #FFF;
          font-family: 'Inter';
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          text-decoration-line: underline;
        }
      }
    }
  }
</style>