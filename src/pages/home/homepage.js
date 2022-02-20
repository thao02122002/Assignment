import News from "../../components/new";
// import News2 from "../components/new2";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Categori from "../../components/categori";
import Banner from "../../components/banner";

const HomePage = {
    async  render() {
        return /* html */ `
        <div id="header">${Header.render()}</div>
        ${Banner.render()}
        <div class="danhmuc py-4 text-center">
        ${await Categori.render()}
        </div>
        <div class=""> <h1 class="pb-8"><strong>NEWS</strong></h1>
        <div class="home1">
          ${await News.render()}
          
        </div></div>
        
        
        ${Footer.render()}`;
    },
    afterRender() {
        Header.afterRender();
    },
};
export default HomePage;