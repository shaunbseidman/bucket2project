<template>
<div class='text-center' id="app">
  <br>
  <h1 class='animated slideInLeft'>Words Are Cool</h1>
  <br>
  <translateForm :translateIt="translateIt"></translateForm>
  <div id="imgArea">
    <img :src="img">
    <img :src="img2">
  </div>
  <translateOutput id='translateArea' v-text="translatedText"></translateOutput>
  <br>
  <defineText v-on:click.prevent v-on:submitDef="defineIt"></defineText>
  <br>
  <defineForm id='definedArea' v-text='definedText'></defineForm>
  <defineForm id='definedArea' v-text='definedText2'></defineForm>
  <br>
  <about></about>
  <small>Made by Shaun</small>
</div>
</template>

<script>
import translateForm from '@/components/translateForm'
import translateOutput from '@/components/translateOutput'
import defineText from '@/components/define'
import defineForm from '@/components/defineOutput'
import about from '@/components/about'
export default {
  name: 'home',
  components: {
    translateForm,
    translateOutput,
    defineText,
    defineForm,
    about,
  },
  data() {
    return {
      text: '',
      translatedText: '',
      definedText: '',
      definedText2: '',
      textToDefine: '',
      img: '',
      img2: ''
    }
  },
  methods: {
    translateIt(text, language) {
      this.getImage(text)
      let url = 'https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20180227T035858Z.a59a894a26557bc3.f48d03cd4c40b2137472d2830943fb0e922ff579&lang=' + language + '&text=' + text
      fetch(url)
        .then(response => response.json())
        .then(response => {
          this.translatedText = 'Translates to: ' + response.text[0];
        })
    },
    defineIt(text) {
      let url2 = 'http://api.wordnik.com:80/v4/word.json/' + text + '/definitions?limit=200&includeRelated=true&useCanonical=false&includeTags=false&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5'
      fetch(url2)
        .then(response => response.json())
        .then(response => {
          this.definedText = '1. ' + response[0].text
          this.definedText2 = '2 ' + response[1].text

        })
    },
    getImage(text) {
      let url3 = 'https://pixabay.com/api/?key=8192091-22672444783d29559fe81389b&q=' + text + '&image_type=photo'
      fetch(url3)
        .then(response => response.json())
        .then(response => {
          this.img = response.hits[3].previewURL
          this.img2 = response.hits[0].previewURL
        })
    }
  }
}
</script>

<style>
p {
  color: black;
}

body {
  background: #a2dbae;
}

small {
  font-size: .9rem;
  color: black;
  position: absolute;
  text-align: center;
  bottom: 0;
  left: 0;
}

img {
  padding: 3em;
}

#imgArea {
  padding: 2em;
}

#translateArea {
  padding: 1em;
}
</style>
