import './documentDetails.css';

import DocumentInfo from '../DocumentInfo/DocumentInfo';
import RightMenu from '../RightMenu/RightMenu';

export default function DocumentDetails() {
    const documentInfo = {
        name: 'Name Name',
        creatingDate: '21-10-23',
        pagesCount: '13',
        author: 'Johanes Mahil',
        location: 'Retsoft folder location',
        size: '18KB',
        type: 'e.g. world, pdf etc',
        retentionDate: '21-10-2024',
        metaData: '<xmp:CreateDate>2022-03-15T07:3943+07:00</xmp:CreateDate><xmp:CreatorTool>CorelDRAW X6</xmp:CreatorTool>',
        shortcuts: ['shc1', 'shc2'],
    };
    return (
        <div className="documentDetails_container">
            <DocumentInfo data={documentInfo}/>
            <RightMenu />
        </div>
    );
};