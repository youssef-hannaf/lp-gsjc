<template>
    <div>
        <div class="enfant_info">
            <div class="row">
                    <div class="col-md-5"><div class="parent_name">{{Enfant.nom + ' ' + Enfant.prenom}}</div></div>      
                    <div class="col-md-7"><div class="parent_tel">Née le:{{Enfant.naissance}}</div></div>
                    <div class="col-md-5"><div class="parent_profession">Classe:{{Enfant.classe}}</div></div>
                    <div class="col-md-7"><div class="parent_email">école:{{Enfant.ecole}}</div></div>
            </div>             
        </div>
    </div>
</template>

<script>
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
     props: {
        Enfant: {
            type: Object,
            required: true,
        },
        
        vlidated: Boolean,
    },
    mounted(){
        console.log(this.enfant);
    },
    computed: {
        enfant: function(){
            return this.enfant;
        }
    },
}
</script>
