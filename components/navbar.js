function navbar() {
  return `<div id="Navbar">

   <div id="first">
   <a href="The_Make.html"><p id="parag">SUBSCRIBE</p></a>
   </div>

   <div id="logo">
      <a href="index.html"> <img src="https://cdn.shopify.com/s/files/1/0052/7551/6995/files/FABBAG-LOGO_96ac9306-4c81-4ab8-8d2b-4e818eed7f76_2048x.png?v=1606482289"
       alt="Fab bag"></a>
   </div>

   <div id="tools">
       <div>
       <a href="search.html"><i class="fa-solid fa-magnifying-glass" id="search"></i></a>
       </div>
       <div>
           <i class="fa-solid fa-heart"></i>

       </div>

       <div class="dropdown">
           <i class="fa-solid fa-circle-user"></i>

           <div class="dropdown_menu">
               <a href="index.html">Languages: En</a>
               <a href="checkout.html"> Checkout </a>
               <a href="login.html">Sign In </a>
               <a href="creat.html">Create an Account</a>
           </div>

        </div>
       <div id="parag1">
           <p class="Zero">0</p>
           <i class="fa-solid fa-cart-shopping" id="cart_opan"></i>
       </div>
   </div>

</div>

<!-- *******************cart session logo*************** -->

<div class="add_to_cart">
   <div class="add_to_cart_tital">
       <p>My Cart</p>
       <i class="fa-solid fa-x" id="idont"></i>
   </div>
   <div class="product_display">
       <div class="ap_img_name">

       </div>
   </div>
   <div class="total_in">
       <h2>Total:</h2>
       <div>
           <h2>Rs:</h2>
           <h2 id="total_price_in_nev"></h2>
       </div>
    </div>
   <button>view cart</button>
   <button>checkout</button>




</div>`
}


  

export default navbar;
