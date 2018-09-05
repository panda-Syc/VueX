<template>
  <div id="app">
      <div>{{ mesg }}</div>
      <div>{{one}}</div>
      <div>{{ two(2) }}</div>
      <div><input type="button" value="增加" @click="filster"></div>
      <div>{{tree}}</div>
      <div><input type="button" value="显示隐藏" @click="list"></div>
      <div class="ddd" v-show="fore">123456</div>
      <div><input type="button" value="actions" @click="setTimeout"></div>
      <div>{{ttt}}</div>
  </div>
</template>

<script>
import { mapGetters,mapMutations,mapActions  } from "vuex"
export default {
  data(){
    return{
      mesg:"welcome to vueX"
    }
  },
  computed:{
    ...mapGetters([
        "one",
        "two",
        "tree",
        "fore",
        "ttt"
      ]),
/*    com(){
      return this.$store.getters.one
    }*/
  },
  methods:{
    ...mapMutations({
      filster:"SOME_MUTATION",
      show:"SET_PLAYING_STATE",
      hhh:"aaa",
    }),
    list(){
      this.show( !this.fore )
    },
    ...mapActions({
      selectPlay:"sky"
    }),
    setTimeout(){
      this.selectPlay({
        index:10,
        arr:[1,23,4,5,6,78]
      })
    }
  }

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.ddd{
  width: 200px;
  height: 200px;
  background-color: red;
  margin: 0 auto;
}
</style>
