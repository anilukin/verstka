import './documentDetails.css';

import DocumentInfo from '../DocumentInfo/DocumentInfo';
import RightMenu from '../RightMenu/RightMenu';

export default function DocumentDetails() {
    return (
        <div className="documentDetails_container">
            <DocumentInfo />
            <RightMenu />
        </div>
    );
};