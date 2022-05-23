function append(){
    var data=JSON.parse(localStorage.getItem("products")) || []

    var container=document.querySelector("#container")
    //console.log(data)
    data.forEach(function (elem,index){
        //console.log(elem)
        let div= document.createElement("div")

        let image= document.createElement("img")
        image.src=elem.image

        let type= document.createElement("p")
        type.innerText=elem.type

        let desc= document.createElement("p")
        desc.innerText=elem.desc

        let price= document.createElement("p")
        price.innerText=elem.price

        var btn=document.createElement("button")
        btn.innerText="Remove"
        btn.addEventListener("click", function(){
            remove(index)
        })

        div.append(image,type,desc,price,btn)

        container.append(div)
    })

}
append()

function remove(index){
    var data=JSON.parse(localStorage.getItem("products")) || []

    data.splice(index,1)

    localStorage.setItem("products",JSON.stringify(data))

    window.location.reload()

}


