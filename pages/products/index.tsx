import { GetStaticProps, GetStaticPropsContext } from "next";
import React from "react";

type ProductsProps = {
    products: any[];
};

// client
const ProductPage = ({ products }: ProductsProps) => {
    console.log("Product page client");
    console.log("products", products);
    if (!products) return null;
    return (
        <div>
            {products.map((item) => (
                <div key={item.id}>{item.name}</div>
            ))}
        </div>
    );
};

// Chạy ở server
export const getStaticProps: GetStaticProps<ProductsProps> = async (
    context: GetStaticPropsContext
) => {
    console.log("Get static props - server");
    return {
        props: {
            products: [
                { id: 1, name: "Product A" },
                { id: 2, name: "product B" },
            ],
        },
    };
};

export default ProductPage;
