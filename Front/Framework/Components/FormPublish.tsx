import {Component} from "react";
import * as React from "react";
import {Form} from "./Form";
import {FormGenerate} from "../libs/Form/FormGenerate";
import {FormInput} from "../libs/Form/Components/FormInput";
import {FormButton} from "../libs/Form/Components/FormButton";
import {FormTextarea} from "../libs/Form/Components/FormTextarea";
import {FormSelect} from "../libs/Form/Components/FormSelect";
import {FormSelectItem} from "../libs/Form/Components/FormSelectItem";
import {Grid} from "@material-ui/core";
import {FormValues} from "../libs/Form/libs/FormValues";


export class FormPublish extends Component<null, { form: FormValues }> {

    public state = {
        form: new FormValues(),
    };

    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.state.form);
        return (
            <Grid container spacing={2}>
                <Grid item style={{width: 500}}>
                    <Form
                        form={this.form()}
                    />
                </Grid>
                <Grid item>
                    hola
                </Grid>
            </Grid>
        );
    }

    private form(): FormGenerate {
        let form = new FormGenerate({
            id: "publishIdForm",
            onSubmit: (e) => {
                e.preventDefault();
                console.log("Enviado")
            },
            onChange: (e: any, component: any): void => {
                this.state.form.Add(e);
                this.setState({
                    form: this.state.form,
                });
            }
        });
        form.add(new FormInput("title", "Titulo").SetAutoFocus(true));
        form.add(new FormTextarea("description", "Descripción"));
        form.add(new FormInput("price", "Precio").setColXs(6));
        form.add(new FormInput("offer", "Descuento").setRequired(false).setColXs(6));
        form.add(new FormSelect("category", "Categoria", [
            new FormSelectItem("Informatica", "1"),
            new FormSelectItem("Carpinteria", "2"),
            new FormSelectItem("Albañileria", "3"),
            new FormSelectItem("Fontaneria", "4"),
        ]).setColXs(6));
        form.add(new FormSelect("subcategory", "Sub Categoria", [
            new FormSelectItem("Informatica", "1"),
            new FormSelectItem("Carpinteria", "2"),
            new FormSelectItem("Albañileria", "3"),
            new FormSelectItem("Fontaneria", "4"),
        ]).setColXs(6));
        form.add(new FormInput("file", "", "file"));
        form.add(new FormButton("Publicar"));
        return form;
    }
}
