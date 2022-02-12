import instance from "./config";

// eslint-disable-next-line import/prefer-default-export
export const signup = (user) => {
    const url = "/signup";
    return instance.post(url, user);
};
export const signin = (user) => {
    const url = "/signin";
    return instance.post(url, user);
};