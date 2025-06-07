import { Spinner } from 'react-bootstrap';
import styles from './Spinner.module.css';

const SpinnerFullScreen = () => {
  return (
    <div className={styles.spinnerFullscreen}>
      <Spinner animation="border" role="status" variant="primary" />
      <p className="text-light mt-3">Cargando...</p>
    </div>
  );
};

export default SpinnerFullScreen;
