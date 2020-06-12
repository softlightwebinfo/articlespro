import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions'
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import {IPOferta} from "../Props/IPOferta";

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

export const Oferta: ({offer, isAdmin, admin}: IPOferta) => any = ({offer, isAdmin, admin}) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={offer.image ? `/images/offers/${offer.image}` : "/static/images/badImage.png"}
                    title={offer.title}
                />
            </CardActionArea>
            <CardActions>
                {isAdmin ? (
                    <>
                        <Button onClick={admin.onClickAssign} size="small" color="primary">
                            Asignar
                        </Button>
                        <Button size="small" color="primary">
                            Leer más
                        </Button>
                    </>
                ) : (
                    <>
                        <Button size="small" color="primary">
                            Leer más
                        </Button>
                    </>
                )}
            </CardActions>
        </Card>
    );
}
