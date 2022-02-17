import News from "../../components/new";
// import News2 from "../components/new2";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Categori from "../../components/categori";

const HomePage = {
    async  render() {
        return /* html */ `
        <div id="header">${Header.render()}</div>
        <div class="danhmuc py-4 text-center">
        ${await Categori.render()}
        </div>
         <h1 class="pb-8"><strong>HOME</strong></h1>
        <div class="home1 grid grid-cols-12 gap-3">
          ${await News.render()}
          
        </div>
        <h1 class="py-8"><strong>HOME NEW</strong></h1>
        <div class="home2 grid grid-cols-12 gap-3 ">
          
          ${await News.render()}
        </div>
        ${Footer.render()}`;
    },
    afterRender() {
        Header.afterRender();
    },
};
export default HomePage;