import React, { Component } from "react";
import css from "./ColorBox.module.css";

export class ColorBox extends Component {
    //* 1. отримати індекс активної кнопки "activeButtonIndex"
    //* 2. cтворити масив 'selectedButtonsIdx' для індексів обраних елементів
    //* 2.1 додати логіку toggle - якщо елемент є у масиві ми його видаляємо, якщо його немає, тоді додаємо 
    //* 3. створити масив 'selectedColors' обраних елементів згідно масиву індексів
    //? 4. відмалювати розмітку масиву обраних елементів
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
            });
        }

        this.updateSelectedColorElements()

        //? this.state.selectedButtonsIdx.push(index);

        //  console.log("this.state.activeButtonIndex: ", this.state.activeButtonIndex); //! ❌
    }

    updateSelectedColorElements = () => {
        // const planetsInLowerCase = planets.map(planet => planet.toLowerCase());
        // this.setState(prevState => {
        //     return {
        //         value: prevState.value + 1,
        //     };
        // });
        this.setState(prevState => ({ selectedColors: prevState.selectedButtonsIdx.flatMap((item) => this.props.colorBoxes.filter((el, idx) => idx === item)) }))
    }


    render() {
        const { colorBoxes } = this.props;
        const { activeButtonIndex, selectedButtonsIdx, selectedColors } = this.state;

        console.log("🔘Активна кнопка:", activeButtonIndex);
        console.log("ℹ️Індекси обраних кнопок:", selectedButtonsIdx);
        console.log("Ⓜ️Масив обраних елементів(кольорів):", selectedColors);
        // console.log("🆔Кількість обраних кольорів:", NumberOfColors);
        console.log("----------------------------------------------");

        //! якщо значення обраного елемента null, то відмальовуємо пустий рядок, 
        //! а якщо число то відмалювати потрібну назву та колір

        //! activeButton === "helicoptersButton"
        //! ? `${css.buttonHelicopterFiltration} ${css.active}`
        //! : css.buttonHelicopterFiltration

        //! при завантаженні застосунку рядок з останнім доданим кольором повинен повернути пустий рядок,
        //! а при обраному елементі його значення змінитися на значення кольору обраного елементу

        //todo при натиску на елемент його вміст має змінитися на "✅On",
        //todo при повторному натиску змінитися в початковий вміст "🆓Off"

        //todo нам потрібен масив індексів активних кнопок [selectedButtonsIdx], index

        //todo треба порівняти index з [selectedButtonsIdx],
        //todo  якщо значення індекса є в масиві,
        //todo  то ми міняємо вміст елемента на "🆓Off",
        //todo  якщо немає,  на "✅On"

        return (
            <>
                {/* //! Блок вибору кольорів */}
                <div className={css.colorBoxContainer}>
                    <h2 className={css.colorBoxTitle}>Вибір кольорів</h2>
                    <p className={css.colorBoxDescription}>
                        Останній доданий колір:
                        &nbsp;
                        <span
                            style={{
                                padding: "4px",
                                backgroundColor:
                                    activeButtonIndex === null
                                        ? "transparent"
                                        : colorBoxes[activeButtonIndex].color
                                ,
                                borderRadius: '4px',
                                fontWeight: "700"
                            }}
                            className={css.colorBoxSelectedColor}
                        >
                            {
                                activeButtonIndex === null
                                    ? ''
                                    : colorBoxes[activeButtonIndex].label
                            }
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
                                {selectedButtonsIdx.includes(index)
                                    ? "✅On"
                                    : "🆓Off"
                                }
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