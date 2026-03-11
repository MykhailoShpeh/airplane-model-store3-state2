import PropTypes from 'prop-types';
import defaultImage from "@/components/default.png"; //! Дефолтне зображення
import css from './Planes.module.css';
import {getManufacturingYears} from '@/utils/formatDateDuration.js'

import { IoAirplaneSharp } from "react-icons/io5";

//! Бібліотека react-icons
import { FaMapMarkerAlt, FaUserAlt, FaCalendarAlt, FaClock } from 'react-icons/fa'; //! Приклад react-icons
import { AiOutlineFlag, AiOutlineInfoCircle, AiOutlineClockCircle, AiOutlineDollarCircle } from "react-icons/ai";
import { GiArmoredBoomerang, GiCeremonialMask, GiAirplaneDeparture, GiCommercialAirplane, GiCurlyMask } from "react-icons/gi";
import { CiBadgeDollar, CiGlobe, CiAirportSign1 } from "react-icons/ci";
import { TbClockHour4Filled } from "react-icons/tb";
import { FcTrademark } from "react-icons/fc";
//? nameBrief
//? nameFull - <FcTrademark /> - Повна назва
//? type - <GiArmoredBoomerang /> - бумеранг, <GiCommercialAirplane /> - літак- Тип
//? nickname - <GiCeremonialMask /> маска1, <GiCurlyMask /> маска2  - Прізвисько
//? country - <AiOutlineFlag /> - прапор, <CiGlobe /> - глобус - Країна виробник
//? year - <AiOutlineClockCircle /> - годинник - Рік випуску
//? duration - <TbClockHour4Filled /> - годинник - Тривалість виробництва(в роках)
//? price - <CiBadgeDollar/> - $, <AiOutlineDollarCircle /> - $ - Ціна
//? description - <AiOutlineInfoCircle /> - info - Опис
//? <GiAirplaneDeparture /> - Рекламна модель
//? <CiAirportSign1 /> - Реальна модель

// import { iconSize } from '@/constants/iconSize.js'
// import { iconColor } from '@/constants/iconColor.js'
//! Reexport
import { iconSize, iconColor } from '@/constants'

console.log("iconSize: ", iconSize);
console.log("iconColor: ", iconColor);

export function Planes({
    urlMain = defaultImage, //! Дефолтне зображення
    urlPromotional,
    urlActual,
    nameBrief,
    nameFull,
    nickname = "не відомо",
    year,
    startTime,
    endTime,
    country,
    type,
    price,
    description
}) {
    function printlActualimages(urlActual) {
        urlActual.map
    }

    // console.log(startTime, endTime);
    const different = getManufacturingYears(startTime, endTime)
    console.log('different:', different)
    return (
        <>
            <h3
                className={css.planeTitle}>
                {nameBrief}
            </h3>
            <img src={urlMain} alt={nameBrief} />
            <p className={css.textField}><FcTrademark className={css.icon} size={iconSize.md} /> Повна назва: <span className={css.textFieldValue}>{nameFull}</span></p>
            <p className={css.textField}><IoAirplaneSharp className={css.icon} size={iconSize.md} color='red'/> Тип: <span className={css.textFieldValue}>{type}</span></p>
            <p className={css.textField}><GiCeremonialMask className={css.icon} size={iconSize.md} /> Прізвисько: <span className={css.textFieldValue}>{nickname}</span></p>
            <p className={css.textField}><AiOutlineFlag className={css.icon} size={iconSize.md} /> Країна виробник: <span className={css.textFieldValue}>{country}</span></p>
            <p className={css.textField}><AiOutlineClockCircle className={css.icon} size={iconSize.md} /> Рік випуску: <span className={css.textFieldValue}>{year}</span></p>
            <p className={css.textField}><AiOutlineClockCircle className={css.icon} size={iconSize.md} /> Тривалість виробництва в роках: <span className={css.textFieldValue}>{different}</span></p>
            <p className={css.textField}><CiBadgeDollar className={css.icon} size={iconSize.md} /> Ціна: <span className={css.textFieldValue}>{price}</span></p>
            <p className={css.textField}><AiOutlineInfoCircle className={css.icon} size={iconSize.md} /> Опис: <span className={css.textFieldValue}>{description}</span></p>
            <h4 className={css.imageTitles}> <GiAirplaneDeparture className={css.icon} size={iconSize.lg} />Рекламна модель:</h4>
            <img src={urlPromotional} alt={nameBrief} />
            <h4 className={css.imageTitles}><CiAirportSign1 className={css.icon} size={iconSize.lg} /> Реальна модель:</h4>
            <div
                className={css.imgBox}>
                {urlActual.map(item =>
                    <img
                        // key={item} //! поки що не унікальний
                        src={item}
                        alt={nameBrief}
                        className={css.img}
                    />
                )}
            </div>
            <button
                className={css.but}
                type="button">
                Додати до кошику
            </button>
        </>
    );
};

//! Контроль типу змінних - propTypes
Planes.propTypes = {
    urlMain: PropTypes.string.isRequired,
    urlPromotional: PropTypes.string.isRequired,
    urlActual: PropTypes.string.isRequired,
    nameBrief: PropTypes.string.isRequired,
    nameFull: PropTypes.string.isRequired,
    nickname: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    country: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    // price: PropTypes.number.isRequired,  //! контроль propTypes
    description: PropTypes.string.isRequired
};
