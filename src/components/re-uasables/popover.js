import styles from './styles/popover.module.scss'
import { Popover, Overlay } from 'react-bootstrap'
import {useState, useRef} from 'react'


export default function ShowPopover ({icon, list, position= "bottom", header}) {

    const [show, setShow] = useState(false);
    const [target, setTarget] = useState(null);
    const ref = useRef(null);
  
    const handleClick = (event) => {
      setShow(!show);
      setTarget(event.target);
    };
  
    return (
      <div ref={ref} className= {styles.popover}>
        <span onClick={handleClick} >
            {icon}
        </span>
  
        <Overlay
          show={show}
          target={target}
          placement= {position}
          container={ref}
          containerPadding={20}
        >
          <Popover id="popover-contained" style= {{ marginTop: '5px' }}>
            {/* <Popover.Header as="h3">{header}</Popover.Header> */}
            <Popover.Body>
              {list}
            </Popover.Body>
          </Popover>
        </Overlay>
      </div>
    );
  }