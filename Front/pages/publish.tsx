import * as React from "react";
import {Wrapper} from "../Framework/Components/Wrapper"
import {Container} from "@material-ui/core";
import {Ads} from "../Framework/Components/Ads";
import {Separator} from "../Framework/Components/Separator";
import {FormPublish} from "../Framework/Components/FormPublish";

export default function Publish() {
    return (
        <Wrapper>
            <Separator/>
            <Container>
                <FormPublish

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
