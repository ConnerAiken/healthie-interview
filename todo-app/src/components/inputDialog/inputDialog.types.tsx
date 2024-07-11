export interface InputDialogProps {
    isVisible: boolean;
    toggle: () => void;
    onCreate: (title: string, description: string) => void;
}
