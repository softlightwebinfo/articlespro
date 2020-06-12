import {IPListArticlesAdmin} from "./IPListArticlesAdmin";

export interface IPDialogSelectArticles {
    handleClose(e?: IPListArticlesAdmin);

    open: boolean;
    title: string;
    offerId: string;
}
