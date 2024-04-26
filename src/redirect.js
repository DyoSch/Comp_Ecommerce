//Untuk Keperluan Autentikasi Login
function login() {
  var emailInput = document.getElementById("inpEmail").value;
  var passwordInput = document.getElementById("inpPass").value;

  if (emailInput === "tes" && passwordInput === "123") {
    window.location.href = "home.html";
  } else {
    alert("Your Email or Password might be wrong, please try again");
  }
}

//Menuju tampilan User Profile
function redirectToUser() {
  window.location.href = "user.html";
}

//Menuju tampilan Cart (Keranjang)
function redirectToCart() {
  window.location.href = "cart.html";
}

//Menuju tampilan Wishlist
function redirectToWishList() {
  window.location.href = "wishlist.html";
}

//Fungsi Filter produk yang ada di halaman Home, sementara berfungsi sebagai reload tampilan
function filteredHome() {
  window.location.href = "index.html";
}
