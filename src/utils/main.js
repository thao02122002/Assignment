/* eslint-disable import/no-named-as-default-member */
/* eslint-disable no-unused-vars */
import Navigo from "navigo";

import HomePage from "../pages/home/homepage";
import DetailPage from "../pages/home/detail";
import ProductPage from "../pages/products/productpage";
import SingIn from "../pages/signin";
import SingUp from "../pages/signup";
import AdminHome from "../pages/admin/new";
import detailHome from "../pages/admin/new/edit";
import addHome from "../pages/admin/new/add";
import DetailProduct from "../pages/products/detail";
import Categori from "../components/categori";
import ProductHome from "../pages/admin/product";
// eslint-disable-next-line import/no-named-as-default
import CartPage from "../pages/cart";
import profile from "../pages/profile";
import editProduct from "../pages/admin/product/edit";
import addProduct from "../pages/admin/product/add";
import CategoryHome from "../pages/admin/category";
import editCategory from "../pages/admin/category/edit";
import addCategory from "../pages/admin/category/add";
import AccountHome from "../pages/admin/account";

const router = new Navigo("/", { linksSelector: "a", hash: true });
const print = async (content, id) => {
    // document.querySelector("#header").innerHTML = Header.render();
    document.querySelector("#app").innerHTML = await content.render(id);
    if (content.afterRender) await content.afterRender(id);
};
// router.on("/admin/*/", () => {}, {
//     before(done, match) {
//         if (localStorage.getItem("user")) {
//             const userId = JSON.parse(localStorage.getItem("user")).user.id;
//             if (userId === 8) {
//                 done();
//             } else {
//                 document.location.href = "/";
//             }
//         } else {
//             document.location.href = "/";
//         }
//     },
// });
router.on("/#/admin/*/", () => {}, {
    before(done, match) {
        const userId = JSON.parse(localStorage.getItem("user")).user.id;
        console.log(userId);
        if (userId === 8) {
            done();
        } else {
            document.location.href = "/";
        }
    },
});
router.on({
    "/": () => {
        print(HomePage);
    },

    "/products": () => {
        print(ProductPage);
    },
    "/products/:id": ({ data }) => {
        print(DetailProduct, data.id);
    },
    "/home/:id": ({ data }) => {
        print(DetailPage, data.id);
    },
    "/signin": () => {
        print(SingIn);
    },
    "/signup": () => {
        print(SingUp);
    },
    "/admin/dashboard": () => {
        print(AdminHome);
    },
    "/admin/news/:id/edit": ({ data }) => {
        print(detailHome, data.id);
    },
    "/admin/news/add": () => {
        print(addHome);
    },
    "/cart": () => {
        print(CartPage);
    },
    "/profile": () => {
        print(profile);
    },
    // "/profile/:id/edit": ({ data }) => {
    //     print(editProduct, data.id);
    // },
    "/admin/product": () => {
        print(ProductHome);
    },
    "/admin/product/:id/edit": ({ data }) => {
        print(editProduct, data.id);
    },
    "/admin/product/add": () => {
        print(addProduct);
    },
    "/admin/category": () => {
        print(CategoryHome);
    },
    "/admin/category/:id/edit": ({ data }) => {
        print(editCategory, data.id);
    },
    "/admin/category/add": () => {
        print(addCategory);
    },
    "/admin/account": () => {
        print(AccountHome);
    },
});
router.resolve();

// const API = "https://5e79b4b817314d00161333da.mockapi.io/posts";
// fetch(API)
//    .then((response) => response.json());
//    .then((data) => console.log(data));

// const getProduct = () => new Promise((resolve, reject) => {
//     setTimeout(() => {
//         try {
//             resolve([1, 2, 3, 4]);
//         } catch (error) {
//             reject("Ket noi k thanh cong");
//         }
//     }, 3000);
// });

// const showProduct = async () => {
//     const result = await getProduct();
//     const data = await [...result, 5];
//     console.log(data);
// };
// showProduct;