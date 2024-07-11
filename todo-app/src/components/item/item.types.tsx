import { TodoItem } from '../../routes/home/home.types';

export interface ItemProps {
    item: TodoItem;
    column: string;
    onReorder: (item: TodoItem, column: string, direction: string) => void;
}
