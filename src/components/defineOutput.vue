<template lang="html">
  <div class="defineOutput">>
      <h3>{{definedText}}</h3>
      </div>
  </div>
</template>

<script>
export default {
  name: 'defineForm',
  props: ['definedText'],
  data(){
    return{
      seen:false
    }
  }

}
</script>

<style lang="css">
.h3 {
    transition: all .3s ease;
    height: 30px;
    padding: 10px;
    background-color: #eee;
    overflow: hidden;
}
.h3.v-enter, .h3.v-leave {
    height: 0;
    padding: 0 10px;
    opacity: 0;
}
</style>
