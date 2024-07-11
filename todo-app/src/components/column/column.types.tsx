export interface ColumnProps {
    columnHeader: string;
    children: React.ReactNode;
    onCreate?: (title: string, description: string) => void;
    onClear?: () => void;
}
