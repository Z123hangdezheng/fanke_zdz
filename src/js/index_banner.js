function Scrroll(elem){
    
    this.ele = document.querySelector(elem)
    this.bannerBox = this.ele.querySelector('.banner-aq')
    this.bannerWidth = this.bannerBox.clientWidth
    this.imgBox = this.ele.querySelector('.img')
    this.pointBox = this.ele.querySelector('.point')
    this.leftBox = this.ele.querySelector('.left')
    this.rightBox = this.ele.querySelector('.right')
    this.index = 1
    this.timer = 0
    this.flag = true
 
    this.getpoint()
    this.setclone()
    this.autoplay()
    this.inout()
    this.leftright()
    this.setpointevent()
    this.domevent()
}

Scrroll.prototype.getpoint = function(){
    let pointNum = this.imgBox.children.length
    let flag = document.createDocumentFragment()
    for(let i = 0;i<pointNum;i++){
        let li = document.createElement('li')
        li.dataset.pass = i
        if(i === 0){li.classList.add('active')}
        flag.appendChild(li)
    }
    this.pointBox.appendChild(flag)
    this.pointBox.style.width = pointNum*(15+10)+'PX'
}

Scrroll.prototype.setclone = function(){
    let first = this.imgBox.firstElementChild.cloneNode(true)
    let last = this.imgBox.lastElementChild.cloneNode(true)
    this.imgBox.appendChild(first)
    this.imgBox.insertBefore(last,this.imgBox.firstElementChild)
    this.imgBox.style.width = this.imgBox.children.length*100+'%'
    this.imgBox.style.left = -this.bannerWidth+'px'
}
Scrroll.prototype.autoplay = function(){
   this.timer = setInterval(()=>{
    this.index++
    move(this.imgBox,{left:-this.index*this.bannerWidth},()=>{this.moveend()})
    },2500)
}
Scrroll.prototype.moveend = function(){
    if(this.index === this.imgBox.children.length - 1){
        this.index = 1
        this.imgBox.style.left = -this.index*this.bannerWidth +'px'
    }
    if(this.index === 0){
        this.index = this.imgBox.children.length - 2 
        this.imgBox.style.left = -this.index*this.bannerWidth +'px'
    }
    for(let i = 0;i<this.pointBox.children.length;i++){
         this.pointBox.children[i].classList.remove('active')
    }
    this.pointBox.children[this.index-1].classList.add('active')
    this.flag = true
}
Scrroll.prototype.inout = function(){
    this.ele.addEventListener('mouseover',()=>{
        clearInterval(this.timer)
    })
    this.ele.addEventListener('mouseout',()=>{
       this.autoplay()
    })
}
Scrroll.prototype.leftright = function(){
    this.leftBox.addEventListener('click',()=>{
        if(!this.flag)return
        this.flag = false
        this.index--
        move(this.imgBox,{left:-this.index*this.bannerWidth},()=>this.moveend())
    })
    this.rightBox.addEventListener('click',()=>{
        if(!this.flag)return
        this.flag = false
        this.index++
        move(this.imgBox,{left:-this.index*this.bannerWidth},()=>this.moveend())
    })
}
Scrroll.prototype.setpointevent = function(){
    this.pointBox.addEventListener('click',(e)=>{
        e = e || window.event
        let target = e.target||e.srcElement
        if(target.nodeName === 'LI'){
            if(!this.flag)return
            let page = target.dataset.pass - 0
            this.index = page +1
           move(this.imgBox,{left:-this.index*this.bannerWidth},()=>{this.moveend()})
           this.flag = false
        }
    })
}
Scrroll.prototype.domevent = function(){
    document.addEventListener('visibilitychange',()=>{
        let state = document.visibilityState
        if(state === 'hidden') clearInterval(this.timer)
        if(state === 'visible') this.autoplay()
    })
}

let s1 = new Scrroll('.box')