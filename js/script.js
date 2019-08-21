
  $.ajax({
        type: 'GET',
        url: `http://192.168.33.10:3000/allProducts`,
        dataType: 'json',
        success: function(data){
          console.log(data);
          console.log('success');

          data.map(function(product){
            let nameOfProduct = `<li class="list-group-item d-flex justify-content-between align-items-center">`;
            nameOfProduct += `${product['name']} `;
            nameOfProduct += `<div><button class="btn btn-info ml-3 mr-3">Edit</button><button class="btn btn-danger">Remove</button></div></li>`;
              $('#productList').append(nameOfProduct);
          });
        },
        error: function(error){
          console.log(error);
          console.log('error');
        }
    })


$("#addProduct").click(function(){
  event.preventDefault();
  console.log("button click");
  let productName = $("#productName").val();
  let productPrice = $("#productPrice").val();
  if (productName.length === 0) {
    console.log("error you need to input a name");
  } else if (productPrice.length === 0) {
    console.log("error you need to input a price");
  } else {
    console.log(`${productName} costs $${productPrice}`);
    $.ajax({
      url: '',
      type: 'POST',
      data: {
        name: productName,
        price: productPrice
      },
      success: function(result){

      },
      error: function(error){
        console.log(error);
        console.log("something went wrong with sending the data");
      }
    })
  }

})
