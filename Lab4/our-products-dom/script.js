
var data = fetch("https://fakestoreapi.com/products")
  .then((products) => {
    return products.json();
  })
  .then(function (products) {
    var holder = document.getElementById("holder");
    products.filter((p) => {
        if (p.category != "women's clothing") {
          holder.innerHTML += `
        <div class="col-lg-3 col-md-6 special-grid best-seller">
                <div class="products-single fix">
                    <div class="box-img-hover">
                        <img id="p_img" src="${p.image}" class="img-fluid" alt="Image" style="width: 100px; height: 100px;">
                    </div>
                    <div class="why-text">
                        <h4> ${p.title} </h4>
                        <h5> $ ${p.price} </h5>
                    </div>
                </div>
            </div>
            `;
        }
     
    });
  });
