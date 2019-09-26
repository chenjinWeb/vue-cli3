<template>
  <div class="about">
    <h1>{{msg}}</h1>
    <h1>{{msgObj.a}}</h1>
    <h1>{{computedMsg}}</h1>
    <div>父组件传给子组件的4种方式：</div>
    <ul>
      <li>
        <Header :msg1="msg1" />
      </li>
      <li>
        <Header :msg2="msg2" />
      </li>
      <li>
        <Header :msg3="msg3" />
      </li>
      <li>
        <Header :msg1="msg1" />
      </li>
    </ul>
    <button @click="getMsg()">按钮</button>
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

    private msg1:number = 10;
    private msg2:boolean = false;
    msg3:object = {
      a:'1'
    };

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

