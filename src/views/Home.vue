<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h2>{{createTime | date}}</h2>
    <h2>{{money | number}}</h2>
    <button @click="money=25;">改变money</button>
    <button @click="obj.a.b.c=123">改变obj{{obj.a.b.c}}</button>
    <HelloWorld ref="helloComponent" msg="Welcome to Your Vue.js + TypeScript App" :toChildMoney='money' @getMoneyChange="moneyChange($event)"/>
  </div>
</template>

<script lang="ts">
  import { Component, Vue, Watch } from 'vue-property-decorator';
  import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

  @Component({
    components: {
      HelloWorld,
    }
  })
  export default class Home extends Vue {

    private mounted(){
      this.init();
      console.info(this.$refs.helloComponent.name)
    }

    private createTime = 1569380253057;
    money:number = 20;
    private obj = {
      a:{
        b:{
          c:1111
        }
      }
    }

    //methods
    private async init(){
      await this.$get('/api/home/init').then((res:any)=>{
        //console.info(res)
      })
    }

    moneyChange(data:number){
      this.money = data;
    }

    //watch
    @Watch('money')
    onMoneyChanged(val: string, oldVal: string) {
      //console.info(val)
      //console.info(oldVal)
    }

    @Watch('obj',{deep:true})
    onObjChange(val: string, oldVal: string){
      console.info(val)
      console.info(oldVal)
    }

    //ref
    $refs!:{
      helloComponent:HelloWorld
    }


  }
</script>
