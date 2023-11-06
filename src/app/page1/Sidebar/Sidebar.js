import './sidebar.css';

import DirectorysTree from './DirectorysTree/DirectorysTree';
import FilesContainer from './FilesContainer/FilesContainer';

export default function Sidebar() {
    return (
        <>
            <div className="sidebar_container">
                <DirectorysTree />
                <FilesContainer />
            </div>
        </>

    )
}