<template>
  <div class="container">
    <div class="item">
      <input  type="text" v-model="msg" @input="onInput">
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        msg: ""
      };
    },
    methods: {
      onInput(e) {
        this.$emit("on-input", e.target.value);
      },
    }
  };
</script>
<style>
  input {
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 2em;
  }
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .item {
    flex: 1;
  }
</style>

