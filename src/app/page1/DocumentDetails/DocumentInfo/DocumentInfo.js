import './documentInfo.css';

import Image from 'next/image';
import calendarIcon from '../../../../../public/calendar-icon.svg';
import linkIcon from '../../../../../public/link-icon.svg';

export default function DocumentInfo({data}) {
    return (
        <div className="documentDetails_info">
            <h3>Document details</h3>
            <div className="documentDetails_info_container">
                <div className="documentDetails_info_card">
                    <p className="documentDetails_info_label">Name:</p>
                    <p className="documentDetails_info_data">{data.name}</p>
                </div>

                <div className="documentDetails_info_card">
                    <p className="documentDetails_info_label">Created on:</p>
                    <p className="documentDetails_info_data">{data.creatingDate}</p>
                </div>

                <div className="documentDetails_info_card">
                    <p className="documentDetails_info_label">Pages:</p>
                    <p className="documentDetails_info_data">{data.pagesCount}</p>
                </div>

                <div className="documentDetails_info_card">
                    <p className="documentDetails_info_label">Created by:</p>
                    <p className="documentDetails_info_data">{data.author}</p>
                </div>

                <div className="documentDetails_info_card">
                    <p className="documentDetails_info_label">Location:</p>
                    <p className="documentDetails_info_data">{data.location}</p>
                </div>

                <div className="documentDetails_info_card">
                    <p className="documentDetails_info_label">Size:</p>
                    <p className="documentDetails_info_data">{data.size}</p>
                </div>

                <div className="documentDetails_info_card">
                    <p className="documentDetails_info_label">Type:</p>
                    <p className="documentDetails_info_data">{data.type}</p>
                </div>

                <div className="documentDetails_info_card">
                    <p className="documentDetails_info_label">Retention date:</p>
                    <p className="documentDetails_info_data">
                        {data.retentionDate}
                        <Image src={calendarIcon} alt="calendar icon" width={18} height={18} />
                    </p>
                </div>

                <div className="documentDetails_info_card">
                    <p className="documentDetails_info_label">META DATA:</p>
                    <p className="documentDetails_info_data">{data.metaData}</p>
                </div>

                <div className="documentDetails_info_card">
                    <p className="documentDetails_info_label">SHORTCUTS:</p>
                    {data.shortcuts.map((link, i) => {
                        return (
                            <p key={link.id} className="documentDetails_info_data">
                                <a href="{link}">Shortcut {i+1} (is link to shortcut)</a>
                                <Image src={linkIcon} alt="link icon" width={18} height={18} />
                            </p>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};