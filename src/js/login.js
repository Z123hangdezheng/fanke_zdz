

$(function(){
  $('#btn').click(async()=>{
  const username = $('#username').val()
  const password = $('#password').val()

  if(!username||!password) return alert('请完整填写信息')

  const {code,nickname} = await $.post('../server/login.php',{username,password},null,'json')
  if(!code) return alert('用户名密码错误')
  console.log('登录成功')
  console.log(nickname)
  setCookie('nickname', nickname, 1000 * 60)

  window.location.href = './index.html'
  })
})