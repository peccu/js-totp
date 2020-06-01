<template>
<div class="hello">
  <h1>{{ totp }}</h1>
  <div class="form">
    <label for="secret">secret</label>
    <input v-model="secret" type="password" id="secret"/>
  </div>
  <div>{{ resttime }}</div>
</div>
</template>

<script src="./totp.js"></script>

<style scoped>
  .form{
    margin-top: 2em;
  }
</style>
