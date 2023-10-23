import React, { useState, useEffect } from "react";
import "src/share/table/Table.scss";

interface DataItem {
    id: number;
    title: string;
    media: string;
}

interface DataItemFilm {
    id: number;
    categories: string;
    title: string;
    title_image: string;
    image: string;
    language: string;
    year: string;
    reviews: string;
    views: number;
}

interface TableProps {
    dataCategory: DataItem[];
    onDataTable: (dataFromChildPage: DataItem[]) => void;
    onDataTableFilm: (dataFromChildPage: DataItemFilm[]) => void;
    dataFilm: DataItemFilm[];
    nameDisplay: number;
}

const Table: React.FC<TableProps> = ({ dataCategory, onDataTable, nameDisplay, dataFilm, onDataTableFilm }) => {
    const [dateTableCategory, setDataCategory] = useState(dataCategory);
    const [dateTableFilm, setDataFilm] = useState(dataFilm);
    const handleCellClick = (item: DataItem[]) => {
        onDataTable(item);
    };
    const handleCellClickFilm = (itemFilm: DataItemFilm[]) => {
        onDataTableFilm(itemFilm);
    };

    useEffect(() => {
        if (nameDisplay === 0) {
            setDataCategory(dataCategory);
        } else {
            if (nameDisplay === 1) {
                setDataFilm(dataFilm);
            }
        }
    }, [dataCategory, dataFilm, nameDisplay]);

    return (
        <div className="table">
            {nameDisplay === 0 && (
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Media</th>
                        </tr>
                    </thead>
                    {dateTableCategory !== null && dateTableCategory !== undefined && (
                        <tbody>
                            {dateTableCategory.map((item, index) => (
                                <tr key={index} onClick={() => handleCellClick([{ id: item.id, title: item.title, media: item.media }])}>
                                    <td>{index+1}</td>
                                    <td>{item.title}</td>
                                    <td>{item.media}</td>
                                </tr>
                            ))}
                        </tbody>
                    )}
                </table>
            )}
            {nameDisplay === 1 && (
                <table className="table_film">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Categories</th>
                            <th>Title image</th>
                            <th>Views</th>
                        </tr>
                    </thead>
                    {dateTableFilm !== null && dateTableFilm !== undefined && (
                        <tbody>
                            {dateTableFilm.map((item, index) => (
                                <tr key={index} onClick={() => handleCellClickFilm([{ id: item.id, title: item.title, categories: item.categories, title_image: item.title_image, image: item.image, language: item.language, year: item.year, reviews: item.reviews, views: item.views }])}>
                                    <td>{item.id}</td>
                                    <td>{item.title}</td>
                                    <td>{item.categories}</td>
                                    <td>
                                         <img className="img_film" src={item.title_image} alt="img film" />
                                    </td>
                                    <td>{item.views}</td>
                                </tr>
                            ))}
                        </tbody>
                    )}
                </table>
            )}
        </div>
    );
};

export default Table;
