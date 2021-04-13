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
         enfants: [],
         stepInfo:1,
         TotalSteps:3,
         vlidatedStep: false,
         confirmed:false,
         typeAction: null,
     },
    
     mutations:{
        addParent (state, data) {
            // mutate state
            if(state.parents.length < 2)
                console.log(data);
                state.parents.push(data);
          },
          deleteParent(state, parent) {
            let index = state.parents.indexOf(parent);
            state.parents.splice(index, 1);
          },
          deleteEnfant(state, enfant) {
            let index = state.enfants.indexOf(enfant);
            state.enfants.splice(index, 1);
          },
         nextStep(state){
            if( 1 + state.stepCounter <= state.TotalSteps ){
                state.stepCounter++;
                state.vlidatedStep = false;
          }
         },
         prevStep(state) {
            if( state.stepCounter - 1 > 0 ){
                  state.stepCounter--;
                  state.vlidatedStep = true;
            }
          },
         deleteLastParent(state) {
            state.parents.pop();
          },
          setConfirmed(state, status) {
            state.confirmed = status;
            },
        resetChildren(state) {
            state.childrens = [];
          },
          
          addChild(state, data) {
            if(state.enfants.length < 6)
              state.enfants.push(data);
          },
          
          deleteChild(state, child) {
              let index = state.enfants.indexOf(child);
              state.enfants.splice(index, 1);
          },
          deleteLastChild(state) {
            state.enfants.pop();
          },
          setTypeAction(state, type) {
            state.typeAction = type;
    }
 
     },
     getters:{
          getCurrentStep(state) {
            return state.stepCounter;
          },
          getTotalStep(state) {
            return state.TotalSteps;
          },
          getConfirmed(state) {
            return state.confirmed;
          },
          getVlidatedStep(state) {
            return state.vlidatedStep;
          },
          
          getParents(state) {
            return state.parents;
          },
      
          getChildrens(state) {
            return state.enfants;
          },
     }
    
 });
 
 export default store;
 
 