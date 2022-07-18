import React from "react";
import useSWR from "swr";
import instance from "../api/instance";
import { add, removeItem } from "../api/product";

const useProducts = () => {
    const { data, error, mutate } = useSWR("/products");

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
