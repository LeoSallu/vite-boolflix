import { createApp } from 'vue'
import './assets-styles/main.scss'
import App from './App.vue'
import * as bootstrap from 'bootstrap';
import "@fontsource/montserrat";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as faaStar} from '@fortawesome/free-regular-svg-icons';
library.add(faUserSecret,faStar,faaStar)
createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
