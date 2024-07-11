import { MouseSensor, TouchSensor, useSensor, useSensors } from '@dnd-kit/core';
import Column from '../../components/column/column';
import Item from '../../components/item/item';
import { DndContext, DragEndEvent } from '@dnd-kit/core';
import { useState } from 'react';
import { TodoItem, TodoSummaryIndex } from './home.types';
import './home.scss';

const Home = () => {
    const sensors = useSensors(
        useSensor(MouseSensor, {
            activationConstraint: {
                distance: 10,
            },
        }),
        useSensor(TouchSensor, {
            activationConstraint: {
                delay: 250,
                tolerance: 5,
            },
        }),
    );

    const [items, setItems] = useState({
        todo: [
            {
                title: 'Go To Work',
                description:
                    'I need to get up, get ready and head out to work!',
            },
            {
                title: 'Make Breakfast',
                description: 'Before I go to work, I need to make breakfast',
            },
        ],
        doing: [
            {
                title: 'Feed the dogs',
                description: 'When I get back from work, the dogs need dinner',
            },
        ],
        done: [
            {
                title: 'Exercise',
                description:
                    '8 hours at a computer is taxing, make sure to go outside',
            },
        ],
    });

    /**
     * Handles the todo state updates and state set for drag and drop behavior of tasks
     * @param dragEvent {DragEndEvent} - The event emitted from @dnd-kit when an item is dropped
     * @returns {void}
     */
    const handleDragEnd = (dragEvent: DragEndEvent) => {
        // Make sure we are dragging an element
        if (!dragEvent.over || !dragEvent.active.data.current) return;

        const newItems: TodoSummaryIndex = items;
        const originColumn = dragEvent.active.data.current.column;
        const targetColumn = dragEvent.over.id;

        // Check if we dragged to the same column
        if (originColumn === targetColumn) {
            return;
        }

        // Handle removing item from existing column
        newItems[originColumn] = newItems[originColumn].filter((item) => {
            return item.title !== dragEvent.active.data.current?.item.title;
        });

        // Moving item to new column
        newItems[targetColumn].push(dragEvent.active.data.current.item);

        setItems({
            todo: newItems.todo,
            doing: newItems.doing,
            done: newItems.done,
        });
    };

    const handleReorder = (
        item: TodoItem,
        column: string,
        direction: string,
    ) => {
        const newItems: TodoSummaryIndex = items;
        const itemIdx = newItems[column]
            .map((item) => item.title)
            .indexOf(item.title);

        // Boundary check
        if (itemIdx > 0 && direction === 'up') {
            newItems[column][itemIdx] = newItems[column][itemIdx - 1];
            newItems[column][itemIdx - 1] = item;
        } else if (
            itemIdx < newItems[column].length - 1 &&
            direction === 'down'
        ) {
            newItems[column][itemIdx] = newItems[column][itemIdx + 1];
            newItems[column][itemIdx + 1] = item;
        }

        setItems({
            todo: newItems.todo,
            doing: newItems.doing,
            done: newItems.done,
        });
    };

    const handleCreate = (title: string, description: string) => {
        setItems({
            todo: [
                ...items.todo,
                {
                    title,
                    description,
                },
            ],
            doing: items.doing,
            done: items.done,
        });
    };

    return (
        <div id="home" className="flex justify-content-center gap-8">
            <DndContext onDragEnd={handleDragEnd} sensors={sensors}>
                <Column columnHeader="todo" onCreate={handleCreate.bind(this)}>
                    {items.todo.map((item) => (
                        <Item
                            item={item}
                            column={'todo'}
                            key={item.title}
                            onReorder={handleReorder.bind(this)}
                        />
                    ))}
                </Column>
                <Column columnHeader="doing">
                    {items.doing.map((item) => (
                        <Item
                            item={item}
                            column={'doing'}
                            key={item.title}
                            onReorder={handleReorder.bind(this)}
                        />
                    ))}
                </Column>
                <Column columnHeader="done">
                    {items.done.map((item) => (
                        <Item
                            item={item}
                            column={'done'}
                            key={item.title}
                            onReorder={handleReorder.bind(this)}
                        />
                    ))}
                </Column>
            </DndContext>
        </div>
    );
};

export default Home;
