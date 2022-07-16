import useSWR from "swr";
import { add } from "../api/product";
interface IProduct {
    id?: number;
    name: string;
}
const useProducts = () => {
    const { data, error, mutate } = useSWR("/products");

    // create
    const create = async (item: IProduct) => {
        const product = await add(item);
        mutate([...data, product]);
    };

    return {
        create,
        data,
        error,
    };
};

export default useProducts;
