import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {IDialog} from "../Interfaces/IDialog";
import {Form} from "../Components/Form";
import {FormGenerate} from "../libs/Form/FormGenerate";
import {FormTextarea} from "../libs/Form/Components/FormTextarea";
import {useSelector} from 'react-redux';
// @ts-ignore
import {Link} from '../../server/routes';

export interface IPDialogContactProfesional extends IDialog {
    idProfesional: number;
}

export function DialogContactProfesional({handleClose, open}: IPDialogContactProfesional) {
    const login = useSelector(state => state.user.isLogin);

    const form = () => {
        const f: FormGenerate = new FormGenerate({
            id: "form",
            onSubmit: (e) => {
                e.preventDefault();
                if (login) {

                }
            },
            onChange(e: any, component: any): void {
            }
        });
        f.add(new FormTextarea("message", "Mensaje").SetAutoFocus(true));

        return f;
    };
    return (
        <div>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Contactar con el profesional</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To subscribe to this website, please enter your email address here. We will send updates
                        occasionally.
                    </DialogContentText>
                    {login && <Form form={form()}/>}
                </DialogContent>
                <DialogActions>
                    {login ? (<>
                        <Button onClick={handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button type={"submit"} form={"form"} color="primary">
                            Contactar
                        </Button>
                    </>) : (<>
                        <Button onClick={handleClose} color="primary">
                            Cancel
                        </Button>
                        <Link route={"login"}>
                            <a>
                                <Button color="primary">
                                    Iniciar sesión
                                </Button>
                            </a>
                        </Link>
                    </>)}
                </DialogActions>
            </Dialog>
        </div>
    );
}
