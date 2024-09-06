const less = document.querySelector("#less");
const right = document.querySelector("#right");
const mainImage = document.querySelector("#mainImage");

const clothes=document.querySelector("#clothes");
const sellers=document.querySelector("#sellers");
let cc=0;
less.addEventListener("click",()=>{
    cc++;
    if(cc==1){
    mainImage.src = "https://m.media-amazon.com/images/I/61CiqVTRBEL._SX3000_.jpg"
        }

    else if(cc==2){
    mainImage.src="https://m.media-amazon.com/images/I/71Ie3JXGfVL._SX3000_.jpg";
        }
    else if(cc==3){
            mainImage.src="https://m.media-amazon.com/images/I/81KkrQWEHIL._SX3000_.jpg";
        }
        else if(cc==4){
            mainImage.src="https://m.media-amazon.com/images/I/61zAjw4bqPL._SX3000_.jpg";
            }
    else{
            mainImage.src = "https://m.media-amazon.com/images/I/71YTsbTxBsL._SX3000_.jpg";
        }
   });

   let cr=0;
   right.addEventListener("click",()=>{
    cr++;
    if(cr==1){
    mainImage.src="https://m.media-amazon.com/images/I/81KkrQWEHIL._SX3000_.jpg";
    }

    else if(cr==2){
    mainImage.src="https://m.media-amazon.com/images/I/61zAjw4bqPL._SX3000_.jpg";
    }
    else if(cr==3){
        mainImage.src = "https://m.media-amazon.com/images/I/61CiqVTRBEL._SX3000_.jpg"
            }

    else if(cr==4){
        mainImage.src="https://m.media-amazon.com/images/I/71Ie3JXGfVL._SX3000_.jpg";
            }
    else{
    mainImage.src="https://m.media-amazon.com/images/I/61P7hqIHrdL._SX3000_.jpg";
    }
   });

   document.getElementById('sign').addEventListener("click", () => {
    document.body.innerHTML = `
        <div id="form">
            <h1 id="h">Create account</h1>
            <form>
                <!-- Text Input -->
                <label for="name" class="ps"><b>Your Name</b></label>
                <br>
                <input type="text" class="input" id="name">
                <br><br>

                <!-- Email Input -->
                <label for="email" class="ps"><b>Mobile number or email</b></label>
                <br>
                <input type="email" class="input" id="email">
                <br><br>

                <!-- Password Input -->
                <label for="password" class="ps"><b>Password</b></label>
                <br>
                <input type="password" class="input" id="password">
                <p class="p">Passwords must be at least 6 characters.</p>
                <br>
                <label for="confirm-password" class="ps"><b>Re-enter password</b></label>
                <br>
                <input type="password" class="input" id="confirm-password">
                <br><br>
                <button id="continue" type="button"><b>Continue</b></button>
                <br><br>
                <p class="p"> By creating an account, you agree to Amazon's
                Conditions of Use and Privacy Notice.</p>
                <br>
                <p class="p"><b>Buying for work?</b>
                <br><br>
                Create a free business account</p>
                <p class="p">Already have an account? Sign in</p>
            </form>
        </div>
    `;
});

const updateContent = () => {
    document.querySelector("#clothes").innerHTML = `
        <i id="les" class="fa-solid fa-less-than"></i>
        <i id="rig" class="fa-solid fa-greater-than"></i>
        <div id="clot">
            <h2 id="sel">Best Sellers in Clothing, Shoes & Jewelry</h2>
            <img src="https://m.media-amazon.com/images/I/810Scj-0BxL._AC_SY200_.jpg" class="sel1">
            <img src="https://m.media-amazon.com/images/I/71L-P84lIXL._AC_SY200_.jpg" class="sel1">
            <img src="https://m.media-amazon.com/images/I/61p2N9v20+L._AC_SY200_.jpg" class="sel1">
            <img src="https://m.media-amazon.com/images/I/71zRMNf2uvL._AC_SY200_.jpg" class="sel1">
            <img src="https://m.media-amazon.com/images/I/81BUjDSpCyL._AC_SY200_.jpg" class="sel1">
            <img src="https://m.media-amazon.com/images/I/71ZtR65CG3L._AC_SY200_.jpg" class="sel1">
            <img src="https://m.media-amazon.com/images/I/81uojej-XEL._AC_SY200_.jpg" class="sel1">
        </div>
    `;
};


