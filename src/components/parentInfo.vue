<template>
    <div>
        <div class="parent_info">
            <div class="row">
                    <div class="col-md-5"><div class="parent_name">{{parent.civilite}}.{{parent.nom + ' ' + parent.prenom}}</div></div>      
                    <div class="col-md-7"><div class="parent_tel">Tel:{{parent.telephone}}</div></div>
                    <div class="col-md-5"><div class="parent_profession">Profession:{{parent.profession}}</div></div>
                    <div class="col-md-7"><div class="parent_email">Email:{{parent.email}}</div></div>
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
