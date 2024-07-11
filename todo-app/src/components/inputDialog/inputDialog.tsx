import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';
import { useState } from 'react';
import { InputDialogProps } from './inputDialog.types';
import './inputDialog.scss';

const InputDialog = (props: InputDialogProps) => {
    const [title, setTitle] = useState<string>('');
    const [feedback, setFeedback] = useState<string | boolean>(false);
    const [description, setDescription] = useState<string>('');

    const handleTitleUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    };

    const handleDescriptionUpdate = (
        e: React.ChangeEvent<HTMLTextAreaElement>,
    ) => {
        setDescription(e.target.value);
    };

    const handleSubmit = () => {
        if (title == '' || description == '') {
            setFeedback('Please complete both fields before proceeding');
            return;
        }

        // Create the todo
        props.onCreate(title, description);

        // Reset state
        setTitle('');
        setDescription('');
        setFeedback(false);

        // Close modal
        props.toggle();
    };

    return (
        <Dialog
            header="Add a new todo item"
            visible={props.isVisible}
            style={{ width: '50vw' }}
            onHide={() => {
                props.toggle();
            }}
        >
            {feedback && (
                <div className="error-container">
                    <p>
                        <i className="pi pi-exclamation-triangle" />
                        &nbsp;&nbsp;{feedback}
                    </p>
                </div>
            )}
            <div className="flex flex-column gap-2 pb-3">
                <label htmlFor="title">Title</label>
                <InputText
                    id="title"
                    aria-describedby="title-help"
                    value={title}
                    onChange={handleTitleUpdate}
                />
                <small id="title-help">
                    Enter the title for your todo task
                </small>
            </div>
            &nbsp;
            <div className="flex flex-column gap-2 pb-3">
                <label htmlFor="title">Description</label>
                <InputTextarea
                    id="title"
                    aria-describedby="title-help"
                    value={description}
                    onChange={handleDescriptionUpdate}
                />
                <small id="title-help">
                    Enter the description for your todo task
                </small>
            </div>
            <div className="flex flex-column mt-3">
                <Button label="Submit" onClick={handleSubmit} />
            </div>
        </Dialog>
    );
};

export default InputDialog;
