import './userOverview.css';

import Image from 'next/image';

import magnifyingIcon from '../../../../public/magnifying-glass-icon.svg';

export default function UserOverview() {
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
                        <Image src={magnifyingIcon} alt="magnifying-icon" className="userOverview_serching_bar_input_magnifying" />
                        <input type="text" placeholder="Search" name="search" id="search_user" className="userOverview_serching_bar_input" />
                    </label>
                </div>
                <div>Hi</div>

            </div>
        </div>
    )
}