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
               <!--<sliderComponent/>-->
              <div id="main_right_header">
                 <formHeader
                    title="Coordonnées des parents"
                    subtitle="Renseignez ce formulaire afin que notre département des admissions prenne contact avec vous dans les plus brefs délais"
                 />
              <parentInfo v-for="(item, index) in getParents" :key="index" :parent="item"/>
              <div id="main_container">
                <div class="d-flex justify-content-center align-items-center">
                  <b-form-group class="civilite-group">
                    <div class="p-2 civilite"><label>Civilité :</label></div>
                    <div class="p-2"><b-form-radio class="ml-5" id="radio1" type="is-info" value="m" v-model="parent.civilite"></b-form-radio></div>
                     <div class="p-2"><label for="radio1">M.</label></div>
                    <div class="p-2"><b-form-radio class="ml-5" type="is-info" id="radio2" value="mme" v-model="parent.civilite"></b-form-radio></div>
                    <div class="p-2"><label for="radio2">Mme.</label></div>
                  </b-form-group>
                </div>
               
                  <div class="row">
                      <div class="col-sm-6">
                          <b-form-group>
                              <b-input id="nom" type="text" placeholder="Nom*" v-model="parent.nom"></b-input>
                           </b-form-group>
                        <span class="error-mssg" v-if="!!this.errors.nom">{{ this.errors.nom  }}</span>
                      </div>
                      <div class="col-sm-6">
                        <b-form-group>
                         <b-input id="prenom" type="text" placeholder="Prénom*" v-model="parent.prenom"></b-input>
                         </b-form-group>
                      </div>
                  </div>
                  <div class="row">
                      <div class="col-sm-6">
                        <b-form-group>
                          <b-select :expanded="true" v-model="parent.pays"  class="select-country aw-select" placeholder="Votre Pays">
                            <option v-for="(country, index) in countries" 
                                          :value="country.code"
                                          :key="index"
                            >
                                {{country.name}}
                            </option>
                          </b-select>
                        </b-form-group>
                      </div>
                      <div class="col-sm-6">
                        <b-form-group>
                           <b-input id="ville" type="text" placeholder="Ville*" v-model="parent.ville"></b-input>
                        </b-form-group>
                      </div>
                  </div>
                  <div class="row">
                      <div class="col-sm-6">
                        <b-form-group class="phone-wrapper">
                            <b-input class="phones-code" readonly v-model="parent.phoneCode" placeholder="+212" type="text" />
                            <b-input id="telephone" class="phone-number" type="text" placeholder="Votre Tel. *" v-model="parent.telephone"></b-input>
                        </b-form-group>
                      </div>
                      <div class="col-sm-6">
                          <b-form-group>
                            <b-input id="email" type="text" placeholder="Email*" v-model="parent.email"></b-input>
                         </b-form-group>
                      </div>
                  </div>
                  <div class="row">
                      <div class="col-sm-12">
                        <b-form-group>
                            <b-input id="profession" type="text" placeholder="Votre profession" v-model="parent.profession"></b-input>
                        </b-form-group>
                      </div>
                  </div>
                  <div class="mb-4">
                    <button  class="btn-add-parent" v-if="IsAllowToAddParent" :disabled="!Validated" @click="addNewParent">Ajouter un parent / tuteur</button>
                  </div>
                 <div class="mb-4 loi">
                    <b-form-group class="usage-confirmed mb-0 ">
                      <div class="c-radio">
                        <b-checkbox
                            id="usage-confirmed"
                            v-model="confirmed"
                            name="usage-confirmed"
                            type="is-warning"
                            >
                             <p class="droit">Conformément à la loi 09-08 vous disposer d'un droit d'accès, de rectification et d'opposition au traitement de vos données personnelles. Ce Traitement à été autorisé par la commision nationale de protection de dennées personelles(CNDP).</p>
                        </b-checkbox>
                      </div> 
                    </b-form-group>
                 </div> 
                   <div class="mb-4">
                     <b-button :disabled="!Validated || !confirmed" @click="nexStep"  pill variant="primary" class="jevalide">{{buttonText}}</b-button>
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
//console.log(getParents);
//console.log(parent.pays)
import {mapMutations,mapGetters} from "vuex";
import formHeader from "./formHeader"
//import sliderComponent from '@/components/sliderComponent.vue'
import parentInfo from './parentInfo.vue'
import {countries} from "../static/countries"
import { phones } from '../static/phones';
export default {
  name: 'parent',
      components: {
        parentInfo,
        formHeader,
       // sliderComponent
    
  }
  ,
   data:function(){
    return{
      /*options: [
                {value: '', text: 'Votre pays'},
                {value: 'A', text: 'maroc'},
                {value: 'B', text: 'Algerie'},
                {value: 'c', text: 'France'},
                {value: 'D', text: 'Espagne'}

            ],*/
        errors: {},
        confirmed:false,
        countries: countries,
        //option:"",
        parent:{
          civilite:null,
          nom:null,
          prenom:null,
          pays:"",
          ville:null,
          telephone:null,
          phoneCode:null,
          email:null,
          profession:null,},
        
        
    }
    

  },
   mounted(){
        if(this.getParents && this.getParents.length > 0){
            this.parent = { ...this.getParents.slice(-1).pop() };
            this.deleteLastParent();
        }

        this.confirmed = this.getConfirmed;

    }
  ,
   methods:{
            ...mapMutations(["nextStep","addParent","setConfirmed","deleteLastParent"]),

          addNewParent(){
          this.addParent({...this.parent});
          this.reset();
           }, 
            reset(){
                this.parent.nom = '';
                this.parent.prenom = '';
                this.parent.pays = '';
                this.parent.ville = '';
                this.parent.profession = '';
                this.parent.telephone = '';
                this.parent.phoneCode = '';
                this.parent.email = '';
                this.parent.civilite = '';
            },
             nexStep(){
              const errors = this.validate();
              if(Object.keys(errors).length == 0){
                  this.addParent({...this.parent});
                  this.nextStep();
            }},
             validate(){

            let errors = {};

            if(!this.parent.civilite){
                errors['civilite'] = 'Nom est obligatoire';
            }
            
            if(!this.parent.nom){
                errors['nom'] = 'Nom est obligatoire';
            }
            
            if(!this.parent.prenom){
                errors['prenom'] = 'Prenom est obligatoire';
            }
            
            if(!this.parent.pays){
                errors['pays'] = 'Pays est obligatoire';
            }
            
            if(!this.parent.ville){
                errors['ville'] = 'Ville est obligatoire';
            }
            
            if(!this.parent.profession){
                errors['profession'] = 'Profession est obligatoire';
            }
            
            if(!this.parent.telephone){
                errors['telephone'] = 'Tel est obligatoire';
            }
            
            if(!this.parent.email){
                errors['email'] = 'Email Invalide';
            }

            return errors;

        }
            
            
           /* addParentHandler(){
              // if(this.validate() == false){
              //   alert('errors');
              // }else{
                
              //   }
                this.addParent({
                  civilite: this.parent.civilite,
                  nom: this.parent.nom,
                  prenom: this.parent.prenom,
                  pays: this.parent.pays,
                  ville: this.parent.ville,
                  telephone: this.parent.telephone,
                  email: this.parent.email,
                  profession: this.parent.profession,
                })
            },*/
            
           /* validate(){
              this.errors = {};
              if(!this.civilite){
                  this.errors['civilite'] = 'La civilite est obligatoire!';
              }
              if(!this.nom){
                  this.errors['nom'] = 'Le nom est obligatoire!';
              }
              
              if(!this.prenom){
                this.errors['prenom'] = 'Le prenom est obligatoire!';
              }
              if(!this.pays){
                this.errors['pays'] = 'Le pays est obligatoire!';
              }
              if(!this.ville){
                this.errors['ville'] = 'La ville est obligatoire!';
              }
              if(!this.telephone){
                this.errors['telephone'] = 'Le telephone est obligatoire!';
              }
              if(!this.email){
                this.errors['email'] = 'L email est obligatoire!';
              }

              return Object.keys(this.errors).length == 0;
            }*/
           
        },
       watch: {
        'parent.paye': function(newVal,){
            let phoneCode = phones.find(x => x.code  == newVal);
            if(phoneCode){
                this.parent.phoneCode = phoneCode.dial_code;
            }
        },

        confirmed : function(newVal,){
            this.setConfirmed(newVal);
        }
        },
       computed:{
        /*parents(){
          return this.$store.state.parents
        },*/
         ...mapGetters(["getParents","getConfirmed"]),
           getParents(){
             return this.$store.getters.getParents
           }
        ,
       /* Validated(){
          return !!this.parent.civilite 
                && !!this.parent.nom 
                && !!this.parent.prenom 
                && this.parent.pays != '' 
                && this.parent.ville != '' 
                && this.telephone != '' 
                && !!this.parent.email 
                && !!this.parent.profession
        } */
        stepInfo(){
          return this.$store.state.stepInfo
        } ,
        IsAllowToAddParent: function(){
            return this.getParents.length < 1;
        } ,
        Validated: function(){
            let errors = this.validate();
            return Object.keys(errors).length === 0;
        },
        buttonText: function()
        {
            return this.currentStep == 1 ? 'Suivant' : 'Envoyer';
        },                                            
  }
}
//console.log(parents(2))
</script>
