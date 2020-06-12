import React, {Component} from 'react';
import {TemplateDashboard} from "../../Framework/Containers/TemplateDashboard";
import {Services} from "../../Framework/libs/Services";
import {IPListOffersAdmin} from "../../Framework/Props/IPListOffersAdmin";
import {MessageError} from "../../Framework/Components/MessageError";
import {Router} from "../../server/routes";
import {OfertasContainer} from "../../Framework/Containers/OfertasContainer";

interface IDashboardArticles {
    articles: IPListOffersAdmin
}

export default class Dashboard extends Component<{ articles: IPListOffersAdmin }, IDashboardArticles> {
    static async getInitialProps(data) {
        let articles = {};
        try {
            const xhr = await Services.GetAllOffer(data);
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
                {this.state.articles.result.length > 0 && (
                    <MessageError
                        title={"Publica tu Oferta"}
                        error={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
                        buttons={[
                            {variant: "contained", label: "Publicar oferta", color: "Primary", onClick: () => Router.pushRoute("dashboardPublishOffer")},
                            {variant: "outlined", label: "Pagina Principal", color: "Primary", onClick: () => Router.pushRoute("dashboard")},
                        ]}
                    />
                )}
                <OfertasContainer
                    isAdmin
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
