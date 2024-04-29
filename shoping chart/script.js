/* Image Filter Section */

const allFilterItems = document.querySelectorAll('.filter-item');
const allFilterBtns = document.querySelectorAll('.filter-btn');

window.addEventListener('DOMContentLoaded', () => {
    allFilterBtns[1].classList.add('active-btn');
});

allFilterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        showFilteredContent(btn);
    });
});

function showFilteredContent(btn){
    allFilterItems.forEach((item) => {
        if(item.classList.contains(btn.id)){
            resetActiveBtn();
            btn.classList.add('active-btn');
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}

function resetActiveBtn(){
    allFilterBtns.forEach((btn) => {
        btn.classList.remove('active-btn');
    });
}


/* Shopping Cart Section */
if (document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded' , ready);
}

else{
    ready();
}


 function ready(){
    var removeCartItemButton = document.getElementsByClassName('btn-danger');
    for (var i = 0 ; i < removeCartItemButton.length; i++){
        var button = removeCartItemButton[i];
        button.addEventListener('click', removeCartItem)
    }

    var quantityInputs = document.getElementsByClassName('cart-quantity-input');
    for(var i = 0 ;i < quantityInputs.length ; i++){
        var input = quantityInputs[i];
        input.addEventListener('change', quantityChanged);
    }
    
    var addToCartButtons = document.getElementsByClassName('shop-item-button');
    for(var i = 0; i< addToCartButtons.length; i++){
        var button = addToCartButtons[i];
        button.addEventListener('click',addToCartClicked)
    }

    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
 }


 function purchaseClicked(){
     alert('Thank you for your purchase!!!');
     var cartItems = document.getElementsByClassName('cart-items')[0];
     while(cartItems.hasChildNodes()){
         cartItems.removeChild(cartItems.firstChild)
     }
     updateCartTotal();
 }

function removeCartItem(event){
    var buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.remove();
    updateCartTotal();
    
}

function  quantityChanged(event){
    var input = event.target;
    if(isNaN(input.value) || input.value <= 0 ){
        input.value = 1;
    }
    updateCartTotal();
}


function addToCartClicked(event){
    var button = event.target;
    var shopItem = button.parentElement.parentElement;
    var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText;
    var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText;
    var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src;
    addItemToCart(title,price,imageSrc);
    updateCartTotal();
}

function addItemToCart(title, price, imageSrc){
    var cartRow = document.createElement('tr');
    cartRow.classList.add('cart-row');
    var cartItems = document.getElementsByClassName('cart-items')[0];
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title');

    for (i = 0; i< cartItemNames.length ; i++){
        if(cartItemNames[i].innerText == title){
            alert('This item already has added to the cart!');
            return
        }
    }
    var cartRowContents = `

        <td class="cart-item cart-column">
            <img class="cart-item-image" src="${imageSrc}" width="50" height="50">
            <span class="cart-item-title">${title}</span>                  
        </td>
        <td class="cart-item cart-column">
            <span class="cart-price cart-column">${price}</span>
        </td>
        <td class="cart-item cart-column">
            <input class="cart-quantity-input" type="number" value="1" style="width: 50px">
            <button class="btn btn-danger" type="button">Remove</button>
        </td>        
    `;
     
            
    cartRow.innerHTML = cartRowContents;
    cartItems.append(cartRow);
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem);
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
}


function updateCartTotal(){
    var cartItemContainer = document.getElementsByClassName('cart-items')[0];
    var cartRows = cartItemContainer.getElementsByClassName('cart-row');
    var total = 0;
    for (var i = 0 ; i< cartRows.length ; i++){
        var cartRow =cartRows[i];
        var priceElement = cartRow.getElementsByClassName('cart-price')[0];
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0];
        var price = parseFloat(priceElement.innerText.replace('R' , ''))
        var quantity = quantityElement.value;
        total = total + (price * quantity);
         
    }
    
    total = Math.round(total * 100 )/100;
    document.getElementsByClassName('cart-total-price')[0].innerText = 'R'+ total + '.00';
}

    if (total >= 2000) { // Check if total price is greater than or equal to 900 (for 2 products at regular price)
        total *= 0.75; // Apply 25% discount
    }
    const discountAmount = price * 0.25; // Calculate discount amount
                document.querySelector('.discount-amount').textContent = 'Discount: R' + discountAmount.toFixed(2);
                document.querySelector('.discount-amount').style.display = 'block';
 



const loginButton = document.getElementById('loginButton');
const loginForm = document.getElementById('loginForm');

loginButton.addEventListener('click', function() {
  loginForm.style.display = 'block';
});



function showLoginForm() {
    const loginForm = document.getElementById('loginForm');
    loginForm.style.display = 'block';

  }



  function showLoginForm() {
    document.getElementById("registrationForm").style.display = "block";
  }

  function validateEmail() {
    var email = document.getElementById("email").value;
    var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!pattern.test(email)) {
      alert("Please enter a valid email address.");
      return false;
    }
    return true;
  }

  function subscribeToNewsletter() {
    var email = document.getElementById("newsletterEmail").value;
    var firstName = document.getElementById("newsletterFirstName").value;
    var surname = document.getElementById("newsletterSurname").value;

    // Regular expression pattern for email validation
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Check if email is empty or does not match the pattern
    if (!email || !emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // If all validations pass, you can proceed with the subscription
    // Here you can add code to submit the form or make an AJAX call to handle subscription
    alert("Subscription successful! Thank you, " + firstName + " " + surname + ".");
}