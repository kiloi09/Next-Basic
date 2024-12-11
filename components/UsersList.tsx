import { fetchUsers } from "@/utils/action"
import DeleteButton from './DeleteButton';

const UsersList = async () => {
  const users = await fetchUsers();

  return (
    <div className='mt-4'>
      {users.length ? (
        <div>
          {users.map(item => {
            const { id, firstName, lastName } = item
            return(
              <h4 key={id} className='capitalize text-lg'>
                {firstName} {lastName}
                <DeleteButton id={id} />
            </h4>
            )
          })}
        </div>
      ) : (
        <p>No users found...</p>
      )}
    </div>
  );
}
export default UsersList