<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>{{ toChildMoney }}</h1>
    <button @click="child_toChildMoney+=10;">改变child_toChildMoney值{{child_toChildMoney}}</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue , Watch, Emit } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  
  @Prop() private msg!: string;

  @Prop({
    type: Number,
    required: true,
    default:0
  }) toChildMoney!:number

  child_toChildMoney:number = 0;

  @Watch('toChildMoney')
  toChildMoneyChange(val:any,oldVal:any){
    this.child_toChildMoney = val;
  }

  @Watch('child_toChildMoney')
  childToChildMoneyChange(val:number,oldVal:any){
    this.getMoneyChange(val)
  }

  @Emit('getMoneyChange') getMoneyChange(child_toChildMoney:number){}

  public name:string = 'hello'

  mounted(){
    this.child_toChildMoney = this.toChildMoney;
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
