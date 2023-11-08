import './tooltip.css';

import Image from 'next/image';
import logOutIcon from '../../../../../public/logOut-icon.svg';
import editIcon from '../../../../../public/edit-icon.svg';
import deleteIcon from '../../../../../public/delete-icon.svg';

export default function Tooltip() {
    const imageStyle = {
        "vertical-align": "middle",
        "margin-right": "8px",
    };
    return(
        <div className="tooltip_container">
            <ul>
                <li className="tooltip_option"><Image src={logOutIcon} alt="Log out icon" width={24} height={24} style={imageStyle} />Log out</li>
                <li className="tooltip_option"><Image src={editIcon} alt="Log out icon" width={24} height={24} style={imageStyle} />Edit</li>
                <li className="tooltip_option"><Image src={deleteIcon} alt="Log out icon" width={24} height={24} style={imageStyle} />Delete</li>
            </ul>
        </div>
    );
};