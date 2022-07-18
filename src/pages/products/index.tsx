import useProducts from "@/hooks/use-product";
import Link from "next/link";

// client
const ProductPage = () => {
    const { data, error } = useProducts();
    if (error) return <div>failed to load</div>;
    if (!data) return <div>loading...</div>;
    return (
        <div>
            {data.map((item) => (
                <div key={item.id}>
                    <Link href={`/products/${item.id}`}>{item.name}</Link>
                </div>
            ))}
        </div>
    );
};

export default ProductPage;
