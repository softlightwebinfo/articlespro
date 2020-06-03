import * as React from "react";
import {Wrapper} from "../Framework/Components/Wrapper"
import {Container} from "@material-ui/core";
import {Ads} from "../Framework/Components/Ads";
import {Separator} from "../Framework/Components/Separator";
import {GalleryContainer} from "../Framework/Containers/GalleryContainer";

export default function listPhotos() {
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
                <GalleryContainer

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
