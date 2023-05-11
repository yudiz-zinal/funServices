import { Container, Table, Button, Dropdown } from "react-bootstrap";

import editIcon from "../../../../assets/images/icon/edit-pen-icon.svg"
import archiveIcon from "../../../../assets/images/icon/archive-icon.svg"
import unarchiveIcon from "../../../../assets/images/icon/unarchive-icon.svg"
import viewIcon from "../../../../assets/images/icon/view-icon.svg"
import sortIcon from "../../../../assets/images/icon/sort-icon.svg"
import prevArrow from "../../../../assets/images/icon/left-arrow.svg"
import nextArrow from "../../../../assets/images/icon/right-arrow.svg"

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


function CofrsDashboard() {
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
    <Container>
      <section className="management-section mb-3 mb-md-5 pb-1">
        <div className="title d-flex flex-column flex-lg-row justify-content-between align-items-lg-center pb-3">
          <h1 class="mb-2 mb-lg-0">Owners Management</h1>
          <div className="d-flex flex-wrap flex-md-nowrap align-items-center">
            <div class="from-group search-group mb-0">
              <input type="text" class="form-control search-control input-field" id="name" placeholder="Search" />
            </div>
            <Dropdown className="ms-sm-2">
              <Dropdown.Toggle variant="link" id="status" className="d-inline-flex align-items-center">
                Active
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Active</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Archive</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Button className="theme-btn small-btn ms-2">Create Owner</Button>
          </div>
        </div>
        <Table responsive className="text-center">
          <thead>
            <tr>
              <th>Sr. No.</th>
              <th>
                <div class="d-flex align-items-center justify-content-center">
                  Owners Name <Button className="data-sort flex-shrink-0" variant="link"><img src={sortIcon} alt="sort" /></Button>
                </div>
              </th>
              <th>
                <div class="d-flex align-items-center justify-content-center">
                  Email ID <Button className="data-sort flex-shrink-0" variant="link"><img src={sortIcon} alt="sort" /></Button>
                </div>
              </th>
              <th>
                <div class="d-flex align-items-center justify-content-center">
                  Phone Number <Button className="data-sort flex-shrink-0" variant="link"><img src={sortIcon} alt="sort" /></Button>
                </div>
              </th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              [1, 2, 3, 4, 5].map((item) => {
                return (
                  <tr key={item}>
                    <td>{item}</td>
                    <td>Stefan Gilbert</td>
                    <td>stefan.l@xyz.com</td>
                    <td>(012) 345-6789</td>
                    <td>
                      <div className="action-btns d-flex align-items-center justify-content-center">
                        <Button variant="link">
                          <img src={viewIcon} alt="view" />
                        </Button>
                        <Button variant="link">
                          <img src={editIcon} alt="edit" />
                        </Button>
                        <Button variant="link">
                          <img src={archiveIcon} alt="archive" />
                        </Button>
                        <Button variant="link">
                          <img src={unarchiveIcon} alt="archive" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </Table>
        <div className="pagination d-flex align-items-center justify-content-center">
          <Button variant="link">
            <img src={prevArrow} alt="prev" />
          </Button>
          <Button variant="link" className="pages">1</Button>
          <Button variant="link" className="pages">2</Button>
          <Button variant="link" className="pages">3</Button>
          <Button variant="link">
            <img src={nextArrow} alt="next" />
          </Button>
        </div>
      </section>
    </Container>
  );
}

export default CofrsDashboard;