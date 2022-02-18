// import news from "../../../utils/data";

import navAdmin from "../../../components/navAdmin";
// import addHome from "./add";

import { getAll } from "../../../api/user";

const AccountHome = {
    async  render() {
        const { data } = await getAll();
        return /* html */ `
        ${navAdmin.render()}
        <div class="grid grid-cols-12 pt-40 pb-4">
        <h1 class="col-span-11  ">Quản lý Bài Viết</h1>
       
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
                      Name
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Email
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                   DECENTRALIZATION
                    </th>
                    <th scope="col" class="relative px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ACTION
                      
                    </th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                ${data.map((post, index) => /* html */`
               
                <tr>
                    <td class="px-6 py-4 whitespace-nowrap">
                      ${index + 1}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        ${post.username}
                      </span>
                      </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="text-sm text-gray-900">${post.email}</div>
                    
                    </td>
                    

                    
                    <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <a href="/admin/news/${post.id}/edit" class="text-indigo-600 hover:text-indigo-900"><button class="">Edit</button></a>/<a href="#" class="text-indigo-600 hover:text-indigo-900"><button data-id=${post.id} class="btn btn-remove">Dell</button></a>
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

};
export default AccountHome;