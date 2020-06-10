import {IPListArticlesAdminResult} from "./IPListArticlesAdmin";

export interface IPArticle {
    article: IPListArticlesAdminResult;
    isAdmin?: boolean;
}
