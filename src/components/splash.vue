<template lang="html">
  <div id="stuff">
    <h1 class="animated infinite bounce">Welcome to Shaun's World of Words</h1>
    <p>Ever want to know how to say 'raincoat' in German? How about 'locomotive' in Japanse? What about the defintion of 'pecuniary' or 'tautological'?</p>
    <p>Well now you can! With a simple to use translation and dictionary on hand, your SAT vernacular as well as multilingual knowledge can turn you into the sesquipedalian that your friends love and hate.</p>
    <p>This is a fun light weight app for you to play around with. Care to know the meaning of that one word that has been on the tip of your tongue? Well look that up and then translate it into 1 of 21 available languages and get some <strong>CRAZY</strong> related photos back. Your friends and family will love how much smarter you will become. </p>
    <hr>
    <router-link :to="{name: 'home'}"><button id="myButton" class="foo bar">Go!</button>
  </router-link>
  </div>
</template>

<script>
export default {}
</script>

<style  lang="css">
button:active{
    background:#ef9ee7;
}
button{
    border-radius: 8px;
    border: 1px solid #73ADDD;
    padding: 6px;
}
#stuff{
  text-align: center;
}
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
h1{
  padding-top: 2em;
}

</style>
