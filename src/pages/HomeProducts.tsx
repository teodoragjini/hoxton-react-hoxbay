import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type Product = {
  id: number;
  title: string;
  price: number;
  categoryId: number;
  image: string;
  description: string;
};

export function HomeProducts() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("http://localhost:4000/products")
      .then((resp) => resp.json())
      .then((productsFromServer) => setProducts(productsFromServer));
  }, []);

  return (
    // <section class="products-container main-wrapper">
    // <ul class="products-container__list">
    //   <!-- Single item -->
    //   <li>
    //     <a href="/products/1"
    //       ><article class="product-item">
    //         <img
    //           src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
    //           alt="Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
    //         />
    //         <h3>Fjallraven - Foldsack...</h3>
    //       </article></a
    //     >
    //   </li>

    <div className="products-container">
      <ul className="products-container__list">
        {products.map((product) => (
          <li className="product-item">
            <Link to={`/products/${product.id}`}>
              <img src={product.image}/>
              <h3>{product.title}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

