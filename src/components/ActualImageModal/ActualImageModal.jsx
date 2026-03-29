import React, { Component } from "react";
import css from './ActualImageModal.module.css'
//? Бібліотека для модальних вікон: Yet Another React Lightbox

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";


export class ActualImageModal extends Component {
    state = {
        open: false,
        index: 0
    };

    openLightbox = (i) => {
        this.setState({
            open: true,
            index: i
        });
    };

    closeLightbox = () => {
        this.setState({
            open: false
        });
    };

    render() {
        console.log("this.props: ", this.props)
        const { images, briefName } = this.props
        const { open, index } = this.state;

        //! Масив об'єктів зображень для Lightbox
        const slides = images.map((src) => ({ src }));
        console.log("images: ", images)
        return (
            <div
                className={css.imgBox}>
                {images.map((item, i) =>
                    <img
                        key={i} //! поки що не унікальний
                        src={item}
                        alt={briefName}
                        className={css.img}
                        onClick={() => this.openLightbox(i)}

                    />
                )}
                {/*//! Lightbox */}
                <Lightbox
                    open={open}
                    close={this.closeLightbox}
                    slides={slides}
                    index={index}
                />

            </div>
        )
    };
};

