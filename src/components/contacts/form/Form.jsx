import { Button, ContactForm, Label, Input, InputTitle, ValidationError } from './Form.styled';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d`Artagnan'
    )
    .required(),
  number: yup
    .string()
    .trim()
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required(),
});

const Form = ({ onSubmitForm }) => {
  const initialValues = {
    name: '',
    number: '',
  };

  function submitForm(values, { resetForm }) {
    onSubmitForm(values);
    resetForm();
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={submitForm}
      validationSchema={validationSchema}
    >
      <ContactForm>
        <Label>
          <InputTitle>Name</InputTitle>
          <Input type="text" name="name" />
          <ErrorMessage name="name" component={ValidationError} />
        </Label>
        <Label>
          <InputTitle>Number</InputTitle>
          <Input type="tel" name="number" />
          <ErrorMessage name="number" component={ValidationError} />
        </Label>
        <Button type="submit">Add contact</Button>
      </ContactForm>
    </Formik>
  );
};

export default Form;
