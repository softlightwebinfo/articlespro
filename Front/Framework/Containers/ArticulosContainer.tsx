import {Component} from "react";
import CardCategory from "../Components/CardCategory";
import * as React from "react";
import {Grid} from "@material-ui/core";
import {Article} from "../Components/Article";
import {ArticleContainer} from "./ArticleContainer";
import {IPListArticlesAdmin, IPListArticlesAdminResult} from "../Props/IPListArticlesAdmin";

export const ArticulosContainer = ({articles}: { articles: IPListArticlesAdmin }) => {
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
                        isAdmin={false}
                    />
                </Grid>
            ))}
        </Grid>
    )
};
