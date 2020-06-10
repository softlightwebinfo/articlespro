import {getApi} from "../../settings";
import {IArticlesPublish} from "../Interfaces/IArticlesPublish";

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
        return await fetch(getApi("articles/all"), {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'cookie': data.req.headers.cookie,
            }
        });
    }

}
