<template lang="html">
  <div class="well">
  <transition name="bounce">
    <h3>{{translatedText}}</h3>
  </transition>

  </div>
</template>

<script>
export default {
  name: 'translateOutput',
  props: ['translatedText']
}
</script>

<style scoped lang="css">


</style>
