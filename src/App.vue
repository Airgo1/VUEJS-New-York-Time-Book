<template>
  <div id="app">
    <component :is="layout">
      <router-view/>
    </component>
  </div>
</template>

<script>
const defaultLayout = 'default'
export default {
  name: 'App',
  computed: {
    layout () {
      return (this.$route.meta.layout || defaultLayout) + '-layout'
    }
  },
  created () {
    // nothing defined here (when this.$route.path is other than "/")
    console.log(this.$route, this.$route.meta.layout)
  },
  updated () {
    // something defined here whatever the this.$route.path
    console.log(this.$route, this.$route.meta.layout)
  }
}
</script>

<style scoped>
body {
  font-family: "Open Sans", sans-serif;
  background-color: white;
  font-size: 100%;
  padding: 0;
  margin: 0;
  overflow: hidden;
  min-width: 320px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000000;
}
html, body, div, 
span, applet, object, iframe, 
h1, h2, h3, h4, h5, h6, p, 
blockquote, pre, a, abbr, acronym, address, 
big, cite, code, del, dfn, em, img, ins, kbd, q, s, 
samp, small, strike, strong, sub, sup, tt, var, b, u, i, 
center, dl, dt, dd, ol, ul, li, fieldset, form, label, 
legend, table, caption, tbody, tfoot, thead, tr, th, td, 
article, aside, canvas, details, embed, figure, figcaption, 
footer, header, hgroup, menu, nav, output, ruby, section, 
summary, time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    -ms-text-size-adjust: 100%;
    -moz-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    text-size-adjust: 100%;
    font: inherit;
    font-weight: inherit;
    font-size: inherit;
    line-height: inherit;
    font-family: inherit;
    vertical-align: baseline;
}
</style>
