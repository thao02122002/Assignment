import toastr from "toastr";
import { reRender } from "../utils";
import "toastr/build/toastr.min.css";

const Header = {
    render() {
        return /* html */ `<header id="header">
        
       
        <div class="logo ">
        <img class="mx-auto py-4" src="https://www.invesnesia.com/wp-content/uploads/2021/03/Logo-Invesnesia-Terbaru-2048x793.jpg" alt="" width="250px">
      </div>
      <div class="menu grid grid-cols-12 bg-yellow-600">
        <nav class="col-span-6 py-2  mx-auto">
      <ul >
        <li class="inline-block pr-8 text-white hover:text-blue-800"><a href="/">Trang chủ</a></li>
        <li class="inline-block pr-8 text-white hover:text-blue-800"><a href="/products">Sản phẩm</a></li>
       
        <li class="inline-block pr-8 text-white hover:text-blue-800"><a href="/admin/dashboard">Admin</a></li>
        ${localStorage.getItem("user") ? "<li class=\"inline-block pr-2 text-white hover:text-blue-800\"><a id=\"account\" href=\"\">User</a></li>" : ""}
        
      </ul>
        </nav>
        <div class="search col-span-3 py-2 pl-8">
          <input class="border border-black bg-white p-1" type="text">
          <button class="border border-black bg-blue-900 text-white p-1" type="submit">Tìm kiếm</button>
        </div>
        <div class="col-span-3 my-auto">
        ${localStorage.getItem("user") ? "" : `<a href="/signin"><input type="submit" class="border border-black bg-white p-1 hover:bg-blue-900 hover:text-white" value="Sing In" id="singin"></a>
        <a href="/signup"><input type="submit" class="border border-black bg-white p-1 hover:bg-blue-900 hover:text-white" value="Sing Up" id="singup"></a>`}
        
 ${localStorage.getItem("user") ? `
         <a href=""><input type="submit" class="border border-black bg-white p-1 hover:bg-blue-900 hover:text-white" value="Logout" id="logout"></a>
` : ""}

        
        </div>
      </div>
      <div class="banner">
        <img src="https://camnangphaidep.vn/wp-content/uploads/2021/01/image-skincare-5.jpg" alt="" width="100%">
      </div>
      </header>`;
    },
    afterRender() {
        const user = JSON.parse(localStorage.getItem("user"));
        const logout = document.querySelector("#logout");
        document.querySelector("#account").innerHTML = user.email;
        if (logout) {
            logout.addEventListener("click", () => {
                toastr.success("Logout thành công");
                localStorage.removeItem("user");
                reRender(Header, "#header");
            });
        }
    },

};
export default Header;