import Header from "../../components/header";
import Footer from "../../components/footer";
import { getAll } from "../../api/user";

const profile = {
    async render() {
        const { data } = await getAll();
        return /* html */ `

        <div id="header">${Header.render()}</div>
        <div class="py-16  ">
        <div class="grid grid-cols-12 border border-blue-600 rounded-lg "> 
         <div class="col-span-4 bg-blue-600 py-4 px-2 ">
         <div class="text-white"> <span class="text-xl" >Xin chào:</span>
        ${localStorage.getItem("user") ? "<span  id=\"Name\"></span>" : ""}</div>
       
        <nav>
        <ul>
        <li class="py-4"><a class="text-white hover:border hover:border-white p-2 hover:text-black hover:rounded-lg hover:bg-white" href="/profile">Thông tin tài khoản</a></li>
       <li><a class="text-white hover:border hover:border-white p-2 hover:text-black hover:rounded-lg hover:bg-white" href="/profile/${data.id}/edit">Sửa tài khoản</a></li>
        
        <li class="py-4"><a class="text-white hover:border hover:border-white p-2 hover:text-black hover:rounded-lg hover:bg-white" href="/admin/dashoarch">Admin</a></li>
        <li><a class="text-white hover:border hover:border-white p-2 hover:text-black hover:rounded-lg hover:bg-white" href="/cart">Giỏ hàng</a></li>
        </ul>
        </nav>

        </div>
        <div class="col-span-8 ">
        <h1 class="bg-blue-600 py-4 px-2 text-white text-xl">Thông Tin Tài Khoản</h1>

<div class="py-4 px-2">
<div class="border border-gray-300 rounded-lg bg-gray-300 py-4 px-2"><h1 class="text-xl"><strong>Tên tài khoản</strong></h1>
        ${localStorage.getItem("user") ? "<p id=\"name\"></p>" : ""}
        
        </div></div>
        
<div class="py-4 px-2">
<div class="border border-gray-300 rounded-lg bg-gray-300 py-4 px-2">
        <h1 class="text-xl"><strong>Email tài khoản</strong></h1>
         ${localStorage.getItem("user") ? "<p id=\"email\"></p>" : ""}
        
        </div></div>
        

        
        
        </div>
        </div>
      
        </div>
        ${Footer.render()}
        `;
    },
    afterRender() {
        Header.afterRender();
        const user = JSON.parse(localStorage.getItem("user"));
        document.querySelector("#name").innerHTML = user.username;
        document.querySelector("#email").innerHTML = user.email;
        document.querySelector("#Name").innerHTML = user.username;
    },
};
export default profile;