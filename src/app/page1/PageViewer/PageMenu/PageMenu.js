import './pageMenu.css';

import Image from 'next/image'

import IconPrint from '../../../../../public/page-menu-icon-print.svg';
import IconShare from '../../../../../public/page-menu-icon-share.svg';
import IconCopy from '../../../../../public/menu-icon2.svg';
import NavIcon from '../../../../../public/nav-icon.svg';

export default function PageMenu() {

    return (
        <div className="pageMenu_container">
            <div className="pageMenu_container_mainOptions">
                <div className="pageMenu_container_option">
                    <Image src={IconPrint} alt="icon-print" width={16} height={16} />
                    <span>Print</span>
                </div>
                <div className="pageMenu_container_option">
                    <Image src={IconShare} alt="icon-print" width={16} height={16} />
                    <span>Share</span>
                </div>
                <div className="pageMenu_container_option">
                    <Image src={IconCopy} alt="icon-print" width={16} height={16} />
                    <span>Copy</span>
                </div>
            </div>
            <div className="pageMenu_container_moreOptions">
                <div className="pageMenu_container_option">
                    <Image src={NavIcon} alt="icon-print" width={16} height={16} />
                    <span>More</span>
                </div>
            </div>
        </div>
    );
}