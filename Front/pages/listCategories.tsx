import * as React from "react";
import {Wrapper} from "../Framework/Components/Wrapper"
import {Container} from "@material-ui/core";
import {Ads} from "../Framework/Components/Ads";
import {Separator} from "../Framework/Components/Separator";
import {CategoriesContainer} from "../Framework/Containers/CategoriesContainer";

export default function ListCategories() {
    return (
        <Wrapper>
            <Separator/>
            <Container>
                <Ads
                    image={"https://www.musicosdelmundo.com/static/images/appAndroid.png"}
                    title={"Publicidad"}
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
        </Wrapper>
    )
}
