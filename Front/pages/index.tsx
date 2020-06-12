import * as React from "react";
import {Wrapper} from "../Framework/Components/Wrapper";
import {MyGallery} from "../Framework/Components/MyGallery";
import {Container} from "@material-ui/core";
import {Ads} from "../Framework/Components/Ads";
import {TitleSubtitle} from "../Framework/Components/TitleSubtitle";
import {Separator} from "../Framework/Components/Separator";
import {CategoriesContainer} from "../Framework/Containers/CategoriesContainer";
import {PromocionesContainer} from "../Framework/Containers/PromocionesContainer";
import {OfertasContainer} from "../Framework/Containers/OfertasContainer";
import {CategoriasListContainer} from "../Framework/Containers/CategoriasListContainer";
import {ProjectosListContainer} from "../Framework/Containers/ProjectosListContainer";
import {wrapper} from "../Framework/store/store";
import {startClock} from "../Framework/store/example/actions";
import {useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux'
import {END} from 'redux-saga'
import {ActionLastArticles, ActionLastOffers, ActionLastPromotions} from "../Framework/store/articles";
import {ArticulosContainer} from "../Framework/Containers/ArticulosContainer";

function Home() {
    const dispatch = useDispatch();
    const lastPromotions = useSelector(state => state.articles.lastPromotions);
    const lastOffers = useSelector(state => state.articles.lastOffers);
    const lastArticles = useSelector(state => state.articles.lastArticles);
    useEffect(() => {
        dispatch(startClock())
    }, [dispatch])

    return (
        <Wrapper>
            <MyGallery/>
            <Separator/>
            <Container>
                <Ads
                    image={"https://www.musicosdelmundo.com/static/images/appAndroid.png"}
                    title={"Publicidad"}
                />
            </Container>
            <Container>
                <TitleSubtitle
                    title={"Encuentra tu articulo"}
                    description={"Alfombras, ordenadores, monitores, chimeneas, martillos"}
                />
            </Container>
            <Container>
                <CategoriesContainer

                />
            </Container>
            <Separator/>
            <Container>
                <TitleSubtitle
                    title={"Listado de profesionales destacados"}
                    description={"Alfombras, ordenadores, monitores, chimeneas, martillos"}
                />
            </Container>
            <Container>
                <CategoriesContainer

                />
            </Container>
            <Separator/>
            <Container>
                <Ads
                    image={"https://www.musicosdelmundo.com/static/images/appAndroid.png"}
                    title={"Publicidad"}
                />
            </Container>
            <Container>
                <TitleSubtitle
                    title={"Listado de ultimos articulos"}
                    description={"Alfombras, ordenadores, monitores, chimeneas, martillos"}
                />
            </Container>
            <Container>
                <ArticulosContainer
                    articles={lastArticles}
                />
            </Container>
            <Separator/>
            <Container>
                <TitleSubtitle
                    title={"Promociones"}
                    description={"Alfombras, ordenadores, monitores, chimeneas, martillos"}
                />
            </Container>
            <Container>
                <PromocionesContainer
                    articles={lastPromotions}
                />
            </Container>
            <Separator/>
            <Container>
                <TitleSubtitle
                    title={"Ofertas"}
                    description={"Alfombras, ordenadores, monitores, chimeneas, martillos"}
                />
            </Container>
            <Container>
                <OfertasContainer
                    articles={lastOffers}
                />
            </Container>
            <Separator/>
            <Container>
                <Ads
                    image={"https://www.musicosdelmundo.com/static/images/appAndroid.png"}
                    title={"Publicidad"}
                />
            </Container>
            <Container>
                <TitleSubtitle
                    title={"Categorias"}
                    description={"Alfombras, ordenadores, monitores, chimeneas, martillos"}
                />
            </Container>
            <Container>
                <CategoriasListContainer/>
            </Container>
            <Separator/>
            <Container>
                <TitleSubtitle
                    title={"Projectos"}
                    description={"Alfombras, ordenadores, monitores, chimeneas, martillos"}
                />
            </Container>
            <Container>
                <ProjectosListContainer/>
            </Container>
            <Separator/>
            <Container>
                <Ads
                    image={"https://www.musicosdelmundo.com/static/images/appAndroid.png"}
                    title={"Publicidad"}
                />
            </Container>
        </Wrapper>
    )
}

export const getStaticProps = wrapper.getStaticProps(async ({store}) => {
    if (!store.getState().articles.lastPromotions) {
        store.dispatch(ActionLastPromotions());
    }
    if (!store.getState().articles.lastOffers) {
        store.dispatch(ActionLastOffers());
    }
    if (!store.getState().articles.lastArticles) {
        store.dispatch(ActionLastArticles());
    }

    store.dispatch(END);
    await store.sagaTask.toPromise()
});
export default Home;
