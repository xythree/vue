


<template>
	
	<div>
		<div @click="aa">vuex: {{val}}</div>	
		<input type="text" v-model="a" />
	</div>

</template>


<script>
//import store from "../../vuex/store"
//import { getCount } from "../../vuex/getters"
//import * as actions from "../../vuex/actions"


export default {
	data() {
		return {
	
		}
	},
	computed: {
		val() {
			return this.a
		},
		a() {
			return this.$store.getters.doneTodos
		}
	},
	methods: {
		aa() {			
			this.$store.dispatch("add")		
		}
	}
}

</script>















