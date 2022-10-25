let container = document.createElement('div')   // add principal container 
let sqrs = document.createElement('div')      //container of squares
sqrs.classList.add('container')
let style = document.createElement('style')
let newsheetbtn = document.createElement('button')
newsheetbtn.classList.add('btn')
newsheetbtn.textContent = 'new sheet'
container.classList.add('container1')    /// add class to the container
// sqr16x16.classList.add('sqr')

container.append(newsheetbtn)
container.append(sqrs)



// the styling css 
style.innerHTML =`.container {
    border : 2px solid salmon ;
    background-color: seagreen;
    display: flex;
    flex-wrap: wrap;
    // gap: 2px;
    width: 512px;
    height: 512px;
    flex: initial;
    margin: 50px auto;
    // flex-direction: column;

   
}

.container1 {
    display: flex;
    flex-direction: column;
    align-items: center;
}


.sqr {
    display: flex;
    
    
    flex: initial;
    // border : .5px solid salmon ;
    background-color: white;


}

.s16 {
    width: 16px;
    height: 16px;
}

.s32 {
    width: 32px;
    height: 32px;
}

.s64 {
    width: 64px;
    height: 64px;
}

.s128 {
    width: 128px;
    height: 128px;
}


.hover {
    background-color: rgb(236, 16, 16);
}

`




function creatsqr(times,size){
    
   
   
    for (i=1;i<= times;i++) {
        let elem = document.createElement("div")
        elem.classList.add('sqr')
        elem.classList.add(size)
        elem.addEventListener('mouseover',drawing)
        sqrs.append(elem)


    }
}


creatsqr(1024,'s16')

function drawing(e){
    this.classList.add('hover')
}
// sqrs.append(newsheetbtn)

document.body.append(style,container)  // insert the element to the body

newsheetbtn.addEventListener('click',newsheet)



function newsheet(e){
    let sqr_size = prompt('enter the pointer size 16 ,32 ,64 128 , of your sheet ?','16')  // askin user for the square size he want 
    let tsize = ''

    if (sqr_size % 16 == 0) 
    if (sqr_size <= 128) {
        sqr_size = Number(sqr_size) 
        // sqr_size += 2
        let times = 512/sqr_size 
        times *= times
        sqr_size   
        tsize = 's'+sqr_size
        const children = sqrs.childNodes;

        // for (let i = children.length - 1; i >= 0; i--) {
        //     sqrs.removeChild(children[i]);
        //  }

        sqrs.innerHTML =''
         creatsqr(times, tsize)
    }
   
}


  function multiplyNumeric(obj) {
    for (let key in obj) {
      if (typeof obj[key] == 'number') {
        obj[key] *= 2;
      }
    }
  }

let user = {
  a : 200,
  w : 300,
  as : "hello",
 }
multiplyNumeric(user)
console.log(user)
