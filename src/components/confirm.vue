<template>
<div class="modal-card confirmation-modal" style="width: auto">
    <section class="modal-card-body">
        <span class="check-icon"><font-awesome-icon icon="check"/></span>
        <h4>Votre demande a bien été envoyée</h4>
        <p>L'équipe GSJC vous contacterez dans les plus brefs délais</p>
        <b-button type="is-primary" v-on:click="$emit('close')">Terminer</b-button>
    </section>
</div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
    
</style>