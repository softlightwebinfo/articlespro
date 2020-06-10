import React, {Component} from 'react';
import {TemplateDashboard} from "../../Framework/Containers/TemplateDashboard";
import {Services} from "../../Framework/libs/Services";
import {ListArticlesAdmin} from "../../Framework/Containers/ListArticlesAdmin";
import {IPListArticlesAdmin} from "../../Framework/Props/IPListArticlesAdmin";

export default class Dashboard extends Component<{ articles: IPListArticlesAdmin }> {
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

    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props);
        return (
            <TemplateDashboard>
                <ListArticlesAdmin
                    articles={this.props.articles}
                />
            </TemplateDashboard>
        );
    }
}
