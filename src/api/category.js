import instance from "./config";

export const getAll = () => {
    const url = "/categorys";
    return instance.get(url);
};
export const get = (id) => {
    const url = `/categorys/${id}`;
    return instance.get(url);
};
export const add = (post) => {
    const url = "/categorys";
    return instance.post(url, post);
};
export const remove = (id) => {
    const url = `/categorys/${id}`;
    return instance.delete(url);
};
export const update = (post) => {
    const url = `/categorys/${post.id}`;
    return instance.put(url, post);
};