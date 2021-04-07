<template>
    <div>
        <h2>{{title}}</h2>
    <p>{{subtitle}}</p>
    </div>
</template>

<script>
export default {
  name: 'formHeader',
  props:['title','subtitle'],
}
</script>