import {formatDate, moneyNum, formatNum} from './util';

export default function (Vue:any){
    Vue.filter('date',(value:any)=>{
        return formatDate('yyyy-MM-dd',new Date(value))
    })
    Vue.filter('number', function (value:any, suffix:any) {
        //console.info(value)
        //console.info(suffix)
        if (isNaN(parseInt(value))) {
            return value;
        }
        return moneyNum(value, suffix);
    })
}

