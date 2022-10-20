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
    gap: 2px;
    width: 960px;
    margin: auto;
    // flex-direction: column;
   
}

.container1 {
    display: flex;
    flex-direction: column;
    align-items: center;
}


.sqr {
    // display: flex;
    
    width: 16px;
    height: 16px;
    flex: initial;
    border : 1px solid salmon ;
    background-color: white;


}


.hover {
    background-color: rgb(236, 16, 16);
}

`




function creatsqr(times){
    
   
    if (times > 0)     
    for (i=1;i<= times;i++) {
        let elem = document.createElement("div")
        elem.classList.add('sqr')
        elem.addEventListener('mouseover',drawing)
        sqrs.append(elem)


    }
}


creatsqr(500)

function drawing(e){
    this.classList.add('hover')
}
// sqrs.append(newsheetbtn)

document.body.append(style,container)  // insert the element to the body

newsheetbtn.addEventListener('click',newsheet)



function newsheet(e){
    let n_sqr = prompt('how much squares you want in your sheet ? 300 max ','300')
    
    if (n_sqr <=300) {
        // console.log(` ${n_sqr} squares will be added` )
    }
}
