let itemdata=[
    {
        id:1,
        img:"Rolcex.jpg",
        title:"rolex",
        price: 56000

    },
    {
        id:2,
        img:"ch7b6Yh.jpg",
        title:"Du thuyền 5 sao",
        price:12000000
    },
    {
        id:3,
        img:"iELtucq.jpg",
        title:"Become a #1 influncer",
        price:1000000
    },
    {
        id:4,
        img:"nzI2BgD.jpg",
        title:"plane",
        price:12000000
    },
    {
        id:5,
        img:"jUV3CMC.jpg",
        title:"Luxery penthouse",
        price:15000000
    },
    {
        id:6,
        img:"g9hStpM.jpg",
        title:"Bugati",
        price:10000000
    },
    {
        id:7,
        img:"SfGExTq.jpg",
        title:"Toyota Camry",
        price:50000
    },
    {
        id:8,
        img:"kym3viy.jpg",
        title:"Give 20.000$ for 100.000 people",
        price:200000000
    },
    {
        id:9,
        img:"sCfpUGZ.jpg",
        title:"Diamond Ring",
        price:80000
    }

]

let contentContainer=document.getElementById("main-content")
for (let index = 0; index < itemdata.length; index++) {
    contentContainer.innerHTML +=`
    <div class="item-container" id="${itemdata[index].id}">
        <img src="${itemdata[index].img}" alt="">
        ${itemdata[index].title}<br>${new Intl.NumberFormat('de-DE').format(itemdata[index].price)}$
        <div class="button">
            <button class="minus">Minus</button>
            <p id="count">0</p>
            <button class="add">Add</button>
        </div>  
    </div>
    `
    
}
let itemContent=document.querySelectorAll(".item-container")
console.log(itemContent);

let total=0;
itemContent.forEach((item,index)=>{
    let count=0;
    let totalAdd=0;
    let totalMinus=0;
    // add itemt
    item.children[2].children[2].onclick=()=>{
     count++;
    total+= itemdata[index].price
    console.log(count);
    console.log(total);
     item.children[2].children[1].innerHTML=count;
     detail()
    }
    //minus itemm
    
    item.children[2].children[0].onclick=()=>{
    if (count==0) {
            return;
        }  
        total-= itemdata[index].price
            count--;
            console.log(total);
    item.children[2].children[1].innerHTML=count;
    detail()      
        }
    
})

function detail() {
    let remain=document.querySelector(".remain")
let detailRemain=document.querySelector(".detail-remain")
if (total==0) {
    remain.innerHTML=`Remaining: $217,000,000,000`
    detailRemain.innerHTML="You haven't spent a single dollar! start buying!"
}else{
    console.log(222);
    remain.innerHTML=`Remaining: $${new Intl.NumberFormat('de-DE').format(217000000000-total)}`
    detailRemain.innerHTML=`You just spend ${total/217000000000}%`
}
}