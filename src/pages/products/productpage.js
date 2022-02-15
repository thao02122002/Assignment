import Header from "../../components/header";
import Footer from "../../components/footer";
import Categori from "../../components/categori";
import News2 from "../../components/new2";

const ProductPage = {
    async  render() {
        return/* html */ `
       <div id="header">${Header.render()}</div>
        <div class="py-6">
        <div class="py-4 text-center">${Categori.render()}</div>
         <div class="pb-4">
${await News2.render()}
         </div>
        </div>
        ${Footer.render()}
        `;
    },
    afterRender() {
        Header.afterRender();
    },
};
export default ProductPage;