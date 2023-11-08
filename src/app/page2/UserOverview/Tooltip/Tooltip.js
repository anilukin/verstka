import './tooltip.css';

// import Image from 'next/image';

export default function Tooltip () {
    return(
        <div className="tooltip_container">
            <ul>
                <li>Log out</li>
                <li>Edit</li>
                <li>Delete</li>
            </ul>
        </div>
    );
};