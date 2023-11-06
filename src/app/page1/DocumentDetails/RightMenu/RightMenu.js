import './rightMenu.css';

import Image from 'next/image';
import menuIcon1 from '../../../../../public/menu-icon1.svg';
import menuIcon2 from '../../../../../public/menu-icon2.svg';
import menuIcon3 from '../../../../../public/menu-icon3.svg';
import menuIcon4 from '../../../../../public/menu-icon4.svg';
import menuIcon5 from '../../../../../public/menu-icon5.svg';

export default function RightMenu() {
    return (
        <div className="rightMenu_navigation">
            <div className="rightMenu_card">
                <Image src={menuIcon1} alt="menu-icon1" width={24} height={24} />
            </div>
            <div className="rightMenu_card">
                <Image src={menuIcon2} alt="menu-icon2" width={24} height={24} />
            </div>
            <div className="rightMenu_card activ_menu_card">
                <Image src={menuIcon3} alt="menu-icon3" width={24} height={24} />
            </div>
            <div className="rightMenu_card">
                <Image src={menuIcon4} alt="menu-icon4" width={24} height={24} />
            </div>
            <div className="rightMenu_card">
                <Image src={menuIcon5} alt="menu-icon5" width={24} height={24} />
            </div>
        </div>
    );
};