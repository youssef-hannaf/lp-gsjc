<template>
    <div>
        <div class="enfant_info">
            <div class="row">
                     <b-button class="button-delete" v-on:click="deleteEnfant(enfant)" type="is-primary"><font-awesome-icon :icon="['fas', 'times']"/></b-button>
                    <div class="col-md-5"><div class="enfant_name">{{enfant.nom + ' ' + enfant.prenom}}</div></div>      
                    <div class="col-md-7"><div class="enfant_naiss">Née le:{{enfant.naissance}}</div></div>
                    <div class="col-md-5"><div class="parent_classe">Classe:{{enfant.classe}}</div></div>
                    <div class="col-md-7"><div class="parent_ecole">école:{{enfant.ecole}}</div></div>
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
