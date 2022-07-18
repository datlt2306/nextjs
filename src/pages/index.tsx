import useProducts from "@/hooks/use-product";
import styles from "../styles/Home.module.css";

const Home = () => {
    const { data: products, error, create, remove } = useProducts();
    if (!products) return <div>Loading...</div>;
    if (error) return <div>error</div>;

    return (
        <div className={styles.container}>
            {products.map((product, index) => (
                <div key={index}>
                    {product.name} <button onClick={() => remove(product.id)}>Delete</button>
                </div>
            ))}
            <button onClick={() => create({ id: 12, name: "Product 12" })}>Create</button>
        </div>
    );
};
export default Home;
