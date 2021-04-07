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
              <div id="main_right_header">
                  <formHeader
                    title="Informations de l'enfant"
                    subtitle="Renseignez ce formulaire afin que notre département des admissions prenne contact avec vous dans les plus brefs délais"
                    />

                    <enfantInfo v-for="(item, index) in getChildrens" :key="index" :enfant="item"/>

              <div id="main_container">
                <div class="d-flex justify-content-center align-items-center">
                  <div class="p-2 genre"><label for="">Genre</label></div>
                  <div class="p-2"><input id="radio1" type="radio" value="fille" v-model="enfant.sexe"></div>
                  <div class="p-2"><label for="radio1">Fille</label></div>
                  <div class="p-2"><input id="radio2" type="radio" value="garcon" v-model="enfant.sexe"></div>
                  <div class="p-2"><label for="radio2">Garcon</label></div>
                </div>
              
                  <div class="row">
                      <div class="col-sm-6">
                        <b-form-group>
                          <b-input id="nom" type="text" placeholder="Nom de l'enfant*" v-model="enfant.nom"> </b-input>
                        </b-form-group>
                      </div>
                      <div class="col-sm-6">
                         <b-form-group>
                          <b-input id="prenom" type="text" placeholder="Prenom de l'enfant*" v-model="enfant.prenom"></b-input>
                        </b-form-group>
                      </div>
                  </div>
                  <div class="row">
                      <div class="col-sm-6">
                        <b-form-group>
                          <b-input id="naissance" type="text" placeholder="Année de naissance*" v-model="enfant.naissance"></b-input>
                        </b-form-group>
                      </div>
                      <div class="col-sm-6">
                        <b-form-group>
                          <b-input id="classe" type="text" placeholder="Nom de l'établissement actuel*" v-model="enfant.classe"></b-input>
                        </b-form-group>
                      </div>
                  </div>
                 
                  <div class="row">
                      <div class="col-sm-12">
                        <b-form-group>
                          <b-input id="etablissement" type="text" placeholder="Nom de l'enfant*" v-model="enfant.etablissement"></b-input>
                        </b-form-group>
                      </div>
                  </div>
                  <p class="procedure">Avez-vous entamé la procédure de pré-inscription sur le site du SCAC ?</p><br>
                    <div class="d-flex justify-content-center align-items-center">
                     
                      <div class="p-2"><input id="radio1" type="radio" value="oui" v-model="enfant.poursuivre"></div>
                      <div class="p-2"><label for="radio1">oui</label></div>
                      <div class="p-2"><input id="radio2" type="radio" value="non" v-model="enfant.poursuivre"></div>
                      <div class="p-2"><label for="radio2">non</label></div>
                    
                    </div>
                   <div class="mb-4">
                    <button  class="btn-add-parent" v-if="IsAllowToAddEnfant" :disabled="!Validated" @click="addNewEnfant">Ajouter un enfant</button>
                  </div>
                  
                  <div class="mb-4">
                      <b-form-group>
                          <b-button v-on:click="prevStep" type="is-primary">Précédent</b-button>
                          <b-button type="is-light" :disabled="!Validated" v-on:click="nexStep">Envoyer</b-button>
                      </b-form-group>
                   </div>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    </div>

    
</template>

<script>
import {mapMutations,mapGetters} from "vuex";
import formHeader from "./formHeader.vue"
import enfantInfo from "./enfantInfo.vue"
export default {
  name: 'enfant',
  components:{
    formHeader,
    enfantInfo
  },
  data(){
      return {
         // showWeekNumber: false,
           // locale: 'fr-FR',
             enfant: {
                sexe: null,
                nom: null,
                prenom: null,
                naissance: null,
                classe: null,
                etablissement: null,
                poursuivre: null,
            }
      }  
    },
     mounted(){
        if(this.getChildrens.length > 0){
            this.enfant = { ...this.getChildrens.slice(-1).pop() };
            //this.deleteLastChild();
        }
    },
   methods: {
        ...mapMutations(["nextStep","prevStep","resetChildren","addChild","deleteChild","deleteLastChild"]),
        addNewEnfant(){
            this.addChild({...this.enfant});
            this.reset();
        }, 
        reset(){
            this.enfant.sexe = '';
            this.enfant.nom = '';
            this.enfant.prenom = '';
            this.enfant.naissance = null;
            this.enfant.classe = '';
            this.enfant.etablissement = '';
            this.enfant.poursuivre = '';
        },
       
        nexStep(){
            const errors = this.validate();
            if(Object.keys(errors).length == 0){
                this.addChild({...this.enfant});
                this.nextStep();
            }

        },
        validate(){

            let errors = {};

            if(!this.enfant.sexe){
                errors['genre'] = 'Genre est obligatoire';
            }

            if(!this.enfant.nom){
                errors['nom'] = 'Nom est obligatoire';
            }
            
            
            if(!this.enfant.prenom){
                errors['prenom'] = 'Prenom est obligatoire';
            }
            
            if(!this.enfant.naissance){
                errors['naissance'] = 'Date de naissance est obligatoire';
            }
            
            if(!this.enfant.classe){
                errors['classe'] = 'Classe d\'enfant est obligatoire';
            }
            
            if(!this.enfant.etablissement){
                errors['etablissement'] = 'Etablissement est obligatoire';
            }
            
            if(!this.enfant.poursuivre){
                errors['poursuiviInscription'] = 'Obligatoire';
            }
            

            return errors;

        },
    },
   
   computed: {
        ...mapGetters(["getChildrens"]),
        Validated: function(){
            let errors = this.validate();
            return Object.keys(errors).length === 0;
        },

        IsAllowToAddEnfant: function(){
            return this.getChildrens.length < 5;
        },
    },
}
</script>