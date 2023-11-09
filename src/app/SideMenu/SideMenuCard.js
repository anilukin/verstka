import Image from 'next/image';
import cn from 'classnames';

export default function SideMenuCard ({ item }) {
    const {image, title, isActive} = item;
    const cardMenuClasses = cn("sidemenu_card", { "sidemenu_card_checked": isActive });
    const showSubCategories = (subCat) => {
        return subCat.map((cat) => {
            const {title, isActive} = cat;
            const subCatClasses = cn("sidemenu_subcategory", { "sidemenu_subcategory_checked": isActive });
            return <p key={cat.id} className={subCatClasses}>{title}</p>
        });
    }

    return(
        <>
            <li className={cardMenuClasses}>
                <Image src={image} alt={title + " icon"} width={18} height={18} />
                {title}
            </li>
            {item.subCategories ? <div className="sidemenu_subcategories_container">{showSubCategories(item.subCategories)}</div> : null}
        </>
    );
};