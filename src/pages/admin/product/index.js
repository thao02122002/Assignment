// import news from "../../../utils/data";
import toastr from "toastr";

import navAdmin from "../../../components/navAdmin";
// import addHome from "./add";
import "toastr/build/toastr.min.css";
import { getAll, remove } from "../../../api/product";
import { reRender } from "../../../utils";

const ProductHome = {
    async  render() {
        const { data } = await getAll();
        return /* html */ `
        ${navAdmin.render()}
        <div class="grid grid-cols-12 pt-40 pb-4">
        <h1 class="col-span-11  ">Quản lý Sản Phẩm</h1>
        <a href="/admin/product/add"><button type="submit" class="col-span-1 p-2 border border-black">Thêm Mới</button></a>
        </div>
        
        <div class="flex flex-col">
        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table class="min-w-full divide-y divide-gray-200">
                <thead class="bg-gray-50">
                  <tr>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      ID
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Title
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Image
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    DESCRIPTION
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    PRICE
                    </th>
                     <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Category
                    </th>
                    <th scope="col" class="relative px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ACTION
                      
                    </th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                ${data.map((post) => /* html */`
               
                <tr>
                    <td class="px-6 py-4 whitespace-nowrap">
                      ${post.id}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        ${post.name}
                      </span>
                      </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="text-sm text-gray-900"><img src="${post.img}" alt="" width="500px"></div>
                    
                    </td>
                    

                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      ${post.desc}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      ${post.price}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      ${post.categoryId}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <a href="/admin/product/${post.id}/edit" class="text-indigo-600 hover:text-indigo-900"><button class="">Edit</button></a>/<a href="#" class="text-indigo-600 hover:text-indigo-900"><button data-id=${post.id} class="btn btn-remove">Dell</button></a>
                    </td>
                  </tr>
      
                  <!-- More people... -->
                  `).join("")}
                </tbody>
              </table>
              </div>
            </div>
          </div>
        </div> `;
    },
    afterRender() {
        // lấy toàn bộ button thông qua class
        const btns = document.querySelectorAll(".btn");
        // tạo vòng lặp để lấy từng button element
        btns.forEach((btn) => {
            // lấy giá trị ID thông qua thuộc tính data-id của button
            const { id } = btn.dataset;
            btn.addEventListener("click", () => {
                const confirm = window.confirm("Bạn có chắc chắn muốn xóa không?");
                if (confirm) {
                    remove(id).then(() => {
                        toastr.success("Bạn đã xóa thành công");
                    }).then(() => {
                        reRender(ProductHome, "#app");
                    });
                }
            });
        });
    },
};
export default ProductHome;