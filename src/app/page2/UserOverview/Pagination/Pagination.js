import './pagination.css';

import cn from 'classnames';
// import Image from 'next/image';

const pageToShow = 6;

export default function Pagination({ totalCount, currentPage }) {
    const totalItems = Math.min(pageToShow, totalCount);
    let from = currentPage - Math.ceil(pageToShow / 2);
    if (from < 0) {
        from = 0
    }
    from = Math.min(from, totalCount - totalItems);

    const countOfPagesArr = [];
    for (let i = 0; i < totalItems; i += 1) {
        countOfPagesArr.push(from + i + 1)
    }
    return(
        <div>
            <ul className="pagination_container">
                <li className="pagination_item">&lt;</li>
                {countOfPagesArr.map((i) => {
                    const paginationPageClasses = cn("pagination_item", { "pagination_item_active": i === currentPage })
                    return(
                        <li className={paginationPageClasses} key={i}>{i}</li>
                    )
                })}
                <li className="pagination_item">&gt;</li>
            </ul>
        </div>
    );
};