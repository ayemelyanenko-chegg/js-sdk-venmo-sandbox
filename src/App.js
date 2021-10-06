import ButtonPreview from './ButtonPreview';
import ButtonConfig from './ButtonConfig';
import { FormProvider } from "./FormContext";


export default function App() {
  return (
    <div className="App">
      <FormProvider>
        <ButtonConfig/>
        <ButtonPreview/>
      </FormProvider>
    </div>
  );
}
