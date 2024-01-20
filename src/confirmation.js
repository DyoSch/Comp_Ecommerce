//Alert untuk Konfirmasi ketika menambahkan barang ke Wishlist
function addWishlist() {
  alert("Your product has been added to Wishlist");
}

//Alert untuk mengisi kuantitas barang ketika menambahkan barang ke Cart (Keranjang)
function addCart() {
  var quantity = prompt("How many product(s) do you want?");

  if (quantity === null) {
    alert("Canceled");
  } else {
    if (isNaN(quantity) || quantity == "") {
      alert("Wrong input, please try again");
    } else {
      alert("Your added " + quantity + " of this product to the Cart");
    }
  }
}

//Alert untuk Konfirmasi ketika sudah membeli barang
function buy() {
  alert("Thank You for puschasing product(s) from MyStore :)");
}
