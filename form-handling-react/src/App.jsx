import RegistrationForm from './components/RegistrationForm';
import FormikForm from './components/formikForm';

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Controlled Component Form</h2>
      <RegistrationForm />
      
      <hr style={{ margin: '40px 0' }} />
      
      <h2>Formik Form</h2>
      <FormikForm />
    </div>
  );
}

export default App;