import Vue from 'vue'

import './rem'
import './icon'
import './component-register'
import './filter-register'
import { keywords } from '~/static/setting/keywords.js'

// seo优化
Vue.prototype.$keywords = keywords
