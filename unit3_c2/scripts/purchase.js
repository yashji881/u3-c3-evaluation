


let data=JSON.parse(localStorage.getItem("purchase"));

data.forEach(function(el){

let box=document.createElement("div");

let image=document.createElement("img");
image.src=el.image;

let name=document.createElement("h3");
name.innerText=el.name;

let price=document.createElement("h4");
price.innerText=el.price;

box.append(image,name,price);

document.getElementById("purchased_vouchers").append(box);

})