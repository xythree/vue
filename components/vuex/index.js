
import Vue from "vue"
import Vuex from "vuex"
import * as state from "./store"
import * as actions from "./actions"
import * as getters from "./getters"


Vue.use(Vuex)



export default new Vuex.Store({
	mutations: {
		ADD(state, mutation) {
			state.count += mutation.amount
		},
		MIN(state, amount) {
			state.count -= amount
		},
		getCalendarVal(state, mutation) {			
			state.calendarVal = mutation.calendarVal
		}
	},
	state,
	actions,
	getters
})










