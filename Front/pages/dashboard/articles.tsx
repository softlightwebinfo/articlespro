import React, {Component} from 'react';
import {TemplateDashboard} from "../../Framework/Containers/TemplateDashboard";
import {Services} from "../../Framework/libs/Services";
import {ListArticlesAdmin} from "../../Framework/Containers/ListArticlesAdmin";
import {IPListArticlesAdmin} from "../../Framework/Props/IPListArticlesAdmin";

interface IDashboardArticles {
    articles: IPListArticlesAdmin
}

export default class Dashboard extends Component<{ articles: IPListArticlesAdmin }, IDashboardArticles> {
    static async getInitialProps(data) {
        let articles = {};
        try {
            const xhr = await Services.GetAllArticles(data);
            articles = await xhr.json();
        } catch (e) {
            console.log("Error", e);
        }
        return {
            articles
        };
    }

    state: IDashboardArticles = {
        articles: this.props.articles,
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TemplateDashboard>
                <ListArticlesAdmin
                    onDelete={(article) => {
                        this.setState((e) => ({
                            articles: {
                                ...e.articles,
                                result: e.articles.result.filter((i) => i.id != article.id),
                            }
                        }))
                    }}
                    articles={this.state.articles}
                />
            </TemplateDashboard>
        );
    }
}
