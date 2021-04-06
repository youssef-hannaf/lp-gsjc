/**
 * Created by User-TNC on 19/03/2021.
 */
 import Vue from "vue"
 import Vuex from "vuex"
 
 Vue.use(Vuex);
 
 const store = new Vuex.Store({
     state:{
         stepCounter:1,
         parents: [],
         stepInfo:1,
         TotalSteps:3,
         confirmed:false
     },
    
     mutations:{
        addParent (state, data) {
            // mutate state
            if(state.parents.length < 2)
                console.log(data);
                state.parents.push(data);
          },
         nextStep(state){
            if( 1 + state.stepCounter <= state.TotalSteps ){
                state.stepCounter++;
                //state.vlidatedStep = false;
          }
         },
         previousStep(state){
             state.stepCounter--;
         },
         deleteLastParent(state) {
            state.parents.pop();
          },
          setConfirmed(state, status) {
            state.confirmed = status;
    },
       
 
     },
     getters:{
        getParents(state) {
            return state.parents;
          },
        getConfirmed(state) {
            return state.confirmed;
          },
     }
    
 });
 
 export default store;
 
 