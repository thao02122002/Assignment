import axios from "axios";
import { get, update } from "../../../api/posts";
import navAdmin from "../../../components/navAdmin";

const detailHome = {
    async  render(id) {
        const { data } = await get(id);

        return /* html */`
            
            ${navAdmin.render()}
            <div class="md:grid md:grid-cols-3 md:gap-6 pt-40">
              
              <div class="mt-5 md:mt-0 md:col-span-3">
                <form action="#" method="POST" id="form-edit">
                  <div class="shadow sm:rounded-md sm:overflow-hidden">
                    <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                      <div class="grid grid-cols-3 gap-6">
                        <div class="col-span-3 sm:col-span-2">
                          <label for="company-website" class="block text-sm font-medium text-gray-700">
                            Title
                          </label>
                          <div class="mt-1 flex rounded-md shadow-sm">
                            
                            <input type="text" name="company-website"  class="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300 " placeholder="" id="title-post" value="${data.title}">
                          </div>
                        </div>
                      </div>
          
                      <div>
                        <label for="about" class="block text-sm font-medium text-gray-700">
                        DESCRIPTION
                        </label>
                        <div class="mt-1">
                          <textarea id="desc-post" name="about" rows="3" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md" placeholder="">${data.desc}</textarea>
                        </div>
                        
                      </div>
          
                      <div>
                        <label class="block text-sm font-medium text-gray-700">
                          Image
                        </label>
                        <div class="mt-1 flex items-center">
                        <input type="file" 
                                    id="img-post" 
                                    class="border border-black"  
                                    placeholder="Image" 
                                   
                                    > <img id="img-preview" src="${data.img}" width="200px">
                            
                          <button type="button" class="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Change
                          </button>
                        </div>
                      </div>
          
                    
                    <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                      <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Update
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          
          
          
        `;
    },
    afterRender(id) {
        const formEdit = document.querySelector("#form-edit");
        const newImage = document.querySelector("#img-post");
        const imgPreview = document.querySelector("#img-preview");
        const CLOUDINARY_API_URL = "https://api.cloudinary.com/v1_1/dfpphware/image/upload";
        const CLOUDINARY_PRESET = "web16309-thao";
        let newImageLink = "";
        // handle sự kiện change xem ảnh trên local
        newImage.addEventListener("change", (e) => {
            imgPreview.src = URL.createObjectURL(e.target.files[0]);
        });
        formEdit.addEventListener("submit", async (e) => {
            e.preventDefault();
            // lấy giá trị input file
            const file = newImage.files[0];
            if (file) {
                const formData = new FormData();
                formData.append("file", file);
                formData.append("upload_preset", CLOUDINARY_PRESET);
                // call api cho cloundinary
                const { data } = await axios.post(CLOUDINARY_API_URL, formData, {
                    headers: {
                        "Content-Type": "application/form-data",
                    },
                });

                newImageLink = data;
            }
            update({
                id,
                title: document.querySelector("#title-post").value,
                // eslint-disable-next-line no-undef
                img: newImageLink ? newImageLink.url : newImage.src,
                desc: document.querySelector("#desc-post").value,
            });
        });
    },
};
export default detailHome;