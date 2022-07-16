import instance from "./config";
export const add = (product) => {
    return instance.post("/products", product);
};
