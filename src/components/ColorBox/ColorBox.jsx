import React, { Component } from "react";
import css from "./ColorBox.module.css";

export class ColorBox extends Component {

    state = {
        activeButtonIndex: null
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

       
        const array = []

        return (
            <>
                {/* //! Блок вибору кольорів */}
                <div className={css.colorBoxContainer}>
                    <h2 className={css.colorBoxTitle}>Вибір кольорів</h2>
                    <p className={css.colorBoxDescription}>Останній обраний колір:<span className={css.colorBoxSelectedColor}>{"Red"}</span></p>
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
                </div>
            </>
        )
    };

}