import PropTypes from 'prop-types';

import css from "./PlanesList.module.css";

import { Planes } from '@/components/Planes/Planes.jsx'; 

import { getBgColorCSSModule } from '@/utils/getBackgroundColor.js';


//! Для визначення кольору фону картки в залежності від значення "year"

export function PlanesList({ items }) {
    console.log(getBgColorCSSModule(2000))
    return (
        <ul
            className={css.list}>
            {items.map(item =>
                <li
                    className={css[getBgColorCSSModule(item.info.year)]}
                    key={item.id} >
                    <Planes
                        urlMain={item.url.main}
                        urlPromotional={item.url.promotional}
                        urlActual={item.url.actual}
                        nameBrief={item.name.brief}
                        nameFull={item.name.full}
                        nickname={item.name.nickname}
                        year={item.info.year}
                        startTime={item.manufacturing.start}
                        endTime={item.manufacturing.end}
                        country={item.info.country}
                        type={item.info.type}
                        price={item.info.price}
                        description={item.info.description}
                    />
                </li>
            )}
        </ul>
    );
};

PlanesList.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
        }),
    ),
};
