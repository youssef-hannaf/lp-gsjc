<template>
    <div>
        <div class="enfant_info">
            <div class="row">
                     <b-button class="button-delete" v-on:click="deleteEnfant(enfant)" type="is-primary"><font-awesome-icon :icon="['fas', 'times']"/></b-button>
                    <div class="col-md-5"><div class="enfant_name"><p class="c-blue mb-0 font-500">{{enfant.nom + ' ' + enfant.prenom}}</p></div></div>      
                    <div class="col-md-7"><div class="enfant_naiss"><p class="c-blue mb-0 font-500">Née le: {{enfant.naissance}}</p></div></div>
                    <div class="col-md-5"><div class="parent_classe"><p class="c-blue mb-0 font-500">Classe: {{enfant.classe}}</p></div></div>
                    <div class="col-md-7"><div class="parent_ecole"><p class="c-blue mb-0 font-500">école: {{enfant.etablissement}}</p></div></div>
            </div>             
        </div>
    </div>
</template>

<script>
import {mapMutations} from 'vuex';
export default {
    data(){
        return {
            phoneNumbersCode: ['+212', '+99'],
            // parent: {
            //     civilite: null,
            //     nom: null,
            //     prenom: null,
            //     profession: null,
            //     tel: null,
            //     email: null,
            // }
        }
    },
    methods:{
        ...mapMutations(["deleteEnfant"])
    },
     props: {
        enfant: {
            type: Object,
            required: true,
        },
        
        vlidated: Boolean,
    },
    /*mounted(){
        console.log(this.enfant);
    },*/
    computed: {
        Enfant: function(){
            return this.enfant;
        }
    },
}
</script>
