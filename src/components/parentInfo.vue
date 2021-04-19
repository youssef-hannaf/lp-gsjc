<template>
    <div>
        <div class="parent_info">
            <b-button class="button-delete" v-on:click="deleteParent(parent)" type="is-primary"><font-awesome-icon :icon="['fas', 'times']"/></b-button>
            <div class="row parent-content">
                    <div class="col-md-5"><div class="parent_name"><p class="c-blue mb-0 font-500">{{parent.civilite}}.{{parent.nom + ' ' + parent.prenom}}</p></div></div>      
                    <div class="col-md-7"><div class="parent_tel"><p class="c-blue mb-0 font-500">Tel: {{parent.phoneCode + ' ' + parent.telephone}}</p></div></div>
                    <div class="col-md-5"><div class="parent_profession"><p class="c-blue mb-0 font-500">Profession: {{parent.profession}}</p></div></div>
                    <div class="col-md-7"><div class="parent_email"><p class="c-blue mb-0 font-500">Email:  {{parent.email}}</p></div></div>
            </div>             
        </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';
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
        ...mapMutations(["deleteParent"])
    },
     props: {
        parent: {
            type: Object,
            required: true,
        },
        
        vlidated: Boolean,
    },
    mounted(){
        console.log(this.parent);
    },
    computed: {
        Parent: function(){
            return this.parent;
        }
    },
}
</script>
