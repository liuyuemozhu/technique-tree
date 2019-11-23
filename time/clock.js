/* 
    todo：1.加入圆盘初始化动画
          2.如果初始的角度为0度，那么是让圆盘都旋转呢，还是不动呢？，比如：3月8日-3点
    1.日期容器变量使用的是 day，而不是 date，day中文直译为天，并不是欧美获取时间的星期
    2.效果实现思路（曲线救国）：每时每刻获取当前时间，然后进行初始化
*/
// 声明开始和结束按钮以及 定时器
var start = document.getElementById("start"),
    end = document.getElementById("end"),
    n = 0,
    timer;

// 获取当前时间
var date = new Date(),
    date1 = date.toLocaleString(), // 日期及时间 本地化
    initAmPm = date.toLocaleTimeString().slice(0 , 2), // 获取当前时间是上午还是下午
    initSecond = date.getSeconds(), // 获取当前时间的秒
    initMinute = date.getMinutes(), // 获取当前时间的分
    initHour = date.getHours(), // 获取当前时间的时
    initDay = date.getDay(), // 获取当前时间的星期几
    initDate = date.getDate(), // 获取当前时间的具体日
    initMonth = date.getMonth() + 1, // 获取当前时间的具体月份，从 0 开始，获取的值需要 +1
    initYear = date.getFullYear(); // 获取当前时间的年份
console.log(date1);

// 把当前时间的各个数字类型的变量转为汉字类型的变量
var chaSecond = numCovertCharacter(initSecond),
    chaMinute = numCovertCharacter(initMinute),
    chaHour = numCovertCharacter(initHour),
    chaDay = numCovertCharacter(initDay),
    chaDate = numCovertCharacter(initDate),
    chaMonth = numCovertCharacter(initMonth);

// 声明各个时间容器
var month = document.getElementsByClassName("month")[0],
    day = document.getElementsByClassName("day")[0],
    hour = document.getElementsByClassName("hour")[0],
    minute = document.getElementsByClassName("minute")[0],
    second = document.getElementsByClassName("second")[0],
    ampm = document.getElementsByClassName("ampm")[0];

// 视图最内层，填充 “上午下午” 的内容
// ampm.innerHTML = initAmPm + "<br>" + "星期" + chaDay;

/* 
    以下这些初始化的函数可以被封装成更抽象简洁的函数
    1.初始化月份，函数中的3是当前功能所在圆盘 rotate(0deg) 的时候的右侧刻度，30是当前功能任意两个刻度间的夹脚度数
*/
var angleRoundMonth;
function getangleRoundMonth(initMonth){
    if((3-initMonth) >= 0){
        angleRoundMonth = (3-initMonth) * 30;
        return angleRoundMonth;
    }else{
        angleRoundMonth = 360 + (3-initMonth) * 30;
        return angleRoundMonth;
    }
}
getangleRoundMonth(initMonth);
month.style.transform = "rotate(" + angleRoundMonth + "deg)";

/* 
    2.初始化日期，函数中的8是当前功能所在圆盘 rotate(0deg) 的时候的右侧刻度，11.25是当前功能任意两个刻度间的夹脚度数
*/
var angleRoundDate;
function getangleRoundDate(initDate){
    if((8-initDate) >= 0){
        angleRoundDate = (8-initDate) * 11.25;
        return angleRoundDate;
    }else{
        angleRoundDate = 360 + (8-initDate) * 11.25;
        return angleRoundDate;
    }
}
getangleRoundDate(initDate);
day.style.transform = "rotate(" + angleRoundDate + "deg)";

/* 
    初始化小时，小时圆盘和月份一样都有12个刻度，获取转动角度函数通用
*/
getangleRoundMonth(initHour);
hour.style.transform = "rotate(" + angleRoundMonth + "deg)";

