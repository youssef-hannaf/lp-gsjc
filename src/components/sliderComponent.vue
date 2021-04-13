<template>
  <div>
      <div class="custom-progress progress" :data-total="this.getCurrentStep">
          <div class="progress-bar" :style="'--width:' + getProgress() + '%'"></div>
          <span :class="'slide-point ' + getActiveClass(1) ">1</span>
          <span :class="'slide-point ' + getActiveClass(2) ">2</span>
          <span :class="'slide-point ' + getActiveClass(3) ">3</span>
      </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  data(){
    return {
      property: 'height',
    }
  },
  created(){
    // window.addEventListener('resize', this.windowResizeHandler);
  },
  computed: {
    ...mapGetters[("getCurrentStep","getTotalStep")],
    getCurrentStep(){
             return this.$store.getters.getCurrentStep
           }
  },
  methods: {
    getActiveClass(step){
      return step <= this.getCurrentStep ? 'active' : ''
    },
    getProgress(){
      if(this.getCurrentStep == 3)
        return 100;
      else if(this.getCurrentStep == 2)
        return 75;
      else
      return 25;
    },
    windowResizeHandler: function(){
      if(window.innerWidth > 768){
        this.property = 'height';
      }
      else{
        this.property = 'width';

      }
    }
  }
}
</script>

<style>

</style>