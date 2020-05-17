import React from 'react';

function Write(props) {
    // const[isTrue, setIsTrue] = useState(false);

    return (
        <div className="Write">
            <input
                className="inputWrite" 
                type="text"
                name="greatName"
                placeholder="Write your great name..."
                // value={name}
                onChange={props.handleMierda}
            />
        </div>
    )
}

export default Write;
