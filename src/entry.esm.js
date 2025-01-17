
// Import vue components
import * as components from '@/lib-components/index';
import VueCookies from "vue-cookies";
// This is the way to have the toaster
import { ToastPlugin } from 'bootstrap-vue';

// install function executed by Vue.use()
const install = function installVueSections(Vue,options) {
  if(options == undefined)
    throw new Error("vue-sections: please define your options -> Vue.use(vueSections, YOUR OPTIONS)")
    
  if(!options.hasOwnProperty('projectId'))
    throw new Error("vue-sections: You should define your projectId")

  Object.entries(components).forEach(([componentName, component]) => {
    Vue.component(componentName, component);
  });

  Vue.use(VueCookies);
  Vue.use(ToastPlugin);

  Vue.prototype.$formatText = (text, sep = " ") => {
    const result = text.replace(/([A-Z])/g, `${sep}$1`);
    const finalResult = result.charAt(0).toUpperCase() + result.slice(1);
    return finalResult;
  };
  
  Vue.prototype.$sections =  {
    projectId: options.projectId
  }
};

// Create module definition for Vue.use()
export default install;

// To allow individual component use, export components
// each can be registered via Vue.component()
export * from '@/lib-components/index';
