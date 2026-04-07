import React, { Component } from "react";
import css from "./ColorBox.module.css";

export class ColorBox extends Component {

    state = {
        activeButtonIndex: 0 //! якщо null не працює
    }

    getActiveIndex = (index) => {
        this.setState({
            activeButtonIndex: index
        });
        //! console.log("this.state.activeButtonIndex: ", this.state.activeButtonIndex); //! ❌
    }

    render() {
        const { colorBoxes } = this.props;
        console.log("colorBoxes: ", colorBoxes);
        const { activeButtonIndex } = this.state;
        console.log("activeButtonIndex: ", activeButtonIndex);

        const active = colorBoxes[activeButtonIndex]; //! знаходимо потрібний об'єкт
        console.log("active: ", active.label);

        const array = []

        return (
            <>
                {/* //! Блок вибору кольорів */}
                <div className={css.colorBoxContainer}>
                    <h2 className={css.colorBoxTitle}>Вибір кольорів</h2>
                    <p className={css.colorBoxDescription}>
                        Останній обраний колір:
                        &nbsp; //! пробіл
                        <span
                            style={{
                                padding: "4px",
                                backgroundColor: active.color,
                                borderRadius: '4px',
                                fontWeight: "700"
                            }}
                            className={css.colorBoxSelectedColor}
                        >
                            {active.label}
                        </span>
                    </p>
                    <div className={css.colorBox}>
                        {colorBoxes.map((item, index) =>
                            <button
                                className={css.colorBoxButton}
                                style={{ backgroundColor: item.color }}
                                onClick={() => { this.getActiveIndex(index) }} //* ✅
                            // onClick={this.getActiveIndex(index)} ❌
                            // onClick={this.getActiveIndex} ❌
                            >
                                Off
                            </button>
                        )}
                    </div>
                </div>
                {/* //! Блок обраних кольорів */}
                <div className={css.selectedColorsContainer}>
                    <h2>Обрані кольори: </h2>
                </div>
            </>
        )
    };

}