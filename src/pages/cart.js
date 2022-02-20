import toastr from "toastr";
import { reRender } from "../utils";

import { decreaseQuantity, increaseQuantity, removeItem } from "../utils/cart";
import "toastr/build/toastr.min.css";
import Header from "../components/header";
import Footer from "../components/footer";

const CartPage = {
    render() {
        let cart = [];
        if (localStorage.getItem("cart")) {
            cart = JSON.parse(localStorage.getItem("cart"));
        }
        return/* html */ `
         <div id="header">${Header.render()}</div>
        <div class="py-36">
        <div class="flex flex-col">
        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table class="min-w-full divide-y divide-gray-200">
                <thead class="bg-gray-50 py-100">
                  <tr>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Tên sản phẩm
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Hình ảnh
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      giá
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Số lượng
                    </th>
                    <th scope="col" class="relative px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ACTION
                      
                    </th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                ${cart.map((item) => /* html */`
               
                <tr>
                    <td class="px-6 py-4 whitespace-nowrap">
                     ${item.name}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <img src="${item.img}" class="px-2 inline-flex text-xs leading-5 font-semibold  bg-green-100 text-green-800" width="120px">
                        
                      
                      </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="text-sm text-gray-900">${item.price}</div>
                    
                    </td>
                    

                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                     <div class="buttons_added">
  <input data-id="${item.id}" class=" btn btn-decrease " type="button" value="-">
  <input  aria-label="quantity" class="input-qty" max="10" min="1" name="" type="number" value="${item.quantity}">

  <input data-id="${item.id}" class="btn btn-increase " type="button" value="+">
   
  
  
</div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                   <input data-id="${item.id}" class="btn btn-remove" type="button" value="Xóa">
                    </td>
                  </tr>
      
                  <!-- More people... -->
                  `).join("")}
                </tbody>
              </table>
              </div>
            </div>
          </div>
        </div>
        </div>
        ${Footer.render()}
        
        `;
    },
    afterRender() {
        Header.afterRender();
        const btns = document.querySelectorAll(".btn");
        btns.forEach((btn) => {
            const { id } = btn.dataset;
            btn.addEventListener("click", () => {
                if (btn.classList.contains("btn-increase")) {
                    increaseQuantity(id, () => {
                        reRender(CartPage, "#app");
                        toastr.success("Tăng số lượng thành công");
                    });
                } else if (btn.classList.contains("btn-decrease")) {
                    decreaseQuantity(id, () => {
                        reRender(CartPage, "#app");
                        toastr.success("Giảm số lượng thành công");
                    });
                } else if (btn.classList.contains("btn-remove")) {
                    removeItem(id, () => {
                        reRender(CartPage, "#app");
                        toastr.success("Xóa sản phẩm thành công");
                    });
                }
            });
        });
    },
};
export default CartPage;