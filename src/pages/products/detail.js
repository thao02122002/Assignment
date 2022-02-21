import toastr from "toastr";
import { get } from "../../api/product";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Categori from "../../components/categori";
import { addToCart } from "../../utils/cart";
import "toastr/build/toastr.min.css";

const DetailProduct = {
    async render(id) {
        const { data } = await get(id);

        return /* html */`
        <div id="header">${Header.render()}</div>
        <div class="pt-6 pb-4 text-center">
        ${await Categori.render()}
        </div>
            <div class="border border-black grid grid-cols-12 gap-2">
            <div class="px-4 col-span-7">

                <img src="${data.img}" alt="" />
                <p>${data.descdetail}</p>
            </div>
            <div class="col-span-5 my-auto">
                        <h1><strong>${data.name}</strong></h1>
                        <p>${data.desc}</p>
            <span><strong>Giá:<strong></span><span>${data.price} VNĐ</span>
            <div>
            <div class="buttons_added">
  <input class="btn btn-decrease" type="button" value="-">
  <input id="SL" aria-label="quantity" class="input-qty" max="10" min="1" name="" type="number" value="1">
  <input class="btn btn-increase" type="button" value="+">
  <div class="pl-2"><button id="AddToCart" class="border border-black p-2 hover:bg-blue-800 hover:text-white">Thêm vào giỏ hàng</button></div>
  
</div>
            </div>
            </div>
                
            </div>
            <div class="comment py-4 ">
            <form class="grid grid-cols-12">
           
            <input class=" col-span-9 border border-double border-black rounded-lg p-2 " type="text" value="Nhập comment tại đây"> <button class="col-span-1 border border-black" type="submit">Gửi</button>
            </form>
            
            </div>
            <div class="similar-product"></div>
            <div class="pt-6"> ${Footer.render()}</div>
           
        `;
    },
    afterRender(id) {
        const AddToCart = document.querySelector("#AddToCart");
        const SL = document.querySelector("#SL");
        AddToCart.addEventListener("click", async () => {
            const { data } = await get(id);
            // cú pháp để thêm 1 trường quantity vào object
            // quantity sẽ ưu tiên lấy ở input trc còn nếu k thì quantity sẽ mặc định cho input là 1
            addToCart({ ...data, quantity: SL.value ? +SL.value : 1 }, () => {
                toastr.success("Đã thêm vào giỏ hàng");
            });
        });
        Header.afterRender();
    },

};
export default DetailProduct;