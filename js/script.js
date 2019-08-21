  $.ajax({
        type: 'GET',
        url: `http://192.168.33.10:3000/allProducts`,
        dataType: 'json',
        success: function(data){
          console.log(data);
          console.log('success');
          data.map(function(product){
            let nameOfProduct = `<li class="list-group-item d-flex justify-content-between align-items-center">`;
            nameOfProduct += `${product['name']}`;
            nameOfProduct += '<div><button class="btn btn-info">Edit</button><button class="btn btn-danger">Remove</button></div></li>';
              $('#productList').append(nameOfProduct);
          });
        },
        error: function(error){
          console.log(error);
          console.log('error');
        }
    })
