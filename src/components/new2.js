// import news from "../utils/data";
import { getAll } from "../api/product";

const News2 = {
    async render() {
        const { data } = await getAll();

        return `

${data.map((post) => `
<div class="hd1 col-span-4 border border-black">
<div class="p-4 ">
    <a href="/products/${post.id}" ><img src="${post.img}" alt="" width="500px" /></a>
<h2 class="text-red-600 text-xl py-2">${post.name}</h2>
<p>${post.desc}</p>

</div>
</div>
`).join("")}
  
`;
    },
};
export default News2;