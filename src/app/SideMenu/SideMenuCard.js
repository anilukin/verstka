import Image from 'next/image';
import cn from 'classnames';

export default function SideMenuCard ({ item }) {
    const {image, title, isActive} = item;
    const cardMenuClasses = cn("sidemenu_card", { "sidemenu_card_checked": isActive });

    return(
    <li className={cardMenuClasses}>
        <Image src={image} alt="{title} icon" width={16} height={16} />
        <p>{title}</p>
    </li>
    );
};