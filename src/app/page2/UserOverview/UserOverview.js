import './userOverview.css';

import Image from 'next/image';
import magnifyingIcon from '../../../../public/magnifying-glass-icon.svg';


import UserRow from './UserRow';

export default function UserOverview({usersInfo}) {

    return(
        <div className="userOverview_container">
            <h3>User overview</h3>
            <div className="userOverview_licenses_summary">
                <table>
                    <tbody>
                        <tr>
                            <td>Total user licenses</td>
                            <td className="userOverview_licenses_amount">20</td>
                        </tr>
                        <tr>
                            <td>Used licenses</td>
                            <td className="userOverview_licenses_amount">15</td>
                        </tr>
                    </tbody>
                </table>

                <label htmlFor="licenses">
                    <progress id="licenses" max="20" value="15" />
                </label>
            </div>
            <div className="userOverview_serching_bar">
                <div>
                    <label htmlFor="search_user" className="userOverview_serching_bar_label">
                        <Image src={magnifyingIcon} alt="magnifying-icon" width={14} height={14} className="userOverview_serching_bar_input_magnifying" />
                        <input type="text" placeholder="Search" name="search" id="search_user" className="userOverview_serching_bar_input" />
                    </label>
                </div>
                <div>
                    <label htmlFor="user-group" className="userOverview_serching_bar_label">
                        <select name="user-group" id="user-group" className="userOverview_serching_bar_select">
                            <option value="">User group</option>
                        </select>
                    </label>
                </div>

                <div>
                    <label htmlFor="status" className="userOverview_serching_bar_label">
                        <select name="status" id="status" className="userOverview_serching_bar_select">
                            <option value="">Status</option>
                            <option value="Online">Online</option>
                            <option value="Offline">Offline</option>
                            <option value="Invited">Invited</option>
                        </select>
                    </label>
                </div>

                <div>
                    <label htmlFor="role" className="userOverview_serching_bar_label">
                        <select name="role" id="role" className="userOverview_serching_bar_select">
                            <option value="">Role</option>
                            <option value="User">User</option>
                            <option value="Admin">Admin</option>
                        </select>
                    </label>
                </div>

                <div>
                    <button type="button" className="userOverview_serching_bar_button">+User</button>
                </div>

            </div>

            <div className="userOverview_serching_table">
                <table className="userOverview_serching_table_styles">
                    <thead>
                        <tr>
                            <th colspan="1">Licensed</th>
                            <th colspan="1">Status</th>
                            <th colspan="1">User</th>
                            <th colspan="1">E-Mail address</th>
                            <th colspan="1">Role</th>
                            <th colspan="1">User group</th>
                        </tr>
                    </thead>
                    <tbody>
                    {usersInfo.map((user) => <UserRow key={user.id} user={user} />)}
                    </tbody>
                </table>
            </div>
        </div>
    )
}