import { get, update } from "../../../api/category";
import navAdmin from "../../../components/navAdmin";
import { reRender } from "../../../utils";
import CategoryHome from ".";

const editCategory = {
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
                            
                            <input type="text" name="company-website" class="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300 " placeholder="" id="title-post" value="${data.title}">
                          </div>
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
            }).then(
                () => {
                    window.location.href = "/admin/category";
                    reRender(CategoryHome, "#app");
                },
            );
        });
    },
};
export default editCategory;