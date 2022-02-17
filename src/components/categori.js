import { getAll } from "../api/category";

const Categori = {
    async  render() {
        const { data } = await getAll();
        return/* html */ `<h1 class=" "><strong>DANH MỤC SẢN PHẨM</strong></h1>
        <nav class=" pt-2">
      <ul class="" >
      ${data.map((post) =>/* html */ `<li class="inline-block pr-8  border border-black p-2  hover:text-blue-800"><a href="/category/${post.id}">${post.title}</a></li>
      
        `)}
        
      
        </ul>
        </nav>`;
    },
};
export default Categori;