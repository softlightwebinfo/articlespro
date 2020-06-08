import {Component} from "react";
import Register from "../Components/Register";
import * as React from "react";
import {ISRegisterContainer} from "../states/ISRegisterContainer";
import {Form} from "../libs/Form";
import {connect} from 'react-redux';
import {IPRegisterContainer} from "../Props/IPRegisterContainer";
import {ActionUserRegister} from "../store/user";
import {IAuthRegister} from "../Interfaces/IAuth";

@connect(state => ({isLogin: state.user.isLogin}))
export class RegisterContainer extends Component<IPRegisterContainer, ISRegisterContainer> {
    public state: ISRegisterContainer = {
        form: new Form(),
    };

    constructor(props) {
        super(props);
    }

    onChange = (e) => {
        this.state.form.add(e.target.name, e.target.value, e.target.type);
        this.setState({
            form: this.state.form,
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        if (!this.state.form.validatePasswords()) {
            alert("Las contraseñas no son iguales");
            return;
        }

        if (!this.state.form.validate()) {
            alert("Error");
            return;
        }
        let result = this.state.form.getFields();
        let user: IAuthRegister = result as IAuthRegister;
        user.name = `${result['firstName']} ${result['lastName']}`;
        this.props.dispatch(ActionUserRegister(user));
    };

    render() {
        return (
            <Register
                onSubmit={this.onSubmit}
                onChange={this.onChange}
            />
        );
    }
}
