import css from './App.module.css';
import React, { Component } from "react";
import '@/App.css';
import { Section } from '@/components/Section/Section.jsx';
import planes from '@/json/planes.json';
import helicopters from '@/json/helicopters.json';
import { PlanesList } from '@/components/PlanesList/PlanesList.jsx';

// export function App() {
export class App extends Component {

  // state = {
  //   valueFalse: false,
  //   valueTrue: true
  // }

  state = {
    isPlanes: false,
    isHelicopters: false,
  };


  allFiltration = () => {
    console.log("All")

    this.setState({ isPlanes: true, isHelicopters: true });

  };

  planeFiltration = () => {
    console.log("Planes")
    this.setState({ isPlanes: true, isHelicopters: false });
  };

  helicopterFiltration = () => {
    console.log("Helicopters")
    this.setState({ isPlanes: false, isHelicopters: true });
  };

  render() {
    return (
      <>
        {/*//!  Filter */}
        <div className={css.filterBox}>
          <button
            className={css.buttonAllFiltration}
            type="button"
            onClick={this.allFiltration}
          >
            ВСІ
          </button>

          <button
            className={css.buttonPlaneFiltration}
            type="button"
            onClick={this.planeFiltration}
          >
            Літаки
          </button>

          <button
            className={css.buttonHelicopterFiltration}
            type="button"
            onClick={this.helicopterFiltration}
          >
            Вертольоти
          </button>

        </div>
        {/* <Filter /> */}
        <Section isOn={this.state.isPlanes} title="Магазин моделей літаків">
          <PlanesList items={planes} />
        </Section >
        <Section isOn={this.state.isHelicopters} title="Магазин моделей гелікоптерів">
          <PlanesList items={helicopters} />
        </Section >
      </>
    );
  }
};