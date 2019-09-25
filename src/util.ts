
const formatDate = function(fmt: string, time: Date) {
    const o: any = {
        'M+': time.getMonth() + 1, // 月份 4
        'd+': time.getDate(), // 日  9
        'h+': time.getHours(), // 小时 11
        'm+': time.getMinutes(), // 分 22
        's+': time.getSeconds(), // 秒 44
        'q+': Math.floor((time.getMonth() + 3) / 3), // 季度
        'S': time.getMilliseconds() // 毫秒
    };
    if (/(y+)/.test(fmt)) { 
    // RegExp.$1是RegExp的一个属性,指的是与正则表达式匹配的第一个子匹配
        fmt = fmt.replace(RegExp.$1, (time.getFullYear() + '').substr(4 - RegExp.$1.length));  // 这是转换年
    }
    for (const k in o) {
        if (new RegExp('(' + k + ')').test(fmt)) { 
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? 
                    (o[k]) : (('00' + o[k]).substr(('' + o[k]).length))); 
                // o[k] 4 9 11 22 44
                // '00'+o[k] 004 009 0011 0022 0044
                // ..substr(('' + o[k]).length从o[k].length开始截取
        }
    }
    return fmt; // 2019-04-09 11:22:44
};

const formatNum = function (num:number) {
    let cnum = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九'];
    let n = (num + '').split("");
    let s = '';
    n.forEach((m:any) => {
        s += cnum[m];
    })
    return s;
}

const moneyNum = function (value:any, suffix:any) {
    if (!value) return 0;
    let negative = false;
    if (String(value).indexOf("-") === 0) {
        value = value.substr(1);
        negative = true;
    }
    let number = parseInt(value).toFixed(2).split(".");
    let s = number[1];
    let n = number[0].split("").reverse();
    ;
    let str = '';
    let arr:any[] = [];
    let l = n.length;
    let numft = ''
    if (l >= 3) {
        n.forEach((b, i) => {
            str = b + str;
            if ((i + 1) % 3 === 0) {
                arr.push(str);
                str = '';
            }
            if (l - 1 === i && str !== '') {
                arr.push(str);
            }
        })
        numft = arr.reverse().join(',')
    } else {
        numft = number[0] + '';
    }
    return (negative ? "-" : "") + numft + "." + s + (suffix || "")
}

/**
 * 按指定份数分割数组
 * @param {*} array
 * @param {*} num
 */
const arrayslice = function (array=[], num:number) {
    let ar = [];
    let _ar = null;
    let _num = num;
    while (_ar = array.slice(0 - _num + num, num), _ar.length > 0 && ar.push(_ar), _ar.length === _num) {
        num += _num;
    }
    return ar;
}


function toQueryPair(key:any, value:any) {
    if (typeof value === 'undefined') {
        return key;
    }
    return key + '=' + encodeURIComponent(value === null ? '' : String(value));
}

const toBodyString = function (obj:any) {
    let ret:any[] = [];
    for (let key in obj) {
        let values = obj[key];
        if (values && values.constructor === Array) { //数组
            let queryValues = [];
            for (let i = 0, len = values.length, value; i < len; i++) {
                value = values[i];
                queryValues.push(toQueryPair(key, value));
            }
            ret = ret.concat(queryValues);
        } else { //字符串
            ret.push(toQueryPair(key, values));
        }
    }
    return ret.join('&');
}

export {
    formatDate,
    formatNum,
    moneyNum,
    arrayslice,
    toBodyString
}
