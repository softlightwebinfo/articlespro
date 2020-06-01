import * as React from "react";
import {Wrapper} from "../Framework/Components/Wrapper";
import {MyGallery} from "../Framework/Components/MyGallery";
import {Container} from "@material-ui/core";
import {Ads} from "../Framework/Components/Ads";
import {TitleSubtitle} from "../Framework/Components/TitleSubtitle";
import {Separator} from "../Framework/Components/Separator";
import {CategoriesContainer} from "../Framework/Containers/CategoriesContainer";
import {ArticulosContainer} from "../Framework/Containers/ArticulosContainer";
import {PromocionesContainer} from "../Framework/Containers/PromocionesContainer";
import {OfertasContainer} from "../Framework/Containers/OfertasContainer";
import {CategoriasListContainer} from "../Framework/Containers/CategoriasListContainer";

export default function Home() {
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
                    title={"Listado de Articulos destacados"}
                    description={"Alfombras, ordenadores, monitores, chimeneas, martillos"}
                />
            </Container>
            <Container>
                <ArticulosContainer

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
                <Ads
                    image={"https://www.musicosdelmundo.com/static/images/appAndroid.png"}
                    title={"Publicidad"}
                />
            </Container>
        </Wrapper>
    )
}