const up = () => {
    document.querySelector("#sellers").innerHTML = `
     <i id="left" class="fa-light fa-less-than"></i>
        <i id="more" class="fa-duotone fa-greater-than"></i>
        <div id="s0">
          <h2 id="top">International top sellers</h2>
          <img src="https://m.media-amazon.com/images/I/71ERnlzl+sL._AC_SY200_.jpg" class="sr2">
          <img src="https://m.media-amazon.com/images/I/61VkeWH5chL._AC_SY200_.jpg" class="sr2">
          <img src="https://m.media-amazon.com/images/I/81jRp1AazNL._AC_SY200_.jpg" class="sr2">
          <img src="https://m.media-amazon.com/images/I/61GhF+JUXGL._AC_SY200_.jpg" class="sr2">
          <img src="https://m.media-amazon.com/images/I/61nWmNxYArL._AC_SY200_.jpg" class="sr2">
      </div>
    `;
};

const us = () => {
    document.querySelector("#sellers2").innerHTML = `
     <i id="le" class="fa-light fa-less-than"></i>
          <i id="mo" class="fa-duotone fa-greater-than"></i>
         <div id="s2">
        <h2 id="Kitchen">Best Sellers in Home & Kitchen</h2>
        <img src="https://m.media-amazon.com/images/I/81Cn1+lUraL._AC_SY200_.jpg" class="sr3">
        <img src="https://m.media-amazon.com/images/I/61UFMf2FffL._AC_SY200_.jpg" class="sr3">
        <img src="https://m.media-amazon.com/images/I/71fATgj5scL._AC_SY200_.jpg" class="sr3">
        <img src="https://m.media-amazon.com/images/I/61LokBvQZiL._AC_SY200_.jpg" class="sr3">
        <img src="https://m.media-amazon.com/images/I/71g+fxKPtyL._AC_SY200_.jpg" class="sr3">
     </div>
      `;
};

const ug = () => {
    document.querySelector("#sellers1").innerHTML = `
     <i id="lo" class="fa-light fa-less-than"></i>
          <i id="me" class="fa-duotone fa-greater-than"></i>
         <div id="s1">
        <h2 id="game">Best Seellers in Toys & Games</h2>
        <img src="https://m.media-amazon.com/images/I/71U8lwIA7rL._AC_SY200_.jpg" class="sr2">
        <img src="https://m.media-amazon.com/images/I/71DvGPji2KL._AC_SY200_.jpg" class="sr2">
        <img src="https://m.media-amazon.com/images/I/71gn3jYINhL._AC_SY200_.jpg" class="sr2">
        <img src="https://m.media-amazon.com/images/I/71x-tZaSrGL._AC_SY200_.jpg" class="sr2">
        <img src="https://m.media-amazon.com/images/I/716b7q0+h1L._AC_SY200_.jpg" class="sr2">
    </div>
      `;
};

const fi = () => {
    document.querySelector("#sellers3").innerHTML = `
     <div id="s3">
        <i id="l" class="fa-light fa-less-than"></i>
        <i id="m" class="fa-duotone fa-greater-than"></i>
        <h2 id="comp">Best Sellers in Computers & Accessories</h2>
        <img src="https://m.media-amazon.com/images/I/71jUT5npz-L._AC_SY200_.jpg" class="sr4">
        <img src="https://m.media-amazon.com/images/I/61iKPnq3OuL._AC_SY200_.jpg" class="sr4">
        <img src="https://m.media-amazon.com/images/I/51SI0Zaj1lL._AC_SY200_.jpg" class="sr4">
        <img src="https://m.media-amazon.com/images/I/81OFxhFWmML._AC_SY200_.jpg" class="sr4">
        <img src="https://m.media-amazon.com/images/I/51jd6JrnPrL._AC_SY200_.jpg" class="sr4">
     </div>
      `;
};
document.querySelector("#more").addEventListener("click", up);
document.querySelector("#rig").addEventListener("click", updateContent);
document.querySelector("#mo").addEventListener("click",us);
document.querySelector("#me").addEventListener("click",ug);
document.querySelector("#m").addEventListener("click",fi);

