import Image from 'next/image';
import cn from 'classnames';

import checkIcon from '../../../../public/check-icon.svg';
import letterIcon from '../../../../public/letter-icon.svg';

const getClassForStatus = (st) => {
    let className;
    switch(st) {
        case "Online":
            className = 'userOverview_serching_table_on';
            break;
        case "Invited":
            className = 'userOverview_serching_table_inv';
            break;
        default: className = null;    
    }
    return className;
};

export default function UserRow ({ user }) {
    const {isChecked, isLicensed, status, userName, email, role, userGroup} = user;
    const userRowClasses = cn("userOverview_serching_table_row", { "checked_row": isChecked });
    
    const classNameStatus = getClassForStatus(status);
    const imageStyle = {
        "vertical-align": "middle",
        "margin-left": "8px",
    };
    const statusIcon = (status === "Invited") ? <Image src={letterIcon} alt="letter-icon" width={14} height={14} style={imageStyle} /> : null;

    return(     
        <tr className={userRowClasses}>
            <td colSpan="1">{isLicensed ? <Image src={checkIcon} alt="check-license" width={14} height={14} /> : ''}</td>
            <td colSpan="1" className={classNameStatus}>
                {status}
                {statusIcon}
            </td>
            <td colSpan="1">{userName}</td>
            <td colSpan="1">{email}</td>
            <td colSpan="1">{role}</td>
            <td colSpan="1">{userGroup}</td>
        </tr>
    );
};