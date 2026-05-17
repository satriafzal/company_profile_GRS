import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'aos/dist/aos.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

const app = createApp(App)

// initialize aos
AOS.init({
    duration : 1000.,
    once: true,
    offset: 100
})

app.use(router)

app.mount('#app')
