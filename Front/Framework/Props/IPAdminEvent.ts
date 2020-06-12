export interface IPAdminEvent {
    onDelete?: () => void
    onEdit?: () => void
    onVisualize?: () => void;
    handleCheckedAssigned?: () => void;
    checkedAssigned?: boolean;
}
