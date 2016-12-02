<template>
         <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
            <header class="mdl-layout__header">
               <div class="mdl-layout__header-row">
                  <span class="mdl-layout-title">MarkCalc</span>
                  <div class="mdl-layout-spacer"></div>
                  <nav class="mdl-navigation mdl-layout--large-screen-only">
                     <a class="mdl-navigation__link" href="">About</a>
                     <a class="mdl-navigation__link" href="">Login</a>
                     <a class="mdl-navigation__link" href="">Dashboard</a>
                  </nav>
               </div>
            </header>
            <div class="mdl-layout__drawer">
               <span class="mdl-layout-title">Title</span>
               <nav class="mdl-navigation">
                  <a class="mdl-navigation__link" href="">Link</a>
                  <a class="mdl-navigation__link" href="">Link</a>
                  <a class="mdl-navigation__link" href="">Link</a>
                  <a class="mdl-navigation__link" href="">Link</a>
               </nav>
            </div>
            <main class="mdl-layout__content">
               <div class="page-content">
                  <div class="android-be-together-section mdl-typography--text-center">
                <home></home>
                  </div>

         </div>
         </div>
         </main>
         </div>

</template>

<script>
import home from './home.vue'
export default {
  name: 'app',
  components: {
   home
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
