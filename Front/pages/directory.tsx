import * as React from "react";
import {Wrapper} from "../Framework/Components/Wrapper"
import {Container} from "@material-ui/core";
import {Ads} from "../Framework/Components/Ads";
import {Separator} from "../Framework/Components/Separator";
import {DirectoryContainer} from "../Framework/Containers/DirectoryContainer";
import {wrapper} from "../Framework/store/store";
import {ActionDirectory} from "../Framework/store/articles";
import {END} from 'redux-saga'
import {useSelector} from 'react-redux';

function Directory() {
    const directory = useSelector(state => state.articles.directory);
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
                <DirectoryContainer
                    directory={directory}
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

export const getStaticProps = wrapper.getStaticProps(async ({store}) => {
    if (!store.getState().articles.directory) {
        store.dispatch(ActionDirectory());
    }
    store.dispatch(END);
    await store.sagaTask.toPromise()
});
export default Directory;
