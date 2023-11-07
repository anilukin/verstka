import './header.css';

import Image from 'next/image';
import navIcon from '../../../public/nav-icon.svg';
import logoIcon from '../../../public/logo-icon.png';
import userIcon from '../../../public/user-icon.svg';
import messageIcon from '../../../public/message-icon.svg';
import refreshIcon from '../../../public/refresh-icon.svg';
import magnifyingIcon from '../../../public/magnifying-glass-icon.svg';

export default function Header() {
    return (
        <div className="header_container">
            <div className="header_logo">
                <Image src={navIcon} alt="nav-icon" width={27} height={27} />
                <Image src={logoIcon} alt="logo-icon" width={92.4} height={16.8} />
            </div>
  
            <div className="header_instruments">
                <div>
                    <label htmlFor="search" className="header_search_label">
                        <Image src={magnifyingIcon} alt="magnifying-icon" width={14} height={14} className="header_input_magnifying" />
                        <input type="text" placeholder="Search" name="search" id="search" className="header_input" />
                    </label>
                </div>
                <div className="header_icon_with_text">
                    <Image src={refreshIcon} alt="refresh-icon" width={28} height={28} className="header_icon" />
                    <div className="header_text_on_icon">7</div>
                </div>
                <div className="header_icon_with_text">
                    <Image src={messageIcon} alt="message-icon" width={28} height={28} className="header_icon" />
                    <div className="header_text_on_icon">5</div>
                </div>
                <div>
                    <Image src={userIcon} alt="user-icon" width={28} height={28} className="header_avatar" />
                </div>
            </div>
        </div>
    )
}