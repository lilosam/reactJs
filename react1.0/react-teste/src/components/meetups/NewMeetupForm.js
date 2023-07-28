import { useRef } from "react";

import Card from "../ui/Card";
import classes from './NewMeetupForm.module.css'

function NewMeetupForm(props){
    const titleImputRef = useRef();
    const imageImputRef = useRef();
    const addressImputRef = useRef();
    const descriptionImputRef = useRef();

    function submitHandler(event){
        event.preventDefault();

        const enteredTitle = titleImputRef.current.value;
        const enteredImage = imageImputRef.current.value;
        const enteredAddress = addressImputRef.current.value;
        const enteredDescription = descriptionImputRef.current.value;

        const meetupData = {
            title: enteredTitle,
            image: enteredImage,
            address: enteredAddress,
            description: enteredDescription
        }

        props.onAddMeetup(meetupData);
    }

    return <Card>
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.control}>
                <label htmlFor="title">Meetup title</label>
                <input type="text" required id="title" ref={titleImputRef} />
            </div>
            <div className={classes.control}>
                <label htmlFor="image">Imagem</label>
                <input type="url" required id="image" ref={imageImputRef} />
            </div>
            <div className={classes.control}>
                <label htmlFor="address">Endereco</label>
                <input type="text" required id="address" ref={addressImputRef} />
            </div>
            <div className={classes.control}>
                <label htmlFor="description">Descricao</label>
                <textarea id="description" required rows='5' ref={descriptionImputRef}></textarea>
            </div>
            <div className={classes.actions}>
                <button>Add Meetup</button>
            </div>
        </form>
    </Card>
}

export default NewMeetupForm;