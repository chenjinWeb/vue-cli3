<template>
  <div class="about">
    <h1>{{msg}}</h1>
    <h1>{{msgObj.a}}</h1>
    <h1>{{computedMsg}}</h1>
    <button @click="getMsg()">按钮</button>
    <Header />
  </div>
</template>

<script lang="ts">

  interface MsgObj{
    a?:string,
    b?:string
  }

  import { Component, Vue } from 'vue-property-decorator';

  @Component
  export default class About extends Vue {
    
    //初始化数据
    private msg:string = 'This is an about page';

    private msgObj:MsgObj={
      a:'data1',
      b:'data2'
    }

    // 生命周期
    private mounted(){
        console.info('mounted')
    }

    //计算属性
    private get computedMsg(){
      return 'computed' + this.msg
    }

    //方法
    private getMsg(){
      console.info(this.msg)
    }


  }

</script>

