// import axios from "axios";
import toastr from "toastr";
import { add } from "../../../api/category";
import navAdmin from "../../../components/navAdmin";
import { reRender } from "../../../utils";
import CategoryHome from "./index";
import "toastr/build/toastr.min.css";

const addCategory = {
    async  render() {
        return /* html */`
        
        ${navAdmin.render()}
        <h1 class="pt-40 pb-4">Thêm mới dah mục</h1>
        <div>
        <div class="md:grid md:grid-cols-3 md:gap-6 ">
          
          <div class="mt-5 md:mt-0 md:col-span-3">
            <form action="#" method="POST" id="form-add">
              <div class="shadow sm:rounded-md sm:overflow-hidden">
                <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                  <div class="grid grid-cols-3 gap-6">
                    <div class="col-span-3 sm:col-span-2">
                      <label for="company-website" class="block text-sm font-medium text-gray-700">
                        Title
                      </label>
                      <div class="mt-1 flex rounded-md shadow-sm">
                        
                        <input type="text" id="title-post" name="company-website" id="company-website" class="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300" placeholder="">
                      </div>
                    </div>
                  </div>
      
                  
      
                  
      
                  
                <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button type="submit"  class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Add
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
        `;
    },
    afterRender() {
        const formAdd = document.querySelector("#form-add");

        // const CLOUDINARY_API = "https://api.cloudinary.com/v1_1/dfpphware/image/upload";
        // const CLOUDINARY_PRESET = "web16309-thao";

        formAdd.addEventListener("submit", async (e) => {
            e.preventDefault();
            // lấy giá trị input file
            // const file = document.querySelector("#img-post").files[0];

            // tạo object và gắn giá trị vào các thuộc tính của formData
            // const formData = new FormData();
            // formData.append("file", file);
            // formData.append("upload_preset", CLOUDINARY_PRESET);
            // CALL api cloudinary để đẩy ảnh lên
            // eslint-disable-next-line no-unused-vars
            // const { data } = await axios.post(CLOUDINARY_API, formData, {
            //     headers: {
            //         "Content-Type": "application/form-data",
            //     },
            // });
            // call api thêm bài viết
            add({
                title: document.querySelector("#title-post").value,

            }).then(
                () => {
                    toastr.success("Bạn đã thêm thành công");
                    window.location.href = "/admin/category";
                    reRender(CategoryHome, "#app");
                },
            );
        });
    },
};
export default addCategory;