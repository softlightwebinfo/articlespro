import {getApi} from "../../settings";
import {IArticlesPublish} from "../Interfaces/IArticlesPublish";
import {IPromotionPublish} from "../Interfaces/IPromotionPublish";
import {IOfferPublish} from "../Interfaces/IOfferPublish";

export class Services {
    static async PublishArticles(data: IArticlesPublish, files) {
        const formData = new FormData();
        Object.entries(data).map((value) => {
            formData.append(value[0], value[1]);
        });

        for (const file of files) {
            formData.append("file", file, file.name);
        }

        return await fetch(getApi("articles/create"), {
            body: formData,
            method: "POST",
            headers: {
                //'Accept': 'application/json',
                //'Content-Type': 'multipart/form-data',
                //'Authorization': accessToken,
            }
        });
    }

    static async GetAllArticles(data) {
        const header = data && data.req ? {'cookie': data.req.headers.cookie} : {};
        return await fetch(getApi("articles/all"), {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                ...header,
            }
        });
    }

    static async DeleteArticle(id: string) {
        return await fetch(getApi("articles/delete"), {
            body: JSON.stringify({
                id,
            }),
            method: "DELETE",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                //'Authorization': accessToken,
            }
        });
    }

    static async GetAllPromotions(data) {
        const header = data.req ? {'cookie': data.req.headers.cookie} : {};
        return await fetch(getApi("promotions/all"), {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                ...header,
            }
        });
    }

    static async GetAllOffer(data) {
        const header = data.req ? {'cookie': data.req.headers.cookie} : {};
        return await fetch(getApi("offers/all"), {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                ...header,
            }
        });
    }

    static async PublishPromotion(data: IPromotionPublish, files) {
        const formData = new FormData();
        Object.entries(data).map((value) => {
            formData.append(value[0], value[1]);
        });

        for (const file of files) {
            formData.append("file", file, file.name);
        }

        return await fetch(getApi("promotions/create"), {
            body: formData,
            method: "POST",
            headers: {
                //'Accept': 'application/json',
                //'Content-Type': 'multipart/form-data',
                //'Authorization': accessToken,
            }
        });
    }

    static async PublishOffer(data: IOfferPublish, files) {
        const formData = new FormData();
        Object.entries(data).map((value) => {
            formData.append(value[0], value[1]);
        });

        for (const file of files) {
            formData.append("file", file, file.name);
        }

        return await fetch(getApi("offers/create"), {
            body: formData,
            method: "POST",
            headers: {
                //'Accept': 'application/json',
                //'Content-Type': 'multipart/form-data',
                //'Authorization': accessToken,
            }
        });
    }

    static async SaveAssignArticles(map: { id: string; selected: boolean }[], idOffer: string) {
        return await fetch(getApi("offers/assign"), {
            body: JSON.stringify({
                articles: map,
                offer: Number(idOffer),
            }),
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        });
    }

    static async GetAllOfferArticle(offerId: string) {
        return await fetch(getApi(`offers/assigned/${offerId}`), {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        });
    }
}
