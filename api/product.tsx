import instance from "./config";

export const getAll = (url) => {
    return instance.get(url);
};
export const add = (product) => {
    return instance.post("/products", product);
};
