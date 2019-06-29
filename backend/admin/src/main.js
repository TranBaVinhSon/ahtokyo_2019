import Vue from 'vue'
import App from './App'
import router from "./router/index"
import VueFormGenerator from 'vue-form-generator'
import 'vue-form-generator/dist/vfg-core.css'
import VueApollo from 'vue-apollo'
import AWSAppSyncClient from 'aws-appsync'
import PaperDashboard from "./plugins/paperDashboard"
import "vue-notifyjs/themes/default.css"
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const config = {
	url: 'https://yhiw2i646zb6llkjiumnytu3qq.appsync-api.ap-northeast-1.amazonaws.com/graphql',
	region: 'us-east-1',
	auth: {
		type: 'API_KEY',
		apiKey: 'da2-475dwtdg6ra6niqoh7vdeni35q'
	},
	disableOffline: true
}

const options = {
 	defaultOptions: {
  		watchQuery: {
    		fetchPolicy: 'cache-and-network'
  		}
 	}
}

const client = new AWSAppSyncClient(config, options)
const appsyncProvider = new VueApollo({
	defaultClient: client
})

library.add(faUserSecret)
Vue.use(VueFormGenerator)
Vue.use(VueApollo)
Vue.use(PaperDashboard)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
	router,
	render: h => h(App),
	apolloProvider: appsyncProvider
}).$mount('#app')
