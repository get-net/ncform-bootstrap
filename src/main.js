import Vue from "vue";
import vueNcform from "@ncform/ncform";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import newComps from "./components";
// import axios from "axios";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import App from "./App.vue";

// Vue.use(Element);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
// Vue.use(vueNcform, { extComponents: ncformStdComps /*lang: 'zh-cn'*/ });
Vue.use(vueNcform, { extComponents: newComps, lang: 'ru' });
// Vue.use(vueNcform);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
