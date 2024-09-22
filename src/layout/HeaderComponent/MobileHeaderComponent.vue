<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

// Get the current route
const route = useRoute();

const navigationHome = ref('navigationHome');
const navigationStatistics = ref('navigationStatistics');
const navigationFishing = ref('navigationFishing');
const navigationLocation = ref('navigationLocation');
const navigationFish = ref('navigationFish');

// Define the desired stroke color
const activeStrokeColor = '#94A03C';



function setStrokeColor() {
  
  const elements = [navigationHome, navigationStatistics, navigationFishing, navigationLocation, navigationFish];
  elements.forEach(element => {
    if (element.value) {
      element.value.style.stroke = ''; 
    }
  });

  switch (route.name) {
    case 'Home':
      if (navigationHome.value) navigationHome.value.style.stroke = activeStrokeColor;
      break;
    case 'Statistics':
      if (navigationStatistics.value) navigationStatistics.value.style.stroke = activeStrokeColor;
      break;
    case 'Fishing':
      if (navigationFishing.value) navigationFishing.value.style.stroke = activeStrokeColor;
      break;
    case 'Location':
      if (navigationLocation.value) navigationLocation.value.style.stroke = activeStrokeColor;
      break;
    case 'Fishes':
      if (navigationFish.value) navigationFish.value.style.stroke = activeStrokeColor;
      break;
    default:
      break;
  }
}

// Call setStrokeColor on component mount
onMounted(() => {
  setStrokeColor();
});
</script>

