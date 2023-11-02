import './sidebar.css';

import DirectorysTree from './DirectorysTree/DirectorysTree';

export default function Sidebar() {
    return (
        <>
            <div className="sidebar_container">
                <DirectorysTree />
                {/* <FilesContainer /> */}
            </div>
        </>

    )
}