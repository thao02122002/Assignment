import { get } from "../../api/product";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Categori from "../../components/categori";

const DetailProduct = {
    async render(id) {
        const { data } = await get(id);

        return /* html */`
        ${Header.render()}
        <div class="pt-6 pb-4 text-center">
        ${Categori.render()}
        </div>
            <div class="border border-black grid grid-cols-12 gap-2">
            <div class="px-4 col-span-7">
            <h1><strong>${data.name}</strong></h1>
                <img src="${data.img}" alt="" />
                <p>${data.desc}</p>
            </div>
            <div class="col-span-5 my-auto">
            <span><strong>Giá:<strong></span><span>${data.price}</span>
            <div>
            <div class="buttons_added">
  <input class="minus is-form" type="button" value="-">
  <input aria-label="quantity" class="input-qty" max="10" min="1" name="" type="number" value="1">
  <input class="plus is-form" type="button" value="+">
  <div class="pl-2"><button class="border border-black p-2 hover:bg-blue-800 hover:text-white">Thêm vào giỏ hàng</button></div>
  
</div>
            </div>
            </div>
                
            </div>
            <div class="comment py-4 ">
            <form class="grid grid-cols-12">
            <img class="col-span-2 rounded-full border " src="https://thumbnails.kpopmap.com/2020/06/Screen-Shot-2020-06-01-at-8.54.14-PM-680x384.png" width="80px">
            <input class=" col-span-9 border border-double border-black rounded-lg p-2 " type="text" value="Nhập comment tại đây"> <button class="col-span-1 border border-black" type="submit">Gửi</button>
            </form>
            
            </div>
            <div class="similar-product"></div>
            <div class="pt-6"> ${Footer.render()}</div>
           
        `;
    },

};
export default DetailProduct;