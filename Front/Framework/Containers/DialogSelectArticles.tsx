import {DialogFullScreen} from "../Components/DialogFullScreen";
import * as React from "react";
import {IPDialogSelectArticles} from "../Props/IPDialogSelectArticles";
import {Services} from "../libs/Services";
import {IPListArticlesAdmin} from "../Props/IPListArticlesAdmin";
import {Article} from "../Components/Article";
import {CircularProgress, Grid} from "@material-ui/core";

export interface ISDialogSelectArticles {
    articles: IPListArticlesAdmin,
    loading: boolean;
    selected: boolean
}

export class DialogSelectArticles extends React.Component<IPDialogSelectArticles, ISDialogSelectArticles> {
    state: ISDialogSelectArticles = {
        articles: {
            result: [],
            count: "0",
        },
        loading: true,
        selected: false,
    };

    async componentDidMount() {
        const xhr = await Services.GetAllArticles(null);
        const json = await xhr.json();
        this.setState({
            articles: json,
        })
    }

    async componentDidUpdate(prevProps) {
        if ((prevProps.open !== this.props.open) && this.props.open) {
            const xhr = await Services.GetAllOfferArticle(this.props.offerId);
            const json = await xhr.json();
            this.setState(e => ({
                ...e,
                loading: false,
                articles: {
                    ...e.articles,
                    result: e.articles.result.map((item) => {
                        return ({
                            ...item,
                            selected: (item.id in json),
                        })
                    })
                }
            }))
        }
    }

    save = async () => {
        const xhr = await Services.SaveAssignArticles(this.state.articles.result.map((i) => ({
            id: i.id,
            selected: i.selected,
        })), this.props.offerId);
        const json = await xhr.json();
        if (json.success) {
            this.noSelect();
            this.props.handleClose(this.state.articles);
        }
    };

    noSelect(toggle: boolean = false) {
        let select = false;

        if (toggle) {
            select = this.state.selected;
            this.setState(e => ({selected: !e.selected}))
        }

        this.setState(e => ({
            ...e,
            articles: {
                ...e.articles,
                result: e.articles.result.map((item) => ({
                    ...item,
                    selected: select,
                }))
            }
        }));
    }

    getData() {
        return (
            <div style={{padding: 10}}>
                <Grid container spacing={1}>
                    {this.state.articles.result.map((item) => (
                        <Grid item sm={3} md={4} lg={2} xs={12} key={item.id}>
                            <Article
                                AdminIsAssigned
                                article={item}
                                admin={{
                                    handleCheckedAssigned: () => {
                                        item.selected = !item.selected;
                                        this.setState({
                                            articles: this.state.articles,
                                        })
                                    },
                                    checkedAssigned: item.selected,
                                }}
                            />
                        </Grid>
                    ))}
                </Grid>
            </div>
        )
    }

    render() {
        return (
            <DialogFullScreen
                open={this.props.open}
                handleOk={async () => {
                    await this.save();
                }}
                handleSelect={() => {
                    this.noSelect(true);
                }}
                handleClose={this.props.handleClose}
                title={this.props.title}
            >
                {this.state.loading ? <CircularProgress/> : this.getData()}
            </DialogFullScreen>
        )
    }
}
