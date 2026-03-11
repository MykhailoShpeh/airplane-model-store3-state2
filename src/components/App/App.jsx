import '@/App.css';
import {Section} from '@/components/Section/Section.jsx';
import planes from '@/json/planes.json';
import helicopters from '@/json/helicopters.json';
import {PlanesList} from '@/components/PlanesList/PlanesList.jsx';

export function App() {
  return (
    <>
      <Section isOn={true} title="Магазин моделей літаків">
        <PlanesList items={planes} />
      </Section >
      <Section isOn={true} title="Магазин моделей гелікоптерів">
        <PlanesList items={helicopters} />
      </Section >
    </>
  );
};