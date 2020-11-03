<template>
  <div id="app">
    <q-layout view="lHh Lpr lFf">
      <q-header elevated>
        <q-toolbar>
          <q-btn flat dense round icon="menu" aria-label="Menu" />
          <q-toolbar-title> Quasar App </q-toolbar-title>
          <q-btn label="Home" to="/" />
          <q-btn label="About" to="/about" />
          <q-btn label="HelloWorld" to="/HelloWorld" />
          <div>Quasar v{{ $q.version }}</div>
        </q-toolbar>
      </q-header>
      <q-page-container>
        <q-page class="flex flex-center">
          <router-view />
          {{ $route }}
        </q-page>
      </q-page-container>
    </q-layout>
  </div>
</template>
<script>
export default {
  name: "app",
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
