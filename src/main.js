import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


createApp(App).use(router).mount('#app') //kreiraj aplikaciju, sa glavnom komponentom App,
// koristi se ruter i ugradi u div sa id app na index.html