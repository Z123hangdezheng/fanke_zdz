// 1. 若干个数字求和
function fn() {
  var res = 0
  for (var i = 0; i < arguments.length; i++) {
    res += arguments[i]
  }
  return res
}

// 2. 获取最大公约数
function getGys(a, b) {
  var gys = i
  var max = a > b ? a : b
  var min = a > b ? b : a
  for (var i = min; i >= 1; i--) {
    if (max % i === 0 && min % i === 0) {
      gys = i
      break
    }
  }
  return gys
}

// 3. 获取最小公倍数
function getGbs(a, b) {
  var gbs = a * b / getGys(a, b)
  return gbs
}

// 4. 判断是不是质数
function isZs(num) {
  var flag = true
  for (var i = 2; i < num; i++) {
    if (num % i === 0) {
      flag = false
      break
    }
  }
  return flag
}
// 5.两个时间节点，输出对象倒计时
function settime(a,b){
  // 倒计时
  var time = a
  var time1 = b
  //  time = new Date('2020-12-3 17:45:20')
  //  time1 =new Date('2020-12-5 13:45:29') 
  var obj = {}
  var t1 = time.getTime()
  var t2 = time1.getTime()
  var res = Math.abs(t1-t2)/1000    // 拿到时间戳将其变换为秒
  //进行换算
  var day = parseInt(res / (60*60*24))
  var hour = parseInt(res %(60*60*24)/(60*60))
  var minutes = parseInt(res %(60*60)/60)
  var seconds = parseInt(res %60)
  // 放入数组
  obj['day'] = day
  obj['hour'] = hour
  obj['minutes'] = minutes
  obj['seconds'] = seconds
  // console.log(obj)
  return obj

  }
// 输出随机颜色十六进制字符串
  function randomcolor(){
    var str = '#'
   for(var i=1;i<=3;i++){
     var res = Math.floor(Math.random()*256) 
     var res1 = res.toString(16)
     if(res1.length===1){
         res1 = '0' + res1
     }
     
    str += res1
   }
    return str
}
// 随机输出 0~255 个数字
function randomnum(){
  var res =Math.floor(Math.random()*(255+1))
  return res
}
 // 范围内的随机数字
 function randomnum(a,b){
  var max = Math.max(a,b)
  var min = Math.min(a,b)
  var res = Math.floor(Math.random()*(max - min +1))
  var res1 = min + res
  return res1
}

// 格式化字符串
function setstr(str){
  var obj = []
  var tmp = str.split('&')
  console.log(tmp)
  tmp.forEach(function(item){
     
      var t = item.split('=')
      var key = t[0]
      var value = t[1]
      obj[key] = value
  })
  return obj
  }

  // 敏感语过滤
  // 批量替换数组
   // 准备一个字符串和一个敏感语数组
        function filterxx(str,arr){
          var str = 'asdAAsdfsBBsdCCasdaBBsad'
          var arr = ['AA','BB','CC']
          arr.forEach(function(item){
              // console.log(item)
               str = str.split(item).join('**')
          })
          return str
      }


      
  //运动函数。轮播图专用
  function move(ele,target,fn){
    let count = 0
   
    for(let key in target){
        count++
       
        if(key === 'opacity') target[key]*100
        
        let timer = setInterval(function(){
           
            let current
          
            if(key === 'opacity'){
                current = window.getComputedStyle(ele)[key]*100
            }else{
           
                current = parseInt(window.getComputedStyle(ele)[key])
            }
           
            let distance = (target[key] - current)/10
           
           distance = distance>0 ?distance =Math.ceil(distance):distance = Math.floor(distance)
          
            if(current === target[key]){
               
                clearInterval(timer)
                count--
                if(count === 0) fn()
            }else{
               
                if(key === 'opacity'){
                    ele.style[key] = (current+distance)/10
                }else{
                    ele.style[key] = current+distance+'px'
                }
            }
        
        },20) 

    }
} 