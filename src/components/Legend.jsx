
import React, {useState, useRef} from 'react';
import Overlay from 'react-bootstrap/Overlay'
import Tooltip from 'react-bootstrap/Tooltip'

const Legend = ({legendItems}) => {
    const [show, setShow] = useState(false);
    const target = useRef(null);

    console.log(legendItems)
    return (
        <>
     <div  onClick={() => setShow(!show)} style={{
                display: "flex",
                alignItems:"stretch",
            }}
        >
            {legendItems.map((item)=> (
                <div ref={target} key={item.title}
                style={{
                    backgroundColor: item.color,
                    flex:1,
                    display:"flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: item.textColor,
                    height: "10vh",
                    fontWeight: "bold",
                    fontSize:"1.5em"
                }}
                >
                    <span>{item.title}</span>
                    <Overlay target={target.current} show={show} placement="top">
      {(props) => (
        <Tooltip id={item.title} {...props}>
          My Tooltip
        </Tooltip>
      )}
    </Overlay>
                </div>
            ))}
        </div>  

    </>
    );
}
 
export default Legend;