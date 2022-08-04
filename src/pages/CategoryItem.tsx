import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

type Product = {
    id: number;
    title: string;
    price: number;
    categoryId: number;
    image: string;
    description: string;
}

type categoryItem = {
    id: number;
    name: string;
  };

export function CategoryItem(){
 
    const [products, setProducts] = useState<Product[]>([])
    const [categories, setCategories] = useState<categoryItem[]>([]);
    const params = useParams()

    useEffect(() => {
        fetch(``)
    }, [])
    return(

    )
}