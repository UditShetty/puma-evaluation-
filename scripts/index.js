//store the products array in localstorage as "products"
// step1: catch the data from input
function storeData(e){
e.preventDefault()
console.log("trigggered")
let form= document.getElementById("products")

let type= form.type.value
let desc= form.desc.value
let price= form.price.value
let image= form.image.value

//console.log(type,desc,price,image)
let s1= new Products(type,desc,price,image)
var data=JSON.parse(localStorage.getItem("products")) || []

data.push(s1)

localStorage.setItem("products", JSON.stringify(data))
window.location.reload()

console.log(s1)
}

//  step2: create a construct function object for showing the data

function Products(type,desc,price,image){
    this.type=type
    this.desc= desc
    this.price= price
    this.image= image
}
