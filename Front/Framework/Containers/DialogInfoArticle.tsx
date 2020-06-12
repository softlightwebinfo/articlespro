import React from 'react';
import {createStyles, Theme, withStyles, WithStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import {IPListArticlesAdminResult} from "../Props/IPListArticlesAdmin";
import * as moment from "moment";
import {CardMedia} from "@material-ui/core";

const styles = (theme: Theme) =>
    createStyles({
        media: {
            height: 0,
            paddingTop: '56.25%', // 16:9
        },
        root: {
            margin: 0,
            padding: theme.spacing(2),
        },
        closeButton: {
            position: 'absolute',
            right: theme.spacing(1),
            top: theme.spacing(1),
            color: theme.palette.grey[500],
        },
    });

export interface DialogTitleProps extends WithStyles<typeof styles> {
    id: string;
    children: React.ReactNode;
    onClose: () => void;
}

const DialogTitle = withStyles(styles)((props: DialogTitleProps) => {
    const {children, classes, onClose, ...other} = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon/>
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles((theme: Theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiDialogContent);

const DialogActions = withStyles((theme: Theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(1),
    },
}))(MuiDialogActions);

export interface IDialogInfoArticle {
    handleClose: () => void;
    open: boolean;
    article: IPListArticlesAdminResult
}

export function DialogInfoArticle({handleClose, open, article}: IDialogInfoArticle) {
    return (
        <div>
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    {article.title}
                </DialogTitle>
                <DialogContent dividers>
                    <CardMedia
                        style={{
                            height: 0,
                            paddingTop: '56.25%', // 16:9
                        }}
                        image={article.image ? `/images/resized/${article.image}` : "/static/images/badImage.png"}
                        title="Paella dish"
                    />
                    <br/>
                    <b>Titulo del producto</b>
                    <Typography gutterBottom>
                        {article.title}
                    </Typography>
                    <b>Precio del producto</b>
                    <Typography gutterBottom>
                        {article.price} €
                    </Typography>
                    <b>Oferta básica del producto</b>
                    <Typography gutterBottom>
                        {article.offer} %
                    </Typography>
                    <b>Precio final del producto</b>
                    <Typography gutterBottom variant={"h4"}>
                        {Number(article.offer) > 0 ? (Number(article.price) - (Number(article.offer) * Number(article.price) / 100)).toFixed(2) : article.price} €
                    </Typography>
                    <b>Fecha Publicación</b>
                    <Typography gutterBottom>
                        {moment(article.updatedAt).format("DD/MM/YYYY HH:mm:ss")}
                    </Typography>
                    <b>Description</b>
                    <Typography gutterBottom>
                        {article.description}
                    </Typography>
                    <Typography gutterBottom>
                        Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
                        scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
                        auctor fringilla.
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose} color="primary">
                        Cerrar
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
