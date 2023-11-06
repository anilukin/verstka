import './directorysTree.css';

import Directory from '../Directory/Directory';

export default function DirectorysTree() {
    const data = [
        {title: "Market research"}, 
        {title: "Strategy",
            isActiv: true,
            children: [
                {title: "2023"},
                {title: "2022"},
                {title: "2021", isActiv: true},
                {title: "2020"},
                {title: "2019"},
                {title: "2018"},
                {title: "2017"},
            ]}, 
        {title: "Investments",
            children: [
                {title: "Sub1"},
                {title: "Sub2"}
            ]}, 
        {title: "Signed documents",
            children: [
                {title: "Sub1"},
                {title: "Sub2"},
                {title: "Sub3"},
                {title: "Sub4"},
                {title: "Sub5"},
            ]}
    ];

    return (
        <div className="directory_container">
            {data.map((item) => <Directory key={item.id} folderInfo={item} />)}    
        </div>
    );
}