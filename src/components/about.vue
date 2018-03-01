<template lang="html">
  <div class="about">
    <button v-on:click="seen=!seen" type="button" name="button">About</button>
  <transition name = 'fade'>
    <section v-if="seen">
      <p>Ever want to know how to say 'raincoat' in German? How about 'locomotive' in Japanse? What about the defintion of 'pecuniary' or 'tautological'?</p>
      <p>Well now you can! With a simple to use translation and dictionary on hand, your SAT vernacular as well as multilingual knowledge can turn you into the sesquipedalian that your friends love and hate.</p>
    </section>
  </transition>
  </div>
</template>

<script>
export default {
  name:'about',
  data(){
    return{
      seen:false
    }
  }
}
</script>

<style scoped lang="css">
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to{
  opacity: 0;
}
button{
    border-radius: 8px;
    border: 1px solid #73ADDD;
    padding: 6px;
}
button:active{
    background:#ef9ee7;
}

</style>
