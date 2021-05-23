import { createApp } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCopy, faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import "intro.js/minified/introjs.min.css"
import "./assets/styles.css"

import App from './components/App.vue'
import './serviceworker/registerServiceWorker'
import store from './store/store'

library.add(faCopy, faQuestionCircle)

createApp(App)
    .component("font-awesome-icon", FontAwesomeIcon)
    .use(store)
    .mount('#app')    