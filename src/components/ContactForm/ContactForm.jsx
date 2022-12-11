import { useForm } from 'react-hook-form';

import {
  useGetContactsQuery,
  useAddContactMutation,
} from '../../redux/contactsSlice';

import InputName from './InputName/InputName';
import InputPhone from './InputPhone/InputPhone';

export default function ContactForm() {
  const { data: contacts = [] } = useGetContactsQuery();
  const [addContact] = useAddContactMutation();

  console.log(contacts);

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

    addContact(e);

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
