import React from 'react';
import {TemplateDashboard} from "../../Framework/Containers/TemplateDashboard";
import {Grid} from "@material-ui/core";
import {FormPublishPromotion} from "../../Framework/Components/FormPublishPromotion";

export default function Dashboard() {
    return (
        <TemplateDashboard>
            <Grid container spacing={3}>
                <FormPublishPromotion/>
            </Grid>
        </TemplateDashboard>
    );
}
