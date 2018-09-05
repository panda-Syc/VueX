import Vue from "vue"
import Vuex from "vuex"
import  * as types from "./mutation-type.js"
Vue.use( Vuex );

const store=new Vuex.Store({
	state:{
		todes:[
			{ id:1,text:"我是one",deno:true },
			{ id:2,text:"我说two",deno:false }
		],
		count:0,
		show:true,
		ttt:[],
	},
	getters:{
		one:state=>{
			return state.todes.filter( tood=>tood.deno )
		},
		//可以通过在传id参数的方式
		two:( state )=>( id )=>{
			return state.todes.find( tood=>tood.id===id )
		},
		tree:state=>{
			return state.count
		},
		fore:state=>{
			return state.show
		},
		ttt:state=>{
			return state.ttt
		}
	},
	actions:{
		sky( { commit,state },{ index,arr } ){
			return new Promise((resolve,reject)=>{
				setTimeout( ()=>{
					commit( types.SET_FULL_SCREEN,index  )
					commit( "aaa",arr  )
					resolve(1)
				},1000 )
			}).then( (data)=>{
				alert(data);
			} )

		}
	},
	mutations:{
		[ types.SOME_MUTATION ]( state ){
			state.count++
		},
		[ types.SET_PLAYING_STATE ]( state,flag ){
			state.show=flag
		},

		[ types.SET_FULL_SCREEN ]( state,index ){
			state.count=index
		},
		aaa( state,arr ){
			state.ttt=arr
		}
	}

});

export default store;