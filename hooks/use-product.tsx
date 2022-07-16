import useSWR, { useSWRConfig } from "swr";
import { add, getAll } from "../api/product";

const useProducts = () => {
    // swr - api
    const fetcher = async (url: string) => {
        const { data } = await getAll(url);
        return data;
    };
    const { data, error, mutate } = useSWR("/products", fetcher, {
        dedupingInterval: 5000,
    });

    // create
    const create = async (item) => {
        const { data: product } = await add(item);
        return [...data, product];
    };

    return {
        create,
        data,
        error,
        mutate,
    };
};

export default useProducts;
