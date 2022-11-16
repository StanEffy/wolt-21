import React from 'react';

interface Props {
    blurhash: string, launch_date: string, location: [number], name: string, online: boolean, popularity: number
}

const RestaurantCard:React.FC<Props> = ({blurhash, launch_date, location, name, online, popularity}) => {
    return (
        <div>
            
        </div>
    );
};

export default RestaurantCard;