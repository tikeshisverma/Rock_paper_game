import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;




import VueConfetti from 'vue-confetti'
 
Vue.use(VueConfetti)

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret , faHandRock, faHandPaper, faHandScissors, faHandLizard, faHandSpock, faSync} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
 
library.add(faUserSecret, faHandRock, faHandPaper, faHandScissors, faHandLizard, faHandSpock, faSync )
Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
  render: h => h(App)
}).$mount("#app");
