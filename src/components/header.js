import toastr from "toastr";
import { reRender } from "../utils";
import "toastr/build/toastr.min.css";

const Header = {
    render() {
        return `<header id="header">
        
       
        <div class="logo bg-blue-900">
        <img class="mx-auto py-4" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/FPT_Polytechnic.png/120px-FPT_Polytechnic.png" alt="">
      </div>
      <div class="menu grid grid-cols-12 bg-yellow-600">
        <nav class="col-span-6 py-2  mx-auto">
      <ul >
        <li class="inline-block pr-8 text-white hover:text-blue-800"><a href="/">Trang chủ</a></li>
        <li class="inline-block pr-8 text-white hover:text-blue-800"><a href="/about">Tuyển sinh</a></li>
        <li class="inline-block pr-8 text-white hover:text-blue-800"><a href="/product">Chương trình đào tạo</a></li>
        <li class="inline-block pr-8 text-white hover:text-blue-800"><a href="">Góc sinh viên</a></li>
        <li class="inline-block pr-8 text-white hover:text-blue-800"><a href="">Tuyển dụng</a></li>
        <li class="inline-block pr-8 text-white hover:text-blue-800"><a href="/admin/dashboard">Admin</a></li>
        <li class="inline-block pr-2 text-white hover:text-blue-800"><a id="account" href="">User</a></li>
      </ul>
        </nav>
        <div class="search col-span-3 py-2 pl-8">
          <input class="border border-black bg-white p-1" type="text">
          <button class="border border-black bg-blue-900 text-white p-1" type="submit">Tìm kiếm</button>
        </div>
        <div class="col-span-3 my-auto">
        <a href="/signin"><input type="submit" class="border border-black bg-white p-1 hover:bg-blue-900 hover:text-white" value="Sing In" id="singin"></a>
        <a href="/signup"><input type="submit" class="border border-black bg-white p-1 hover:bg-blue-900 hover:text-white" value="Sing Up" id="singup"></a>
        <a href=""><input type="submit" class="border border-black bg-white p-1 hover:bg-blue-900 hover:text-white" value="Logout" id="logout"></a>
        </div>
      </div>
      <div class="banner">
        <img src="https://caodang.fpt.edu.vn/wp-content/uploads/Banner1-1.png" alt="" width="100%">
      </div>
      </header>`;
    },
    afterRender() {
        const user = JSON.parse(localStorage.getItem("user"));
        const logout = document.querySelector("#logout");
        document.querySelector("#account").innerHTML = user.email;
        logout.addEventListener("click", () => {
            toastr.success("Logout thành công");
            localStorage.removeItem("user");
            reRender(Header, "#header");
        });
    },

};
export default Header;