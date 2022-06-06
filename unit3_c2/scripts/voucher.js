let url="https://masai-vouchers-api.herokuapp.com/api/vouchers";

fetch(url).then(function(res){
    res.json().then(function(res){
    //   console.log(res[0].vouchers);
           append(res[0].vouchers);
      
    })
})

function append(data){

data.forEach(function(el){

let box=document.createElement("div");
box.setAttribute("class","voucher");

let image=document.createElement("img");
image.src=el.image;

let name=document.createElement("h3");
name.innerText=el.name;

let price=document.createElement("h3");
price.innerText=el.price;


let btn=document.createElement("button");
btn.innerHTML="Buy";
btn.setAttribute("class","buy_voucher");
btn.addEventListener("click",function(data){
    addtopurchase(el);
    let arr=JSON.parse(localStorage.getItem("purchase"))||[];
    arr.push(el);
    localStorage.setItem("purchase",JSON.stringify(arr));
})

box.append(image,name,price,btn);

document.getElementById("voucher_list").append(box);

})

}
var amount=localStorage.getItem("user"); 


console.log(amount[0][wallet]);

   function addtopurchase(el){

let purprice=localStorage.getItem("purchase");



   }
