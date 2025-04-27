let totalPrice = 0;
let totalQuantity = 0;
const dropDown = document.getElementById("dropDownCart");

let flag = true;
function DropDownCart(){
    console.log("DropDownCart");

    if(flag){
        dropDown.style.display = ("block");
        flag = !flag;
    }else{
        dropDown.style.display = ("none");
        flag = !flag;
    }
};

// function AddToCart(e){
//     let thisPrice = Number(e.target.parentElement.parentElement.querySelector(".productPrice").innerText);
//     totalPrice += thisPrice;
//     localStorage.total_price = totalPrice;
//     document.querySelector("#cartLogo span").innerText++;

//     console.log(totalPrice);

//     const productRow = document.createElement("tr");

//     productRow.append(
//         e.target.parentElement.parentElement.querySelector(".productPrice"),
//         document.querySelector("#cartLogo span").innerText++,
//         e.target.parentElement.parentElement.parentElement.querySelector(".productImg img"),
//         document.createElement("button"),
//     );

//     dropDown.append(productRow)
// }



function AddToCart(e) {
    let thisPrice = Number(e.target.parentElement.parentElement.querySelector(".productPrice").innerText);
    totalPrice += thisPrice;
    localStorage.total_price = totalPrice;
    // document.querySelector("#cartLogo span").innerText++;
    totalQuantity++;
    localStorage.cartLogoNumber = totalQuantity;
    document.getElementById("cartLogoNumber").innerText = totalQuantity;

    console.log(totalPrice);

    const productRow = document.createElement("tr");

    
    const priceClone = e.target.parentElement.parentElement.querySelector(".productPrice").cloneNode(true);
    const imgClone = e.target.parentElement.parentElement.parentElement.querySelector(".productImg img").cloneNode(true);
    const quantityCell = document.createElement("td");
    quantityCell.innerText = "1";
    const buttonCell = document.createElement("td");
    const removeButton = document.createElement("button");
    removeButton.innerText = "Remove";
    
    removeButton.onclick = removeProduct;

    buttonCell.appendChild(removeButton);

    const priceCell = document.createElement("td");
    priceCell.append(priceClone);
    const imgCell = document.createElement("td");
    imgCell.append(imgClone);

    productRow.append(
        priceCell,
        quantityCell,
        imgCell,
        buttonCell
    );

    dropDown.append(productRow);

    document.getElementById("showTotalPrice").innerText = totalPrice;
}


function removeProduct(){
    
}