/* 
    初始化分钟，函数中的15是当前功能所在圆盘 rotate(0deg) 的时候的右侧刻度，6是当前功能任意两个刻度间的夹脚度数
*/
var angleRoundMinute;
function getangleRoundMinute(initMinute){
    if((15-initMinute) >= 0){
        angleRoundMinute = (15-initMinute) * 6;
        return angleRoundMinute;
    }else{
        angleRoundMinute = 360 + (15-initMinute) * 6;
        return angleRoundMinute;
    }
}
getangleRoundMinute(initMinute);
minute.style.transform = "rotate(" + angleRoundMinute + "deg)";

/* 
    初始化秒，秒圆盘和分圆盘一样都有60个刻度，获取转动角度函数通用
*/
getangleRoundMinute(initSecond);
second.style.transform = "rotate(" + angleRoundMinute + "deg)";

/* 
    每时每刻都初始化时间，让钟表转动起来。
    开始使用的是 setInterval() 方法，耗费性能，而且异步刷新，
    因为是异步刷新，所以可能获取cpu执行的时刻是不确定的，这样可能导致刷新的时间间隔并不是很准确
*/
// 初始化刷新当前时间的函数
function getCurrentTime(){
    // 获取当前时间
    var currentDate = new Date(),
        initAmPm = currentDate.toLocaleTimeString().slice(0 , 2), // 获取当前时间是上午还是下午
        initSecond = currentDate.getSeconds(), // 获取当前时间的秒
        initMinute = currentDate.getMinutes(), // 获取当前时间的分
        initHour = currentDate.getHours(), // 获取当前时间的时
        initDay = currentDate.getDay(), // 获取当前时间的星期几
        initDate = currentDate.getDate(), // 获取当前时间的具体日
        initMonth = currentDate.getMonth() + 1; // 获取当前时间的具体月份，从 0 开始，获取的值需要 +1
    var chaDay = numCovertCharacter(initDay);
    if(chaDay == "零"){
        chaDay = "日";
    }
    // 执行视图钟表操作 -- 月份
    getangleRoundMonth(initMonth);
    month.style.transform = "rotate(" + angleRoundMonth + "deg)";
    // 执行视图钟表操作 -- 日期
    getangleRoundDate(initDate);
    day.style.transform = "rotate(" + angleRoundDate + "deg)";
    // 执行视图钟表的操作 -- 小时
    getangleRoundMonth(initHour);
    hour.style.transform = "rotate(" + angleRoundMonth + "deg)";
    // 执行视图钟表的操作 -- 分钟
    getangleRoundMinute(initMinute);
    minute.style.transform = "rotate(" + angleRoundMinute + "deg)";
    // 执行视图钟表的操作 -- 秒
    getangleRoundMinute(initSecond);
    second.style.transform = "rotate(" + angleRoundMinute + "deg)";

    // 视图最内层，填充 “上午下午” 的内容
    ampm.innerHTML = initAmPm + "<br>" + "星期" + chaDay;

    highlightCurrentTime("month" , initMonth);
    highlightCurrentTime("day" , initDate);
    highlightCurrentTime("hour" , initHour);
    highlightCurrentTime("minute" , initMinute);
    highlightCurrentTime("second" , initSecond);
    
    // 执行动画，使圆盘转动起来
    window.requestAnimationFrame(getCurrentTime);
}
// setInterval(getCurrentTime,1000)
window.requestAnimationFrame(getCurrentTime);

/* 
    最后一步：高亮显示当前时刻
*/
// 封装高亮显示当前时刻的函数
function highlightCurrentTime(time ,character){
    var index , str;
    time = "." + time;
    if(time == ".hour"){
        if(character > 12){
            character = character - 12;
        }else if(character == 0){
            character = 12;
        }
    }
    character = numCovertCharacter(character);
    for(let i = 0; i < $(time + ">.box>div").length; i++){
        // 需要完全匹配才可以使用。需要去除容器显示尾缀，然后完全匹配
        str = $(time + ">.box>div")[i].textContent.split("");
        arr = str.slice(0 , str.length-1);
        str = arr.join("");
        // console.log(str);
        if(str == character){
            index = i;
        }
        $($(time + ">.box>div")[i]).css("color" , "black");
        $($(time + ">.box>div")[index]).css("color" , "red");
    }
}