$(function () {

   
    const nickname = getCookie('nickname')
  
   
    if (nickname) {
      
      $('.off').addClass('hide')
      $('.on').text(`欢迎您 : ${ nickname }`).removeClass('hide')
    } else {
     
      $('.off').removeClass('hide')
      $('.on').addClass('hide')
    }
  
  })