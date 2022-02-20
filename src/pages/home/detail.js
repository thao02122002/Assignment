import { get } from "../../api/posts";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Categori from "../../components/categori";

const DetailPage = {
    async render(id) {
        const { data } = await get(id);

        return /* html */`
       <div id="header">${Header.render()}</div>
        <div class="pt-6 pb-4 text-center">
        ${await Categori.render()}
        </div>
            <div class="border border-black grid grid-cols-12 gap-2">
            <div class="px-4 col-span-7">
            <h1><strong>${data.title}</strong></h1>
                <img src="${data.img}" alt="" />
                <p>${data.desc}</p>
            </div>
           
        
            </div>
            </div>
                
            </div>
            
            <div class="similar-product"></div>
            <div class="pt-6"> ${Footer.render()}</div>
           
        `;
    },
    afterRender() {
        Header.afterRender();
    },
};
export default DetailPage;