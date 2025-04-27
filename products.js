//products section
const products = document.getElementsByClassName("productCard");


//categoties:
const electronicScheckbox = document.getElementById("electronics");
electronicScheckbox.addEventListener('change', function () {
    if (this.checked) {
        for (let i = 0; i < products.length; i++) {
            if (products[i].classList[1] != "electronics") {
                products[i].style.display = "none";
            }
        }
    } else {
        for (let i = 0; i < products.length; i++) {
            products[i].style.display = "flex";
        }
    }
});

const fashionScheckbox = document.getElementById("fashion");
fashionScheckbox.addEventListener('change', function () {
    if (this.checked) {
        for (let i = 0; i < products.length; i++) {
            if (products[i].classList[1] != "fashion") {
                products[i].style.display = "none";
            }
        }
    } else {
        for (let i = 0; i < products.length; i++) {
            products[i].style.display = "flex";
        }
    }
});

const schoolScheckbox = document.getElementById("school");
schoolScheckbox.addEventListener('change', function () {
    if (this.checked) {
        for (let i = 0; i < products.length; i++) {
            if (products[i].classList[1] != "school") {
                products[i].style.display = "none";
            }
        }
    } else {
        for (let i = 0; i < products.length; i++) {
            products[i].style.display = "flex";
        }
    }
});

const groceryScheckbox = document.getElementById("grocery");
groceryScheckbox.addEventListener('change', function () {
    if (this.checked) {
        for (let i = 0; i < products.length; i++) {
            if (products[i].classList[1] != "grocery") {
                products[i].style.display = "none";
            }
        }
    } else {
        for (let i = 0; i < products.length; i++) {
            products[i].style.display = "flex";
        }
    }
});


const appliancesScheckbox = document.getElementById("appliances");
appliancesScheckbox.addEventListener('change', function () {
    if (this.checked) {
        for (let i = 0; i < products.length; i++) {
            if (products[i].classList[1] != "appliances") {
                products[i].style.display = "none";
            }
        }
        unChickAllbut(this);
    } else {
        for (let i = 0; i < products.length; i++) {
            products[i].style.display = "flex";
        }
    }
});





//this is not working:
let checkboxArray = [
    appliancesScheckbox,
    groceryScheckbox,
    schoolScheckbox,
    fashionScheckbox,
    electronicScheckbox
];

function unChickAllbut(checkbox) {
    console.log("unChickAllbut");
    for (let i = 0; i < checkboxArray.length; i++) {
        if (checkboxArray[i] != checkbox) {
            checkboxArray.checked = false;
        }
    }
}