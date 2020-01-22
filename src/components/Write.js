import React from 'react';

function Write() {
    /* state = {
        name: ''
    }

    onChange = (e) => this.setState({ name: e.target.value }); */

    return (
        <div className="Write">
            <input 
                type="text"
                name="name"
                style={{ 
                    border: '0', 
                    borderBottom: '2px solid #fff', 
                    outline: '0',
                    fontSize: '33px',
                    textAlign: 'center', 
                    color: '#fff',
                    padding: '7px',
                    background: 'transparent'
                }}
                placeholder="Write your name..."
                /* value={this.state.name}
                onChange={this.onChange} */
            />
        </div>
    )
}

export default Write;
