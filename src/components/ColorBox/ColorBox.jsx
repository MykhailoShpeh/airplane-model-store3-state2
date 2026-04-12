import React, { Component } from "react";
import css from "./ColorBox.module.css";

export class ColorBox extends Component {
    //* 1. отримати індекс активної кнопки "activeButtonIndex"
    //* 2. cтворити масив 'selectedButtonsIdx' для індексів обраних елементів
    //* 2.1 додати логіку toggle - якщо елемент є у масиві ми його видаляємо, якщо його немає, тоді додаємо 
    //? 3. створити масив 'selectedColors' обраних елементів згідно масиву індексів
    //! 4. відмалювати розмітку масиву обраних елементів
    state = {
        activeButtonIndex: null, //! індекс обраного елемента
        selectedButtonsIdx: [], //! масив індексів обраних елементів
        selectedColors: [] //! масив обраних елементів згідно масиву індексів
    }

    getActiveIndex = (index) => {

        if (this.state.selectedButtonsIdx.includes(index)) {
            console.log("Такий індекс вже є,тоді ВИДАЛЯЄМО його!❌");

            //! не = this.state.selectedButtonsIdx, а = [...this.state.selectedButtonsIdx], бо при 1 варіанті ми даємо посилання замість копії, це зламає роботу state
            const functionSelectedButtonsIdx = [...this.state.selectedButtonsIdx]

            //! index - 1 замість newSelectedButtonsIdx.indexOf(index) не працює!
            functionSelectedButtonsIdx.splice(functionSelectedButtonsIdx.indexOf(index), 1);
            this.setState({
                selectedButtonsIdx: functionSelectedButtonsIdx
            })
        }
        else {
            console.log("Такого індекса ще немає,тоді ДОДАЄМО його!✅");

            this.setState({
                activeButtonIndex: index,
                selectedButtonsIdx: [...this.state.selectedButtonsIdx, index]
            })
        }

        //? this.state.selectedButtonsIdx.push(index);

        //  console.log("this.state.activeButtonIndex: ", this.state.activeButtonIndex); //! ❌
    }


    render() {
        const { colorBoxes } = this.props;
        const { activeButtonIndex, selectedButtonsIdx, selectedColors } = this.state;
        const active = colorBoxes[activeButtonIndex]; //! знаходимо потрібний об'єкт

        console.log("🔘Активна кнопка:", activeButtonIndex);
        console.log("ℹ️Індекси обраних кнопок:", selectedButtonsIdx);
        console.log("Ⓜ️Масив обраних елементів(кольорів):", selectedColors);
        // console.log("🆔Кількість обраних кольорів:", NumberOfColors);
        console.log("----------------------------------------------");

        return (
            <>
                {/* //! Блок вибору кольорів */}
                <div className={css.colorBoxContainer}>
                    <h2 className={css.colorBoxTitle}>Вибір кольорів</h2>
                    <p className={css.colorBoxDescription}>
                        Останній обраний колір:
                        &nbsp;
                        <span
                            style={{
                                padding: "4px",
                                // backgroundColor: active.color,
                                borderRadius: '4px',
                                fontWeight: "700"
                            }}
                            className={css.colorBoxSelectedColor}
                        >
                            {/* {active.label} */}
                        </span>
                    </p>
                    <div className={css.colorBox}>
                        {colorBoxes.map((item, index) =>
                            <button
                                key={item.color}
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