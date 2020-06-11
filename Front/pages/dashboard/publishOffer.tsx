import React from 'react';
import {TemplateDashboard} from "../../Framework/Containers/TemplateDashboard";
import {Grid} from "@material-ui/core";
import {FormPublishOffer} from "../../Framework/Components/FormPublishOffer";

export default function Dashboard() {
    return (
        <TemplateDashboard>
            <Grid container spacing={3}>
                <FormPublishOffer/>
            </Grid>
        </TemplateDashboard>
    );
}
