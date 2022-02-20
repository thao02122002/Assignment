// import news from "../utils/data";
import { getAll } from "../api/posts";

const News = {
    async render() {
        const { data } = await getAll();

        return `

${data.map((post) =>/* html */ `<div class="py-4"><div class="hd1 border border-dashed border-black ">
<div class="p-4 grid grid-cols-12 ">
<div class="image col-span-4"><a href="/home/${post.id}" ><img src="${post.img}" alt="" width="200px" /></a></div>
<div class="ctn col-span-8"><h2 class="text-red-600 text-xl py-2">${post.title}</h2>
<p>${post.desc}</p></div>
    

</div>
</div></div>

`).join("")}
  
`;
    },
};
export default News;