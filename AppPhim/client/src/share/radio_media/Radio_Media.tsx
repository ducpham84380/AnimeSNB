import React, { useState, useEffect } from "react";
import "src/share/radio_media/Radio_Media.scss";
interface DataItem {
    id: number;
    title: string;
}

interface RadioMediaProps {
    data: DataItem[];
    onDataSentMedia: (dataFromChildMedia: number) => void;
    isCheck: string;
}

const RadioMedia: React.FC<RadioMediaProps> = ({ data, onDataSentMedia, isCheck }) => {
    const [isCheckedRadioMedia, setIsCheckedRadioMedia] = useState(isCheck);

    const handleMenuItemClick = (itemId: number, name: string) => {
        onDataSentMedia(itemId);
        setIsCheckedRadioMedia(name);
    };

    useEffect(() => {
        setIsCheckedRadioMedia(isCheck);
    }, [isCheck]);

    return (
        <React.Fragment>
            {data !== null && data !== undefined && (
                <div className="radio_media">
                    {data.map((item) => (
                        <label key={item.id}>
                            <input type="radio" id={item.id.toString()} onChange={() => handleMenuItemClick(item.id, item.title)} name="value-radio" checked={isCheckedRadioMedia === item.title} defaultValue={item.id} onClick={() => handleMenuItemClick(item.id, item.title)} />
                            <span>{item.title}</span>
                        </label>
                    ))}
                    <span className="selection" />
                </div>
            )}
        </React.Fragment>
    );
};

export default RadioMedia;
