import React from 'react';
import dat_icon from './dat_icon.png'
import styles from './proj_style.css'; 

class ListTile extends React.Component {
    constructor(props) {
        super()
        this.props = props
    }

    loadProj = () => {
        alert('Loading Project: ' + this.props.name)
    }

    render() {
        return (
            <div
                className={styles.ProjTile}
                onClick={this.loadProj}
                style={{
                    display: 'inline-block',
                    margin: '10px',
                    border: 'solid 3px',
                    borderRadius: '5%',
                    padding: '5px',
                    backgroundColor: '#aedff2',
                    width: '50px',
                    height: '70px',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden'
                }}>
                <div>
                    <img src={dat_icon} alt="Logo" style={{ width: '30px', height: '40px' }} />
                </div>
                <div>
                    <p
                        style={{
                            fontSize: '13px'
                        }}>
                        {this.props.name}
                    </p>
                </div>

            </div>

        );
    }
}

export default ListTile;
