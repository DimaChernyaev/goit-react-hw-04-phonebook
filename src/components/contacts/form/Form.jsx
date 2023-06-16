import { Button, ContactForm, Label, Input, InputTitle } from "./Form.styled";
import { Formik } from "formik";


const Form = ({onSubmitForm}) => {

    const initialValues = {
        name: '', 
        number: ''
    }
    
    function submitForm(values, {resetForm}) {
        onSubmitForm(values)
        resetForm()
    }

    return(
        <Formik initialValues={initialValues} onSubmit={submitForm}>
            <ContactForm>
                <Label>
                    <InputTitle>Name</InputTitle>
                        <Input
                            type="text"
                            name="name"
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                            required
                        />
                </Label>
                <Label>
                    <InputTitle>Number</InputTitle>
                        <Input
                            type="tel"
                            name="number"
                            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                            required
                        />
                </Label>
                <Button type="submit">Add contact</Button>
            </ContactForm>
        </Formik>
    )
}

export default Form;