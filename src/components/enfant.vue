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
                  <div>
                    <div>
                    <h2>Informations de l'enfant</h2>
                    <p>Renseignez ce formulaire afin que notre département des admissions prenne contact avec vous dans les plus brefs délais</p>
                 </div>
              </div>
              <div id="main_container">
                <div class="d-flex justify-content-center align-items-center">
                  <div class="p-2 genre"><label for="">Genre</label></div>
                  <div class="p-2"><input id="radio1" type="radio" value="fille"></div>
                  <div class="p-2"><label for="radio1">Fille</label></div>
                  <div class="p-2"><input id="radio2" type="radio" value="garcon"></div>
                  <div class="p-2"><label for="radio2">Garcon</label></div>
                </div>
               <form action="">
                  <div class="row">
                      <div class="col-sm-6">
                        <input id="nom" type="text" placeholder="Nom de l'enfant*">
                      </div>
                      <div class="col-sm-6">
                         <input id="prenom" type="text" placeholder="Prénom de l'enfant*">
                      </div>
                  </div>
                  <div class="row">
                      <div class="col-sm-6">
                        <input id="pays" type="text" placeholder="Année de naissance*">
                      </div>
                      <div class="col-sm-6">
                         <input id="ville" type="text" placeholder="Classe actuelle*">
                      </div>
                  </div>
                 
                  <div class="row">
                      <div class="col-sm-12">
                        <input id="profession" type="text" placeholder="Nom d'etablissement actuel">
                      </div>
                  </div>
                  <p class="procedure">Avez-vous entamé la procédure de pré-inscription sur le site du SCAC ?</p><br>
                    <div class="d-flex justify-content-center align-items-center">
                      <div class="p-2"><input id="radio1" type="radio" value="oui"></div>
                      <div class="p-2"><label for="radio1">oui</label></div>
                      <div class="p-2"><input id="radio2" type="radio" value="non"></div>
                      <div class="p-2"><label for="radio2">non</label></div>
                    </div>
                  <div class="mb-4">
                    <button class="btn-add-parent">Ajouter un enfant</button>
                  </div>
                  
                  <div class="mb-4">
                    <b-button @click="previousStep" pill variant="primary" class="precedent">precedent</b-button>
                     <b-button @click="nextStep" pill variant="primary" class="suivant">suivant</b-button>
                   </div>
               </form>
              </div>
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
  name: 'enfant',
   methods:{
            ...mapMutations(["nextStep","previousStep"]),
           
        }
}
</script>