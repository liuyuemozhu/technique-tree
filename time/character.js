function character(str){
    switch (str){
        case "1":
            return "一";
        case "2":
            return "二";
        case "3":
            return "三";
        case "4":
            return "四";
        case "5":
            return "五";
        case "6":
            return "六";
        case "7":
            return "七";
        case "8":
            return "八";
        case "9":
            return "九";
        case "0":
            return "零";
    }
}

function numCovertCharacter(num){
    var str = String(parseInt(num)); // 传入的数字转为 String 类型
    // console.log(str.length); // 判断转换 String 类型后的字符串长度，“05”这种形式的长度为1
    var arr = str.split("");
    var finalStr;
    if(arr.length == 1){
        finalStr = character(arr[0]);
        return finalStr;
    }else if(arr.length == 2){
        if(arr[0] == "1" && arr[1] != "0"){
            finalStr = "十" + character(arr[1]);
            return finalStr;
        }else if(arr[0] == "1" && arr[1] == "0"){
            finalStr = "十";
            return finalStr;
        }else if(arr[1] == "0"){
            finalStr = character(arr[0]) + "十";
            return finalStr;
        }
        finalStr = character(arr[0]) + "十" + character(arr[1]);
        return finalStr;
    }
}