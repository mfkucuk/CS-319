import logo from './logo.svg';
import Alert from 'react-bootstrap/Alert';
import './App.css';

function App() {
  return (
<<<<<<< Updated upstream
    <div className="App">
      <h1> Hello </h1>
    </div>
=======
    <>
      {[
        'primary',
        'secondary',
        'success',
        'danger',
        'warning',
        'info',
        'light',
        'dark',
      ].map((variant) => (
        <Alert key={variant} variant={variant}>
          This is a {variant} alert—check it out!
        </Alert>
      ))}
    </>
>>>>>>> Stashed changes
  );
}

export default App;
