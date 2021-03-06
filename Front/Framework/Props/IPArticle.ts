import {IPListArticlesAdminResult} from "./IPListArticlesAdmin";
import {IPAdminEvent} from "./IPAdminEvent";

export interface IPArticle {
    article: IPListArticlesAdminResult;
    isAdmin?: boolean;
    admin?: IPAdminEvent;
    AdminIsAssigned?: boolean;
    handleInfoClick: () => void;
    handleFavorite: () => void;
    isFavorite?: boolean;
}
