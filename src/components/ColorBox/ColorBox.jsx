import React, { Component } from "react";
import css from "./ColorBox.module.css";

export class ColorBox extends Component {
    render() {

        const { colorBoxes } = this.props;
        console.log("colorBoxes: ", colorBoxes);

        return (
            <>
                {/* //! Блок вибору кольорів */}
                <div className={css.colorBoxContainer}>
                    <h2 className={css.colorBoxTitle}>Вибір кольорів</h2>
                    <p className={css.colorBoxDescription}>Останній обраний колір:<span className={css.colorBoxSelectedColor}>{"Red"}</span></p>
                    <div className={css.colorBox}>
                        {colorBoxes.map(item =>
                            <button
                                className={css.colorBoxButton}
                                style={{ backgroundColor: item.color }}
                            >
                                Off
                            </button>
                        )}
                    </div>
                </div>
                {/* //! Блок обраних кольорів */}
                <div className={css.selectedColorsContainer}>
                </div>
            </>
        )
    };

}