<template>
  <div>
    Hi, ich bin my-quasar-package
    <my-button @click="addNumber" label="add a number" />
    <q-chip v-for="item in data" :key="item">
      {{ item }}
    </q-chip>
  </div>
</template>

<style>
</style>

<script>
import { QChip } from "quasar";
import MyButton from "./MyButton.vue";
export default {
  name: "HelloWorld",
  components: {
    QChip,
    MyButton,
  },
  data() {
    return {
      data: ["A", "Longer", "c"],
    };
  },
  methods: {
    addNumber() {
      this.data.push(Math.round(Math.random() * 100));
    },
  },
  created() {
    console.log("hello world, this is my store: ", this.$store);
    console.log("hello world, this is my route: ", this.$route);
  },
};
</script>

