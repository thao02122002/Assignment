import News from "../components/new";
// import News2 from "../components/new2";
import Header from "../components/header";
import Footer from "../components/footer";

const HomePage = {
    async  render() {
        return `
        ${Header.render()}
         <h1 class="pb-8"><strong>TIN TỨC HỌC TẬP</strong></h1>
        <div class="product1 grid grid-cols-12 gap-3">
          ${await News.render()}
          
        </div>
        <h1 class="py-8"><strong>HOẠT ĐỘNG SINH VIÊN</strong></h1>
        <div class="product2 grid grid-cols-12 gap-3">
          
          ${await News.render()}
        </div>
        ${Footer.render()}`;
    },
    afterRender() {
        Header.afterRender();
    },
};
export default HomePage;