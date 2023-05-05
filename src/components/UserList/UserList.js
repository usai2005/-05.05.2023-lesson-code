export const UserList = ({ users, deleteUser }) => (
  <ul>
    {users.map(({ name, email, id }) => (
      <li key={id}>
        <p>{name}</p>
        <p>{email}</p>
        <button type="button" onClick={() => deleteUser(id)}>
          Delete
        </button>
      </li>
    ))}
  </ul>
);
