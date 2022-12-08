export default function ContactItem({
  id,
  name,
  number,
  delContact,
}) {
  return (
    <li>
      {name}: {number}
      <button onClick={() => delContact(id)}>Delete</button>
    </li>
  );
}
