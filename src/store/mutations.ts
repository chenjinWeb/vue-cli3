export default{
    addCount(state:any,payload:any){
        state.count++
    },
    reduceCount(state:any){
        if(state.count==0){
            return
        }
        state.count--
    }
}


