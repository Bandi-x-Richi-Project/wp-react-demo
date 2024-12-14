import { useState, useEffect } from "react";
import { DataView } from "primereact/dataview";
import { Rating } from "primereact/rating";
import { ProductService } from "../mock/products";

interface Product {
  id: string;
  code: string;
  name: string;
  description: string;
  image: string;
  price: number;
  category: string;
  quantity: number;
  inventoryStatus: string;
  rating: number;
}

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    ProductService.getProductsSmall().then((data) =>
      setProducts(data.slice(0, 5))
    );
  }, []);

  const itemTemplate = (product: Product) => {
    return (
      <div className="col-12 -my-2" key={product.id}>
        <div className="flex flex-row xl:align-items-start py-4 gap-4">
          <img
            className="w-3 sm:w-6rem xl:w-6rem shadow-2 block border-round"
            src={`https://primefaces.org/cdn/primereact/images/product/${product.image}`}
            alt={product.name}
          />
          <div className="flex sm:flex-row justify-content-between align-items-center flex-1 gap-4">
            <div className="flex flex-column align-items-center sm:align-items-start gap-1">
              <div className="text-lg font-semibold text-700">
                {product.name}
              </div>
              <Rating value={product.rating} readOnly cancel={false}></Rating>
            </div>
            <div className="flex items-center justify-center h-full">
              <span className="text-lg font-semibold items-center">
                ${product.price}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const listTemplate = (items: Product[]) => {
    if (!items || items.length === 0) return null;

    const list = items.map((product) => {
      return itemTemplate(product);
    });

    return <div className="grid grid-nogutter">{list}</div>;
  };

  return <DataView value={products} listTemplate={listTemplate} />;
};

export default ProductList;
