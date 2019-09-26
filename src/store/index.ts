import Vue from 'vue'
import Vuex,{StoreOptions} from 'vuex'
import state from './state';
import mutations from './mutations';
import actions from './actions';
import getters from './getters';

Vue.use(Vuex)

const store:StoreOptions<any> = {
    state,
	mutations,
	actions,
	getters,
}

export default new Vuex.Store<any>(store)

