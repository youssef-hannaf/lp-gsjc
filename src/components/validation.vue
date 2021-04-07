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
               <form action="">
                  <div class="row">
                      <div class="col-sm-12">
                        <select name="" id="">
                            <option value="opt1">Vous préférez étre contacté</option>
                            <option value="opt2">Par mail</option>
                            <option value="opt3">Par téléphone</option>
                        </select>
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
                      <b-button  pill variant="primary" class="suivant">Envoyer</b-button>
                   </div>
               </form>
              </div>
              </div>
             
            </div>
          </div>
        </div>
      </div>
   

    
</template>

<script>
import {mapMutations} from "vuex";
export default {
  name: 'validation',
   methods:{
            ...mapMutations(["nextStep","prevStep"]),
           
        }
}
</script>