<template>
  <div class="mobile-navigation">
    <ul class="container mobile-navigation-holder">
      <li class="mobile-navigation-link">
        <RouterLink class="profile-link" to="/">
          <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path ref="navigationHome" d="M20 17.6435V12.0955C20 11.5612 19.9995 11.2939 19.9346 11.0452C19.877 10.8249 19.7825 10.6164 19.6546 10.428C19.5102 10.2153 19.3096 10.039 18.9074 9.68714L14.1074 5.48714C13.3608 4.83385 12.9875 4.50737 12.5674 4.38313C12.1972 4.27366 11.8026 4.27366 11.4324 4.38313C11.0126 4.50728 10.6398 4.83345 9.89436 5.48575L5.09277 9.68714C4.69064 10.039 4.49004 10.2153 4.3457 10.428C4.21779 10.6164 4.12255 10.8249 4.06497 11.0452C4 11.2939 4 11.5612 4 12.0955V17.6435C4 18.5754 4 19.0411 4.15224 19.4087C4.35523 19.8987 4.74432 20.2885 5.23438 20.4915C5.60192 20.6438 6.06786 20.6438 6.99974 20.6438C7.93163 20.6438 8.39808 20.6438 8.76562 20.4915C9.25568 20.2885 9.64467 19.8988 9.84766 19.4088C9.9999 19.0412 10 18.5753 10 17.6434V16.6434C10 15.5388 10.8954 14.6434 12 14.6434C13.1046 14.6434 14 15.5388 14 16.6434V17.6434C14 18.5753 14 19.0412 14.1522 19.4088C14.3552 19.8988 14.7443 20.2885 15.2344 20.4915C15.6019 20.6438 16.0679 20.6438 16.9997 20.6438C17.9316 20.6438 18.3981 20.6438 18.7656 20.4915C19.2557 20.2885 19.6447 19.8987 19.8477 19.4087C19.9999 19.0411 20 18.5754 20 17.6435Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>

        </RouterLink>
      </li>
      <li class="mobile-navigation-link">
        <RouterLink class="statistics-link" to="/statistics">
          <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path ref="navigationStatistics" d="M3.25 15.6435V17.4433C3.25 18.5634 3.25 19.1231 3.46799 19.5509C3.65973 19.9272 3.96547 20.2338 4.3418 20.4255C4.7692 20.6433 5.32899 20.6433 6.44691 20.6433H21.2502M3.25 15.6435V5.64331M3.25 15.6435L7.1034 12.4324L7.10658 12.4298C7.80366 11.8489 8.15288 11.5579 8.53154 11.4397C8.97887 11.3001 9.46071 11.3221 9.89355 11.5017C10.2605 11.6539 10.5823 11.9757 11.2258 12.6192L11.2322 12.6257C11.8857 13.2792 12.2133 13.6068 12.5862 13.7587C13.0274 13.9384 13.5185 13.9539 13.9707 13.8039C14.3541 13.6767 14.7042 13.3709 15.4043 12.7583L21.25 7.64331" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </RouterLink>
      </li>
      <li class="mobile-navigation-link middle-element">
        <RouterLink class="location-link" to="/fishing">
          <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path ref="navigationFishing" d="M7.5 14.6433H14.5M14.5 14.6433H21.5M14.5 14.6433V21.6433M14.5 14.6433V7.64331" stroke="white" stroke-width="2.33333" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>

        </RouterLink>
      </li>
      <li class="mobile-navigation-link">
        <RouterLink class="location-link" to="/location">
          <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path ref="navigationLocation" d="M21.7501 3.64331L15.2501 21.6433C15.2062 21.7391 15.1358 21.8202 15.0471 21.8771C14.9585 21.9339 14.8554 21.9642 14.7501 21.9642C14.6448 21.9642 14.5417 21.9339 14.453 21.8771C14.3644 21.8202 14.2939 21.7391 14.2501 21.6433L10.7501 14.6433L3.75007 11.1433C3.65433 11.0994 3.5732 11.029 3.51632 10.9404C3.45944 10.8517 3.4292 10.7486 3.4292 10.6433C3.4292 10.538 3.45944 10.4349 3.51632 10.3463C3.5732 10.2576 3.65433 10.1872 3.75007 10.1433L21.7501 3.64331Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </RouterLink>
      </li>
      <li class="mobile-navigation-link">
        <RouterLink class="location-link" to="/fishes">
          <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path ref="navigationFish" d="M15.7556 5.76257C15.7556 5.98508 15.6897 6.20259 15.5661 6.38759C15.4424 6.5726 15.2667 6.71679 15.0612 6.80194C14.8556 6.88709 14.6294 6.90937 14.4112 6.86596C14.1929 6.82255 13.9925 6.7154 13.8352 6.55807C13.6778 6.40073 13.5707 6.20028 13.5273 5.98205C13.4839 5.76382 13.5061 5.53762 13.5913 5.33206C13.6764 5.12649 13.8206 4.95079 14.0056 4.82717C14.1906 4.70355 14.4081 4.63757 14.6306 4.63757C14.929 4.63757 15.2152 4.7561 15.4261 4.96708C15.6371 5.17806 15.7556 5.46421 15.7556 5.76257ZM19.4935 13.3563C17.5472 15.8285 14.445 17.1757 10.2675 17.366L8.20502 22.1866C8.14728 22.3225 8.05074 22.4382 7.9275 22.5194C7.80427 22.6007 7.6598 22.6437 7.51221 22.6432H7.4644C7.30985 22.6335 7.16209 22.5762 7.0414 22.4792C6.92071 22.3822 6.83301 22.2502 6.79034 22.1013L5.4019 17.2404L0.543775 15.8491C0.394498 15.8072 0.261885 15.72 0.164188 15.5996C0.0664908 15.4792 0.00851253 15.3315 -0.00176737 15.1768C-0.0120473 15.0221 0.0258766 14.868 0.106785 14.7357C0.187693 14.6035 0.307607 14.4995 0.450025 14.4382L5.27159 12.3757C5.45909 8.19726 6.81002 5.09507 9.28315 3.14976C13.3341 -0.037738 19.1185 1.00945 20.2369 1.25132C20.5187 1.31221 20.7769 1.45299 20.9808 1.65683C21.1846 1.86067 21.3254 2.11893 21.3863 2.4007C21.6338 3.5182 22.6819 9.3082 19.4935 13.3619V13.3563ZM15.15 14.8254C14.283 14.4951 13.5279 13.9249 12.9731 13.1813C12.4183 12.4377 12.0866 11.5515 12.0169 10.6263C11.0919 10.5567 10.2059 10.2252 9.46249 9.67054C8.71904 9.11587 8.14891 8.36096 7.81877 7.49414C7.16252 8.98101 6.81002 10.7857 6.7594 12.896C6.7559 13.0397 6.71118 13.1794 6.63057 13.2984C6.54996 13.4174 6.43685 13.5107 6.30471 13.5673L2.98502 14.9876L6.21565 15.9129C6.33808 15.9479 6.44957 16.0136 6.53962 16.1036C6.62966 16.1937 6.6953 16.3051 6.73034 16.4276L7.65284 19.6582L9.07596 16.3385C9.13271 16.2059 9.22648 16.0925 9.34603 16.0119C9.46558 15.9313 9.60585 15.8868 9.75002 15.8838C11.8575 15.8341 13.6622 15.4798 15.15 14.8254ZM19.9247 2.71851C18.9216 2.50101 13.7372 1.55695 10.215 4.32914C9.77108 4.67902 9.36763 5.07743 9.01221 5.51695C8.97623 6.00702 9.04769 6.49903 9.22161 6.95861C9.39552 7.4182 9.6677 7.83426 10.0191 8.17772C10.3705 8.52119 10.7927 8.78378 11.2561 8.94714C11.7196 9.1105 12.2131 9.17069 12.7022 9.12351C12.8122 9.11308 12.9231 9.12706 13.027 9.16445C13.1309 9.20184 13.2253 9.26173 13.3034 9.33983C13.3815 9.41793 13.4414 9.51231 13.4788 9.61623C13.5162 9.72016 13.5301 9.83106 13.5197 9.94101C13.4725 10.4303 13.5327 10.924 13.6962 11.3876C13.8597 11.8512 14.1224 12.2734 14.4661 12.6249C14.8098 12.9763 15.2261 13.2485 15.6859 13.4222C16.1457 13.596 16.6379 13.6673 17.1281 13.631C17.567 13.2762 17.9648 12.8734 18.3141 12.4301C21.0863 8.90789 20.1422 3.72257 19.9247 2.71851Z" fill="white"/>
          </svg>
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
 .mobile-navigation {
    display: none;
    z-index: 10;
    position: fixed;
    bottom: 24px;
    width: 100%;
    .mobile-navigation-holder {
      border: 2px solid #94A03C;
      background: #303030;
      list-style: none;
      padding: 8px 16px;
      border-radius: 32px;
      display: flex;
      align-items: center;
      justify-content: space-between;  
      .mobile-navigation-link {
          a {
          display: block;
          padding: 9.5px 11.5px;
          }
      }
      .middle-element {
        border-radius: 18.667px;
        background: linear-gradient(90deg, #94A03C 0%, #1E2913 103.55%);
      }
    }
    @media (max-width: 1280px) {
      display: flex;
    }
 }
</style>