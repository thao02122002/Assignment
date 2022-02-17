import { get, update } from "../../../api/product";
import navAdmin from "../../../components/navAdmin";

const editProduct = {
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
                            NAME
                          </label>
                          <div class="mt-1 flex rounded-md shadow-sm">
                            
                            <input type="text" name="company-website" id="company-website" class="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300 " placeholder="" id="title-post">${data.name}
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
                      <div>
                        <label for="about" class="block text-sm font-medium text-gray-700">
                        PRICE
                        </label>
                        <div class="mt-1">
                          <textarea id="desc-post" name="about" rows="3" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md" placeholder="">${data.price}</textarea>
                        </div>
                        
                      </div>
          
                      <div>
                        <label class="block text-sm font-medium text-gray-700">
                          IMAGE
                        </label>
                        <div class="mt-1 flex items-center">
                        <input type="text" 
                                    id="img-post" 
                                    class="border border-black"  
                                    placeholder="Image" 
                                    value="${data.img}"
                                    > 
                            
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
        formEdit.addEventListener("submit", (e) => {
            e.preventDefault();
            // lấy giá trị input file

            update({
                id,
                title: document.querySelector("#title-post").value,
                img: document.querySelector("#img-post").value,
                desc: document.querySelector("#desc-post").value,
            });
        });
    },
};
export default editProduct;