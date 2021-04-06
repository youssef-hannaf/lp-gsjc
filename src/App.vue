<template>
  <div id="app">
    <parent v-if="stepCounter===1"/>
    <enfant v-if="stepCounter===2"/>
    <validation v-if="stepCounter===3"/>
    
    
  </div>
</template>

<script>

import parent from './components/parent.vue'
import enfant from './components/enfant.vue'
import validation from './components/validation.vue'


import "./style.scss"

export default {
  loading: true,
   name: 'App',
  components: {
    parent,
   enfant,
   validation,
  
  },
   computed:{
        stepCounter(){
          return this.$store.state.stepCounter
        }                                                  
  },
}
</script>

<style scoped>
img{
  width: 100%;
  vertical-align: middle
}
</style>
