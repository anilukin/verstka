import './filesContainer.css';

import cn from 'classnames';

import Image from 'next/image';
import fileIcon from '../../../../../public/file-icon.svg';


export default function FilesContainer() {
    const data = [
        {title: "Introduction", info: {date: 'Aug 31, 5:21 PM', ver: 'v.1.0'}}, 
        {title: "Introduction", info: {date: 'Aug 31, 5:21 PM', ver: 'v.1.0'}, isChecked: true},
        {title: "Introduction", info: {date: 'Aug 31, 5:21 PM', ver: 'v.1.0'}}, 
        {title: "Introduction", info: {date: 'Aug 31, 5:21 PM', ver: 'v.1.0'}}, 
        {title: "Introduction", info: {date: 'Aug 31, 5:21 PM', ver: 'v.1.0'}}, 
        {title: "Introduction", info: {date: 'Aug 31, 5:21 PM', ver: 'v.1.0'}}, 
        {title: "Introduction", info: {date: 'Aug 31, 5:21 PM', ver: 'v.1.0'}}, 
        {title: "Introduction", info: {date: 'Aug 31, 5:21 PM', ver: 'v.1.0'}}, 
        {title: "Introduction", info: {date: 'Aug 31, 5:21 PM', ver: 'v.1.0'}}, 
        {title: "Introduction", info: {date: 'Aug 31, 5:21 PM', ver: 'v.1.0'}},
        {title: "Introduction", info: {date: 'Aug 31, 5:21 PM', ver: 'v.1.0'}}
    ];

    return (
        <div className="files_container">
            {data.map((file) => {
                const fileCardClasses = cn("files_card", { "file_active": file.isChecked })
                return(
                    <div className={fileCardClasses} key={file.id}>
                        <div className="files_card_title">
                            <Image src={fileIcon} alt="file-icon" width={24} height={24} />
                            {file.title}
                        </div>
                        {file.isChecked ? 
                            (<div className="file_info">
                                <p>{file.info.date}</p>
                                <p>{file.info.ver}</p>
                            </div>) : null}
                    </div> 
                );
            })}
        </div>

    );
};