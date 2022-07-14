import instance from "./config";

export const getAll = (url) => {
    return instance.get(url);
}