import css from './App.module.css';
import React, { Component } from "react";
import '@/App.css';
import { Section } from '@/components/Section/Section.jsx';
import planes from '@/json/planes.json';
import helicopters from '@/json/helicopters.json';
import aircrafts from '@/json/aircrafts.json';
import { PlanesList } from '@/components/PlanesList/PlanesList.jsx';
import { Filter } from '@/components/Filter/Filter.jsx'

// export function App() {
export class App extends Component {

  //!Фільтрація var.1
  state = {
    // isPlanes: false,
    // isHelicopters: false,
    // isAll: false,
    bgColor: "black",
    aircraftTitle: "Магазин моделей літальних апаратів",
    aircraftArray: aircrafts
  }

  
  allFiltration = () => {
    console.log("All")

    this.setState({
      // isAll: true,
      // isPlanes: false,
      // isHelicopters: false,
      bgColor: 'green',
      aircraftTitle: "Магазин моделей літальних апаратів",
      aircraftArray: aircrafts
    });
    console.log("aircraftArray: ", aircrafts);
  };

  planeFiltration = () => {
    console.log("Planes")
    const planesArray = aircrafts.filter(item => item.aircraftType === "plane")
    console.log("planesArray: ", planesArray);
    this.setState({
      // isAll: false,
      // isPlanes: true,
      // isHelicopters: false,
      bgColor: 'yellow',
      aircraftTitle: "Магазин моделей літаків",
      aircraftArray: planesArray
    });
  };

  biplanesFiltration = () => {
    console.log("Biplanes")
    const biplanesArray = aircrafts.filter(item => item.aircraftType === "biplane")
    console.log("biplanesArray: ", biplanesArray);
    this.setState({
      // isAll: false,
      // isPlanes: true,
      // isHelicopters: false,
      bgColor: '#f59aa9',
      aircraftTitle: "Магазин моделей біпланів",
      aircraftArray: biplanesArray
    });
  };

  helicopterFiltration = () => {
    console.log("Helicopters")

    const helicoptersArray = aircrafts.filter(item => item.aircraftType === "helicopter")
    console.log("helicoptersArray: ", helicoptersArray);
    this.setState({
      // isAll: false,
      // isPlanes: false,
      // isHelicopters: true,
      bgColor: 'lightblue',
      aircraftTitle: "Магазин моделей вертольотів",
      aircraftArray: helicoptersArray
    });
  };

  //!Фільтрація var.2 
  // allFiltration = () => {
  //   console.log("new All")
  //   return "Магазин моделей літальних апаратів"
  // };

  // planeFiltration = () => {
  //   console.log("new Planes")
  //   return "Магазин моделей літаків"
  // };

  // helicopterFiltration = () => {
  //   console.log("new Helicopters")
  //   return "Магазин моделей вертольотів"
  // };

  render() {
    return (
      <>
        {/*//!  Filter */}
        {/* <div className={css.filterBox}>
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
        
                </div> */}
        <Filter
          onAll={this.allFiltration}
          onPlanes={this.planeFiltration}
          onBiplanes={this.biplanesFiltration}
          onHelicopters={this.helicopterFiltration}
        />
        {/* <Section
          isOn={this.state.isPlanes}
          title="Магазин моделей літаків"
          bgColor={this.state.bgColor}
        >
          <PlanesList items={planes} />
        </Section >
        <Section
          isOn={this.state.isHelicopters}
          title="Магазин моделей гелікоптерів"
          bgColor={this.state.bgColor}
        >
          <PlanesList items={helicopters} />
        </Section > */}
        <Section
          // isOn={this.state.isAll}

          title={this.state.aircraftTitle}
          bgColor={this.state.bgColor}
        >
          <PlanesList items={this.state.aircraftArray} />
        </Section >
        {/* <Section
          // isOn={this.state.isPlanes}>
          title="Магазин моделей літаків"
          <PlanesList items={aircrafts} />
        </Section > */}
      </>
    );
  }
};