import * as React from "react";
import {Article} from "../Components/Article";
import {IPArticleContainer} from "../Props/IPArticleContainer";

export const ArticleContainer = ({article}: IPArticleContainer) => {
    return (
        <Article
            article={article}
            isAdmin
        />
    );
};
