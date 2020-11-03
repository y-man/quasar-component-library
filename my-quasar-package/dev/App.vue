<script>
import Vue from "vue";
import { MyButton, HelloWorld } from "@/entry";

export default Vue.extend({
  name: "AppDev",
  components: {
    MyButton,
    HelloWorld,
  },
  methods: {
    click() {
      alert("test");
    },
  },
});
</script>

<template>
  <div id="app">
    <q-layout view="lHh Lpr lFf">
      <q-header elevated>
        <q-toolbar>
          <q-btn flat dense round icon="menu" aria-label="Menu" />
          <q-toolbar-title> Quasar App </q-toolbar-title>
          <div>Quasar v{{ $q.version }}</div>
        </q-toolbar>
      </q-header>
      <q-page-container>
        <q-page class="flex flex-center">
          <hello-world />
          <my-button label="show alert" @click="click" />
        </q-page>
      </q-page-container>
    </q-layout>
  </div>
</template>
