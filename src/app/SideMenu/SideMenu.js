import './sideMenu.css';

import SideMenuCard from './SideMenuCard';

export default function sideMenu({list}) {

    return (
        <ul className="sidemenu_container">
            {list.map((item) => <SideMenuCard key={item.id} item={item} />)}
        </ul>
    );
};