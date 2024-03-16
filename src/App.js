import React from 'react';
import FormComponent from './FormComponent';
import PDFPreview from './PDFPreview';

function App() {
  const [formData, setFormData] = React.useState(null);

  return (
    <div className="App" style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
      <FormComponent setFormData={setFormData} />
      {formData && <PDFPreview formData={formData} />}
    </div>
  );
}

export default App;
