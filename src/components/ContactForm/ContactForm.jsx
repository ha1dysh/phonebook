import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';

import { addContact } from '../../redux/contactsSlice';

import InputName from './InputName/InputName';
import InputPhone from './InputPhone/InputPhone';

export default function ContactForm({ addContact: add }) {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (e) => {
    const isDuplicate = contacts.some((obj) => obj.name === e.name);

    if (isDuplicate) {
      alert('name already exist');
      return;
    }

    e.id = nanoid(5);
    dispatch(addContact(e));

    reset();
  };

  return (
    <>
      <h1>Phonebook</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputName register={register} errors={errors} />
        <InputPhone register={register} errors={errors} />
        <br />
        <input type="submit" value="Add contact" />
      </form>
    </>
  );
}
