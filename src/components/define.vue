<template lang="html">
  <div class="defineText">
    <transition name='fade'>
    <form class='well' v-on:submit="submitDef">
      <input class='defineTextArea' value='defineTextArea' v-model='textToDefine' type="text" placeholder='enter a word'>
      <input class='button' type="submit" value="Define!">
    </form>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'defineText',
  data: function() {
    return {
      textToDefine: '',
    }
  },
  methods: {
    submitDef(e) {
      this.$emit('submitDef', this.textToDefine)
    }
  }
}
</script>

<style lang="css">
input:active{
    background:#ef9ee7;
}
</style>
