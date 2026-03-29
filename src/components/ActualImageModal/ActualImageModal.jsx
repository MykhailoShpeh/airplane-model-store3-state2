import React, { Component } from "react";
import css from './ActualImageModal.module.css'

export class ActualImageModal extends Component {
    render() {
        console.log("this.props: ", this.props)
        const { images, briefName } = this.props
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
                    />
                )}
            </div>
        )
    };
};

