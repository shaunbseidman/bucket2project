<template lang="html">
  <div id="translateForm">
    <form class='well' v-on:submit.prevent="formSubmit">
      <input class='translateInput' value='translateInput' type="text" v-model='textToTranslate' placeholder='enter a word'>
      <input class='translateButton' type="submit" value="Translate!">
      <select class='language' v-model='language'>
        <option value="af">Afrikaans</option>
        <option value="sq">Albanian</option>
        <option value="ar">Arabic</option>
        <option value="hy">Armenian</option>
        <option value="eu">Basque</option>
        <option value="bg">Bulgarian</option>
        <option value="zh">Chinese</option>
        <option value="cs">Czech</option>
        <option value="en">English</option>
        <option value="fr">French</option>
        <option value="de">German</option>
        <option value="ja">Japanese</option>
        <option value="ko">Korean</option>
        <option value="pl">Polish</option>
        <option value="ru">Russian</option>
        <option value="gd">Scottish</option>
        <option value="sk">Slovakian</option>
        <option value="es">Spanish</option>
        <option value="th">Thai</option>
        <option value="vi">Vietnamese</option>
        <option value="cy">Welsh</option>
      </select>
    </form>
  </div>

</template>

<script>
export default {
  name: 'translateForm',
  props:['translateIt'],
  data() {
    return {
      textToTranslate: '',
      language: '',
      text: '',
    }
  },
  created() {
    this.language = 'en'
  },
  methods: {
    formSubmit(e) {
      this.translateIt(this.textToTranslate, this.language)
    }
  }
}
</script>

<style lang="css">
input{
  border-radius: 8px;
  border: 1px solid #73ADDD;
  padding: 6px;
}

select{
  border-radius: 8px;
  border: 1px solid #73ADDD;
  padding: 6px;
}
</style>
