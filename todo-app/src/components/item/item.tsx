import './item.scss';
import { Card } from 'primereact/card';
import { useDraggable } from '@dnd-kit/core';
import { ItemProps } from './item.types';

const Item = (props: ItemProps) => {
    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: props.item.title,
        data: {
            item: props.item,
            column: props.column,
        },
    });

    // Style for transforming the position during drag events
    const style = transform
        ? {
              transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
          }
        : undefined;

    return (
        <Card
            title={
                <div className="flex justify-content-between align-items-center	 card-title">
                    <span className="card-title-text">{props.item.title}</span>
                    <span className="card-title-btns">
                        <i
                            className="pi pi-caret-up"
                            onClick={() =>
                                props.onReorder(props.item, props.column, 'up')
                            }
                        />
                        <i
                            className="pi pi-caret-down"
                            onClick={() =>
                                props.onReorder(
                                    props.item,
                                    props.column,
                                    'down',
                                )
                            }
                        />
                    </span>
                </div>
            }
            className="item"
            ref={setNodeRef}
            style={style}
            {...listeners}
            {...attributes}
        >
            <p className="m-0">{props.item.description}</p>
        </Card>
    );
};

export default Item;
