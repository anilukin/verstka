import './documentDetails.css';

import RightMenu from '../DocumentDetails/RightMenu/RightMenu';

export default function DocumentDetails() {
    return (
        <div className="documentDetails_container">
            <div className="documentDetails_info">
                <h4>Document details</h4>
            </div>
            <RightMenu />
        </div>
    );
};