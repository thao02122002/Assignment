import { get } from "../api/posts";
import Header from "../components/header";
import Footer from "../components/footer";

const DetailPage = {
    async render(id) {
        const { data } = await get(id);

        return /* html */`
        ${Header.render()}
            <div>
                <h1>${data.title}</h1>
                <img src="${data.img}" alt="" />
                <p>${data.desc}</p>
            </div>
            ${Footer.render()}
        `;
    },
};
export default DetailPage;