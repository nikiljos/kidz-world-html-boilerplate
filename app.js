let cartData={}
let total=0,cartQty=0

document.getElementById("products").onclick=(e)=>{console.log();
    if (e.target.matches(".add-btn") || e.target.matches(".add-btn *")) {
        let addBtn;
        if(e.target.matches(".add-btn")){
            addBtn = e.target;
        }
        else{
            addBtn = e.target.parentElement;
        }
        let addData = addBtn.parentElement.parentElement.innerText.split("\n");
        let price = Number(addData[2].slice(1));
        if (cartData.hasOwnProperty(addData[0])) {
            cartData[addData[0]] += 1;
        } else {
            cartData[addData[0]] = 1;
        }
        total += price;
        cartQty++;
        document.getElementById("cart-qty").innerText = cartQty;
    }
    
}

document.querySelector(".cart").onclick=()=>{
    Object.keys(cartData).forEach(key=>{
        console.log(`Item name: ${key} - Quantity: ${cartData[key]}`)
    })
    let dollars=Math.floor(total)
    let cents=Math.round((total%1)*100)
    console.log(`The total amount is ${dollars}$ and ${cents}`)
}