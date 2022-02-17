import axios from "axios";
import { add } from "../../../api/posts";
import navAdmin from "../../../components/navAdmin";
import { reRender } from "../../../utils";
import AdminHome from "./index";

const addHome = {
    async  render() {
        return /* html */`
        
        ${navAdmin.render()}
        <h1 class="pt-40 pb-4">Thêm mới bài viết</h1>
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
      
                  <div>
                    <label for="about" class="block text-sm font-medium text-gray-700">
                    DESCRIPTION
                    </label>
                    <div class="mt-1">
                      <textarea id="desc-post" name="about" rows="3" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md" placeholder=""></textarea>
                    </div>
                    
                  </div>
      
                  <div>
                    <label class="block text-sm font-medium text-gray-700">
                      Image
                    </label>
                    <div class="mt-1 flex items-center">
                     <input class="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" type="file" id="img-post">
                        
                    
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

        const CLOUDINARY_API = "https://api.cloudinary.com/v1_1/dfpphware/image/upload";
        const CLOUDINARY_PRESET = "web16309-thao";

        formAdd.addEventListener("submit", async (e) => {
            e.preventDefault();
            // lấy giá trị input file
            const file = document.querySelector("#img-post").files[0];

            // tạo object và gắn giá trị vào các thuộc tính của formData
            const formData = new FormData();
            formData.append("file", file);
            formData.append("upload_preset", CLOUDINARY_PRESET);
            // CALL api cloudinary để đẩy ảnh lên
            const { data } = await axios.post(CLOUDINARY_API, formData, {
                headers: {
                    "Content-Type": "application/form-data",
                },
            });
            // call api thêm bài viết
            add({
                title: document.querySelector("#title-post").value,
                img: data.url,
                desc: document.querySelector("#desc-post").value,
            }).then(
                () => {
                    window.location.href = "/admin/dashboard";
                    reRender(AdminHome, "#app");
                },
            );
        });
    },
};
export default addHome;