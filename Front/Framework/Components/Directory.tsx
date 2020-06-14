import {PureComponent} from "react";
import * as React from "react";
import {Button, Card, CardActions, CardContent, CardHeader, IconButton, Typography} from "@material-ui/core";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {CardPro} from "./CardPro";
import StarIcon from '@material-ui/icons/Star';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import PublishIcon from '@material-ui/icons/Publish';
import {IpDirectory} from "../Props/IpDirectory";
import {DialogContactProfesional} from "../Containers/DialogContactProfesional";
import {ISDirectory} from "../states/ISDirectory";

export class Directory extends PureComponent<IpDirectory, ISDirectory> {
    state = {
        open: false,
    };

    constructor(props) {
        super(props);
    }

    render() {
        const {open} = this.state;
        return (
            <>
                <Card className={"Directory"}>
                    <CardHeader
                        avatar={
                            <CardPro
                                title={this.props.item.name}
                                image={"https://assets.entrepreneur.com/content/3x2/2000/20190312212557-tarjeta-presentacion.jpeg"}
                            />
                        }
                        action={
                            <IconButton aria-label="settings">
                                <MoreVertIcon/>
                            </IconButton>
                        }
                        title={this.props.item.name}
                        subheader={(
                            <>
                                <div>{(this.props.item.roleParent) ? `${this.props.item.roleParent} - ${this.props.item.role}` : this.props.item.role}</div>
                                <div>
                                    <StarIcon/>
                                    <StarIcon/>
                                    <StarIcon/>
                                    <StarIcon/>
                                    <StarIcon/>
                                </div>
                            </>
                        )}
                    />
                    <CardContent style={{paddingTop: 0, paddingBottom: 0}}>
                        <Typography variant="body2" component="p">
                            {this.props.item.description}
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites">
                            <FavoriteIcon/>
                        </IconButton>
                        <IconButton aria-label="share">
                            <ShareIcon/>
                        </IconButton>
                        <Button
                            variant="contained"
                            color="primary"
                            startIcon={<PublishIcon/>}
                            size="small"
                            style={{marginLeft: 20}}
                        >
                            Pedir Presupuesto
                        </Button>
                        <Button
                            size="small"
                            style={{marginLeft: 20}}
                            variant="contained"
                            color="secondary"
                            onClick={() => this.setState({open: true})}
                            startIcon={<PublishIcon/>}
                        >
                            Contactar
                        </Button>
                    </CardActions>
                </Card>
                <DialogContactProfesional
                    idProfesional={this.props.item.id}
                    open={open}
                    handleClose={() => {
                        this.setState({open: false})
                    }}
                />
            </>
        );
    }
}
