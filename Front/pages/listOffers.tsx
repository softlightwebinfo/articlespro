import * as React from "react";
import {Wrapper} from "../Framework/Components/Wrapper"
import {Container} from "@material-ui/core";
import {Ads} from "../Framework/Components/Ads";
import {Separator} from "../Framework/Components/Separator";
import {OfertasContainer} from "../Framework/Containers/OfertasContainer";

export default function ListOffers() {
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
        </Wrapper>
    )
}
