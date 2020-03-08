<template>
  <div>
    <my-input @on-input="onInput"></my-input>
    <button class="item" @click="submit" type="submit">提X开始拉上看到肌肤交</button>
  </div>
</template>
<script>
  import MyInput from "./Input.vue";

  export default {
    name: "App",
    data() {
      return {
        text: "Hello Hot update"
      };
    },
    methods: {
      onInput(text) {
        this.text = text;
      },
      submit(e) {
        console.log(e)
      }
    },
    components: {
      MyInput
    }
  };
</script>
<style>
  h1 {
    color: rgb(127, 127, 255);
  }
</style>

