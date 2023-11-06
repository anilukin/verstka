import './sideMenu.css';

import Image from 'next/image';

import folderIcon from '../../../public/folder-icon.svg';
import sidemenuIntegration from '../../../public/sidemenu-integration.svg';
import sidemenuUser from '../../../public/sidemenu-user.svg';
import sidemenuLicense from '../../../public/sidemenu-license.svg';
import sidemenuSettings from '../../../public/sidemenu-settings.svg';
import sidemenuAudit from '../../../public/sidemenu-audit.svg';



export default function sideMenu() {
    return (
        <ul className="sidemenu_container">
            <li className="sidemenu_card">
                <Image src={folderIcon} alt="sidemenu-document-icon" width={16} height={16} />
                <p>Document automation</p>
            </li>

            <li className="sidemenu_card">
                <Image src={sidemenuIntegration} alt="sidemenu-integration-icon" width={16} height={16} />
                <p>Integration</p>
            </li>

            <li className="sidemenu_card sidemenu_card_checked">
                <Image src={sidemenuUser} alt="sidemenu-user-icon" width={16} height={16} />
                <p>User management</p>
            </li>

            <li className="sidemenu_card">
                <Image src={sidemenuLicense} alt="sidemenu-license-icon" width={16} height={16} />
                <p>License</p>
            </li>

            <li className="sidemenu_card">
                <Image src={sidemenuSettings} alt="sidemenu-settings-icon" width={16} height={16} />
                <p>Settings</p>
            </li>

            <li className="sidemenu_card">
                <Image src={sidemenuAudit} alt="sidemenu-audit-icon" width={16} height={16} />
                <p>Audit logging</p>
            </li>
        </ul>
    );
}