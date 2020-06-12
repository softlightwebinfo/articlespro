import {IPListArticlesAdminResult} from "./IPListArticlesAdmin";

export interface IPArticleContainer {
    article: IPListArticlesAdminResult;
    index: number;
    isAdmin?: boolean;
    onDelete?: () => void;
}
