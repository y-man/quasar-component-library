<template>
  <div>
    ich habe hier einen button:
    <q-btn @click="click" :label="label" />
  </div>
</template>

<style>
</style>

<script>
import { QBtn } from "quasar";
export default {
  name: "MyButton",
  components: {
    QBtn,
  },
  props: {
    label: {
      type: String,
      default: "test",
    },
  },
  methods: {
    click() {
      this.$emit("click");
    },
  },
  created() {
    console.log("my-button was created");
  },
};
</script>
