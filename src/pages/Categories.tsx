import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type categoryItem = {
  id: number;
  name: string;
};

export function Categories() {
  const [categories, setCategories] = useState<categoryItem[]>([]);

  useEffect(() => {
    fetch("http://localhost:4000/categories")
      .then((resp) => resp.json())
      .then((categoryFromServer) => setCategories(categoryFromServer));
  }, []);

  return (
    //         <section class="categories-container main-wrapper">
    //     <ul class="categories-container__list">
    //       <!-- Single category -->
    //       <li>
    //         <!-- Use the Link component from React Router to create
    //               the anchor tags
    //         -->
    //         <a href="/categories/1">electronics</a>
    //       </li>
    //       <!--  -->
    //       <li>
    //         <a href="/categories/2">jewelery</a>
    //       </li>
    //       <!--  -->
    //       <li>
    //         <a href="/categories/3">men's clothing</a>
    //       </li>
    //       <!--  -->
    //       <li>
    //         <a href="/categories/4">women's clothing</a>
    //       </li>
    //       <!--  -->
    //     </ul>
    //   </section>
    <div className="categories-container">
      <ul className="categories-container__list">
        {categories.map((category) => (
          <li>
            <Link to={`/categories/${category.id}`}>
              <a>{category.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
