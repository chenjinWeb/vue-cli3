<template>
  <div class="hello">
    <p>父组件传过来的值是:{{msg1}}</p>
    <p>父组件传过来的值是:{{msg2}}</p>
    <p>父组件传过来的值是:{{msg3}}</p>
    {{name}}
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Header extends Vue {
    name:string = '1111';
    @Prop(Number) readonly msg1!: number | undefined;
    @Prop([Number,String, Boolean]) readonly msg2!: number | string | boolean;
    @Prop({
      type:Object,
      default:()=>{
        return {
          b:'2'
        }
      }
    }) readonly msg3! : object
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
