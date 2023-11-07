import SideMenu from '../SideMenu/SideMenu';
import UserOverview from './UserOverview/UserOverview';

import sidemenuDocAutomatization from '../../../public/sidemenu-document-automatization.svg';
import sidemenuIntegration from '../../../public/sidemenu-integration.svg';
import sidemenuUser from '../../../public/sidemenu-user.svg';
import sidemenuLicense from '../../../public/sidemenu-license.svg';
import sidemenuSettings from '../../../public/sidemenu-settings.svg';
import sidemenuAudit from '../../../public/sidemenu-audit.svg';

export const metadata = {
  title: 'User management',
  description: 'Second page',
}

export default function Page2() {
  const list = [
    {image: sidemenuDocAutomatization, title: 'Document automation', isActive: false},
    {image: sidemenuIntegration, title: 'Integration', isActive: false},
    {image: sidemenuUser, title: 'User management', isActive: true},
    {image: sidemenuLicense, title: 'License', isActive: false},
    {image: sidemenuSettings, title: 'Settings', isActive: false},
    {image: sidemenuAudit, title: 'Audit logging', isActive: false},
  ];
  return (
    <>
      <SideMenu list={list} />
      <UserOverview />
    </>
  )
}
