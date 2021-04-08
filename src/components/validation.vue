<template>
    
     <div id="main">

      <div class="container">
        <div class="row">
          <div class="col-sm-4">
            <div id="main_left">
              <picture>
              <img src="../assets/Slider Lp Inscription 2.png" alt="GSJC">
            </picture>
            </div>
          </div>
          <div class="col-sm-8">
              <div id="main_right">
                   <div id="main_container" class="validation">
                     <formHeader
                    title="Type d'action"
                    subtitle="Renseignez ce formulaire afin que notre département des admissions prenne contact avec vous dans les plus brefs délais"
                    />
                  <div class="row">
                      <div class="col-sm-12">
                        <b-form-group class="action-type-group">
                          <br>
                            <select :expanded="true" v-model="selected" class="aw-select" placeholder="Vous préférez etre contacté">
                                    <option
                                        v-for="(option, index) in options"
                                        :value="option.value"
                                        :key="index">
                                        {{ option.text }}
                                    </option>
                                </select>
                          </b-form-group>

                      </div>
                  </div>
                  <div class="admission">
                      <img src="../assets/admission.png" alt="admission">
                      <h2>Admission</h2>
                      <p class="p1">Saisie des demandes d’admissions uniquement en ligne sur <a href="http://www.efmaroc.org">www.efmaroc.org
                      <p class="p0"></p></a></p>
                      <p class="p2">à partir du jeudi 04 mars 2021</p>

                  </div>
                  
                 
                  
                  <div class="mb-4">
                     <b-button @click="prevStep" pill variant="primary" class="precedent">précédent</b-button>
                      <b-button  pill variant="primary" class="suivant" :disabled="!Validated" v-on:click="nextStep" v-b-modal.modal-1>Envoyer</b-button>
                   </div>
              
              </div>
              </div>
             
            </div>
          </div>
        </div>

        <!-- <b-modal id="modal-1" title="BootstrapVue">
          <p class="my-4">Hello from modal!</p>
        </b-modal>-->

        <b-modal
            v-model="isComponentModalActive"
            has-modal-card
            trap-focus
            :destroy-on-hide="false"
            aria-role="dialog"
            aria-label="Example Modal"
            aria-modal>
            <template #default="props">
                <confirm @close="props.close"></confirm>
            </template>
        </b-modal>
      </div>
</template>

<script>
import {mapMutations} from "vuex"
import formHeader from "./formHeader"
import confirm from "./confirm.vue"
export default {
  name: 'validation',
  components:{
    formHeader,
    confirm
  },
   data(){
        return{
            selected: '',
            isComponentModalActive: false,
            options: [
                {value: '', text: 'Vous préférez étre contacté'},
                {value: 'A', text: 'Par Mail'},
                {value: 'B', text: 'Par Téléphone'}
            ]
        }
    },
     computed: {
        Validated: function(){
            let errors = this.validate();
            return Object.keys(errors).length === 0;
        },
    },
   methods:{
            ...mapMutations(["nextStep","prevStep","setTypeAction"]),
            validate(){

            let errors = {};

            if(!this.selected){
                errors['tpyeAction'] = 'Type d\'action est obligatoire';
            }
            

            return errors;

        },
        nextStep(){
            const errors = this.validate();
            if(Object.keys(errors).length == 0){
                this.isComponentModalActive = true;
                this.setTypeAction(this.selected);
            }

        },
           
        }
}
</script>