$(function(){
    $('.btn').click(async()=>{
    const username = $('#username').val()
    const password = $('#password').val()

    if(!username||!password) return alert('请完整填写信息')
 
    const {code} = await $.post('../server/zhuce.php',{username,password},null,'json')
   
    console.log('注册成功')
  
   
    window.location.href = './login.html'
    })
  })