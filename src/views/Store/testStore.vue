<template>
  <div class="home">
    <h1>测试vuex页面</h1>
    <div>state里面的count值是:{{count}}</div>
    <button @click="addCount()">+</button>
    <button @click="reduceCount()">-</button>
  </div>
</template>

<script lang="ts">
  import { Component, Vue, Watch } from 'vue-property-decorator';
  import {
    State,
    Getter,
    Action,
    Mutation,
  } from "vuex-class"
  @Component
  export default class Home extends Vue {
      @State count!: number
      @Mutation addCount!: Function;
      @Mutation reduceCount!: Function;
  }
</script>
