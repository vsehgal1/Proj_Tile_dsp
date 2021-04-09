import React from 'react'
import ListView from './ListView'


class TileDiv extends React.Component {
    constructor(props) {
        super()
        this.props = props
        this.state = {
            no_cols: 1
        }
    }

    

    // chunkArray(arr, chunk_size) {
    //     var index = 0;
    //     var arrayLength = arr.length;
    //     var tempArray = [];

    //     for (index = 0; index < arrayLength; index += chunk_size) {
    //         tempArray.push(arr.slice(index, index + chunk_size));
    //     }
    //     return tempArray;
    // }

    render() {
        // var rows = []
        // let split_proj = this.chunkArray(this.getProjName(), 2);
        // split_proj.forEach(element => {
        //     rows.push(
        //         <ListView projects={element} />
        //     )
        // });
        return (
            <div
            className='FixedHeightContainer'
                style={{
                    borderStyle: 'solid',
                    display: 'inline-block',
                    padding: '10px',
                    marginTop: '10px',
                    backgroundColor: '#4275f5',
                    width: '350px',
                    height: '200px',
                    overflow: 'auto'
                }}>
                <ListView projects={this.props.list} />
            </div>
        )
    }
}

export default TileDiv