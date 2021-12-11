import {Button, Offcanvas} from 'react-bootstrap'
import {MenuButtonFill, X} from 'react-bootstrap-icons'
import { useState } from 'react';
import styles from './styles/offcanvas.module.scss'
// import CloseIcon from '@material-ui/icons/Close';
// import IconButton from '@material-ui/core/IconButton';



export default function OffCanvas ({iconActive, iconClose, list}) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <div className= {styles.offcanvas}>
          <span onClick={handleShow} className= {styles.offcanvas_icon}>
              {
                  !show ? iconActive : iconClose
              }
          </span>
  
        <Offcanvas className= {styles.offcanvas_off} show={show} onHide={handleClose}>
          <Offcanvas.Header id= {styles.offcanvas_header}>
              
            <span></span>
            <X className= {styles.offcanvas_icon} onClick= {handleClose} />
            
          </Offcanvas.Header>
          <Offcanvas.Body >
            {list}
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    );
  }