import PropTypes from 'prop-types';
import css from "./Section.module.css"; //! CSS-модулі
// import css from "@/components/Section/Section.module.css";

export function Section({ isOn = true, title, children, bgColor }) {
    return (
        <>
            {isOn && <section style={{backgroundColor: bgColor,}}>
                {/* //! CSS-модулі з композицією класів */}
                {/* {title && <h2 className={`${css.title} ${css.robotoBold}`}>{title}</h2>} */}
                {/* //! CSS-модулі з composes */}
                {title && <h2 className={css.titleRobotoBold}>{title}</h2>}
                {children}
            </section>}
        </>
    );
}

Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
};