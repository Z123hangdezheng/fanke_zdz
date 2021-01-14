function Card(ele){
  
   
    this.ele = document.querySelector(ele)
    this.btns = this.ele.querySelectorAll('ul>li')
    this.tabs = this.ele.querySelectorAll('ol>li')
   this.change()
}
Card.prototype.change = function(){
  
    this.btns.forEach((item,index)=>{
        item.onclick = ()=>{
           
          this.btns.forEach((item,index)=>{
              this.btns[index].classList.remove('active')
              this.tabs[index].classList.remove('active')
          })
     
          this.btns[index].classList.add('active')
          this.tabs[index].classList.add('active')
        }
    })
}
var p1 = new Card('.login')