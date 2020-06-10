import React from 'react';
import {TemplateDashboard} from "../../Framework/Containers/TemplateDashboard";
import {Grid} from "@material-ui/core";
import {FormPublish} from "../../Framework/Components/FormPublish";

export default function Dashboard() {
    return (
        <TemplateDashboard>
            <Grid container spacing={3}>
                <FormPublish/>
            </Grid>
        </TemplateDashboard>
    );
}
