import { add, getItem, removeItem } from "@/api/product";
import useSWR from "swr";
import { PublicConfiguration } from "swr/dist/types";

const useProducts = (options?) => {
    const { data, error, mutate } = useSWR("/products", { dedupingInterval: 2000, ...options });

    // create
    const create = async (item) => {
        const product = await add(item);
        mutate([...data, product]);
    };
    // update
    // delete
    const remove = async (id) => {
        await removeItem(id);
        const newProducts = data.filter((item) => item.id != id);
        mutate(newProducts);
    };
    return {
        data,
        error,
        create,
        remove,
    };
};

export default useProducts;
