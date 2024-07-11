import './column.scss';
import { useState } from 'react';
import { Panel } from 'primereact/panel';
import { useDroppable } from '@dnd-kit/core';
import InputDialog from './../inputDialog/inputDialog';
import { ColumnProps } from './column.types';

const Column = (props: ColumnProps): JSX.Element => {
    const [isAdding, setAdditionMode] = useState<boolean>(false);
    const { isOver, setNodeRef } = useDroppable({
        id: props.columnHeader,
    });

    return (
        <>
            <InputDialog
                isVisible={isAdding}
                toggle={() => setAdditionMode(!isAdding)}
                onCreate={props.onCreate}
            />
            <Panel
                header={<>{props.columnHeader}</>}
                icons={
                    <>
                        {props.columnHeader === 'todo' && (
                            <i
                                className="pi pi-plus"
                                onClick={() => setAdditionMode(true)}
                            />
                        )}
                    </>
                }
                className={isOver ? 'drag-target todo-column' : 'todo-column'}
            >
                <div ref={setNodeRef} className="drag-zone">
                    {props.children}
                </div>
            </Panel>
        </>
    );
};

export default Column;
