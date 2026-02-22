import RegistrationForm from './components/RegistrationForm';
import FormikForm from './components/formikForm';

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>React Form Handling</h1>
      <section>
        <h2>1. Controlled Component Form</h2>
        <RegistrationForm />
      </section>
      <hr />
      <section>
        <h2>2. Formik Form</h2>
        <FormikForm />
      </section>
    </div>
  );
}

export default App;