import './pagePreViewer.css';
import cn from 'classnames';

import Image from 'next/image';
import viewPage from '../../../../public/viewPage.png';

export default function PagePreViewer({list, currentPage=1}) {
    return (
        <div className="pagePreViewer_scrollableContainer">
            <ul className="pagePreViewer_list">

                {list.map((item, i) => {
                    const liClasses = cn("pagePreViewer_item", { "currentPage": i + 1 === currentPage});
                    const pClasses = cn("pagePreViewer_pageNumber", { "currentPage": i + 1 === currentPage })
                    return (
                        <li key={i} className={liClasses}>
                            <div>
                                <Image src={viewPage} alt={`view page ${i + 1}`} width={140} height={200} /> 
                            </div>

                            <span className={pClasses}>{i + 1}</span>

                        </li>
                    );    
                })}

            </ul>
        </div>
    );
};