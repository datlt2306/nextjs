import Link from "next/link";
import useProducts from "../../hooks/use-product";

const Products = () => {
    const { data, error, create } = useProducts();

    if (!data) return <div>Loading...</div>;
    if (error) return <div>Failed to load</div>;

    return (
        <div>
            {data.map((item) => (
                <div key={item.id}>
                    <Link href={`/products/${item.id}`}>{item.name}</Link>
                </div>
            ))}
            <button onClick={() => create({ name: "Product 4" })}>Add Product</button>
        </div>
    );
};
export default Products;
