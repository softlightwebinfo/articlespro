export interface IPDialogFullScreen {
    open: boolean;
    title: string;
    children: any;

    handleClose();

    handleOk();

    handleSelect();
}
