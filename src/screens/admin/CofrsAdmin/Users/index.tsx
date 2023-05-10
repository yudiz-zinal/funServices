// import { useRecoilValue, useRecoilState } from 'recoil';
// import { usersAtom, usersLoadingAtom } from 'recoilState/users';
// import { accountAtom } from 'recoilState/account';
// import { useEffect } from 'preact/hooks';
// import { NavLink } from 'react-router-dom';
// import {
//     getAllUsers,
//     updateUserProperty as updateUserPropertyAPI,
// } from 'services/UserService';
// import { formatUsers } from 'utils';

function Users() {
  // const account: AccountModel | undefined = useRecoilValue(accountAtom);
  // const [users, setUsers] = useRecoilState<Array<UserModel> | undefined>(
  //     usersAtom
  // );
  // const [usersLoading, setUsersLoading] =
  //     useRecoilState<boolean>(usersLoadingAtom);

  // useEffect(() => {
  //     shouldWeGetUsers();
  // }, [account, users]);

  // const shouldWeGetUsers = async () => {
  //     if (users !== undefined || usersLoading) return;

  //     setUsersLoading(true);
  //     const getUsers = await getAllUsers();
  //     setUsersLoading(false);

  //     if (getUsers.success) setUsers(formatUsers(getUsers.data));
  // };

  // const updateUserProperty = async (
  //     index: number,
  //     id: string,
  //     property: UserModelUpdateBooleanProperties,
  //     value: any
  // ) => {
  //     if (!canProceed(index, id) || !users) return;

  //     if (!window.confirm(`Set user ${property} as ${value}?`)) return;

  //     const user = users[index];

  //     updateUser(index, {
  //         ...user,
  //         isBusy: true,
  //         [property]: value,
  //     });

  //     const { success } = await updateUserPropertyAPI(id, property, value);

  //     updateUser(index, {
  //         ...user,
  //         isBusy: false,
  //         [property]: success ? value : !value,
  //     });
  // };

  // const canProceed = (index: number, id: string) => {
  //     if (users && users[index]) {
  //         const user = users[index];

  //         if (user.id !== id || user.isBusy) return false;

  //         return true;
  //     }

  //     return false;
  // };

  // const updateUser = (index: number, user: UserModel) => {
  //     if (!users) return;

  //     let allUsers = [...users];
  //     allUsers[index] = user;

  //     setUsers(allUsers);
  // };

  // const renderUser = (user: UserModel, index: number) => {
  //     return (
  //         <tr key={index}>
  //             <td>{user.email}</td>
  //             <td
  //                 style={{
  //                     backgroundColor: user.emailVerified
  //                         ? 'lightgreen'
  //                         : 'red',
  //                 }}
  //                 onClick={(_event: MouseEvent) => {
  //                     updateUserProperty(
  //                         index,
  //                         user.id,
  //                         'emailVerified',
  //                         !user.emailVerified
  //                     );
  //                 }}
  //             >
  //                 {user.emailVerified ? 'Yes' : 'Verify email'}
  //             </td>
  //             <td>{user.phoneNumber}</td>
  //             <td>{user.metadata.creationTime}</td>
  //             <td>{user.metadata.lastSignInTime}</td>
  //             <td
  //                 style={{
  //                     backgroundColor: user.disabled ? 'red' : 'lightgreen',
  //                 }}
  //                 onClick={(_event: MouseEvent) => {
  //                     updateUserProperty(
  //                         index,
  //                         user.id,
  //                         'disabled',
  //                         !user.disabled
  //                     );
  //                 }}
  //             >
  //                 {user.disabled ? 'Disabled' : 'Enabled'}
  //             </td>
  //             <td
  //                 style={{ backgroundColor: user.admin ? 'lightgreen' : '' }}
  //                 onClick={(_event: MouseEvent) => {
  //                     updateUserProperty(
  //                         index,
  //                         user.id,
  //                         'admin',
  //                         !user.admin
  //                     );
  //                 }}
  //             >
  //                 {user.admin ? 'Admin' : 'User'}
  //             </td>
  //             <td>
  //                 <NavLink to={`/users/${user.id}`}>Details</NavLink>
  //             </td>
  //         </tr>
  //     );
  // };

  // console.log(users, 'users', account);
  // const renderUsers = () => {
  //     if (users === undefined) return '';

  //     return (
  //         <table style={{ backgroundColor: 'lightblue' }}>
  //             <tr>
  //                 <th>Email</th>
  //                 <th>Email Verified</th>
  //                 <th>Phone number</th>
  //                 <th>Created at</th>
  //                 <th>Last signin</th>
  //                 <th>State</th>
  //                 <th>Role</th>
  //                 <th>Details</th>
  //             </tr>
  //             {users.map((user: UserModel, index: number) =>
  //                 renderUser(user, index)
  //             )}
  //         </table>
  //     );
  // };

  return (
    <>
      users
      {/* <NavLink to={`/users/create-user`}>Create new user</NavLink> */}
      {/* {renderUsers()} */}
    </>
  );
}

export default Users;
