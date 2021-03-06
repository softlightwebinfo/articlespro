import * as React from "react";
import {Article} from "../Components/Article";
import {IPArticleContainer} from "../Props/IPArticleContainer";
import {ConfirmationDialogRaw} from "../Components/DialogConfirm";
import {useState} from "react";
import {Services} from "../libs/Services";
import {DialogInfoArticle} from "./DialogInfoArticle";
import {Favoritesmodel} from "../Models/FavoriteModel";
import {useSelector, useDispatch} from "react-redux";
import {ActionSetFavorite} from "../store/articles";

export const ArticleContainer = ({article, onDelete, isAdmin = true}: IPArticleContainer) => {
    const [open, setOpen] = useState(false);
    const [openInfo, setOpenInfo] = useState(false);
    const favorite: Favoritesmodel = useSelector(state => Favoritesmodel.init(state.articles.favorites));
    const isFavorite = favorite.hasKey(Number(article.id));
    const dispatch = useDispatch();
    return (
        <>
            <Article
                isFavorite={isFavorite}
                handleInfoClick={() => setOpenInfo(true)}
                article={article}
                isAdmin={isAdmin}
                handleFavorite={() => {
                    dispatch(ActionSetFavorite(article.id));
                }}
                admin={{
                    onEdit: () => console.log("On edit"),
                    onDelete: () => {
                        setOpen(true);
                    },
                    onVisualize: () => {
                        console.log("On Visualize")
                    }
                }}
            />
            <DialogInfoArticle
                handleClose={() => {
                    setOpenInfo(false);
                }}
                article={article}
                open={openInfo}
            />
            <ConfirmationDialogRaw
                id={article.id}
                classes={{paper: ""}}
                keepMounted={true}
                onClose={async (e) => {
                    if (e) {
                        const xhr = await Services.DeleteArticle(article.id);
                        const json = await xhr.json();
                        if (json.success) {
                            onDelete();
                            setOpen(false);
                        } else {
                            alert("Error");
                        }
                    } else {
                        setOpen(false)
                    }
                }}
                open={open}
                title={`Eliminar articulo (${article.title.substr(0, 20) + '...'})`}
                children={(
                    "¿Quieres eliminar el articulo?, el articulo se guardará en el apartado de articulos eliminados"
                )}
            />
        </>
    );
};
