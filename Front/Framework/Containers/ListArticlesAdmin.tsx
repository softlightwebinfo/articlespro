import {Grid} from "@material-ui/core";
import * as React from "react";
import {IPListArticlesAdmin} from "../Props/IPListArticlesAdmin";
import {ArticleContainer} from "./ArticleContainer";

export const ListArticlesAdmin = ({articles}: { articles: IPListArticlesAdmin }) => {
    return (
        <Grid container spacing={3}>
            {articles.result.map((item, index) => (
                <Grid
                    item
                    xs={3}
                    key={item.id}
                >
                    <ArticleContainer
                        article={item}
                        index={index}
                    />
                </Grid>
            ))}
        </Grid>
    );
};
