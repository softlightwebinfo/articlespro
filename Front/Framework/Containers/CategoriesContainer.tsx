import {Component} from "react";
import CardCategory from "../Components/CardCategory";
import * as React from "react";
import {Grid} from "@material-ui/core";

export class CategoriesContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Grid container spacing={1}>
                {
                    [...new Array(16)].map(() => {
                        return (
                            <Grid item xs={3}>
                                <CardCategory

                                />
                            </Grid>
                        );
                    })
                }
            </Grid>
        )
    }
}
