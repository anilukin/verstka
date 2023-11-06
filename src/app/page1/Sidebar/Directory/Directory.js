import './directory.css';
import cn from 'classnames';

import Image from 'next/image';
import folderIcon from '../../../../public/folder-icon.svg';

export default function Directory({ folderInfo }) {
    const { title, isActiv, children } = folderInfo;
    const dirClasses = cn("directory_folder_card", { "active": isActiv })

    return (
        <div className={dirClasses}>
            <div className="directory_folder_card_header">
                <div className="directory_folder_card_title">
                    <Image src={folderIcon} alt="folder-icon" />
                    {title}
                </div>
                {children && children.length > 0 && !isActiv ? <p>{children.length}</p> : null}
            </div>
            {isActiv && children ? 
                <div className="directory_folder_card_container">
                    {children.map((child) => <Directory key={child.id} folderInfo={child} />)}
                </div> : null
            }
        </div>
    );
}