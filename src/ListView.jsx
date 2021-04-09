import React from 'react';
import ListTile from './ListTile';

class ListView extends React.Component {
    constructor(props) {
        super();
        this.props = props;
    }

    render() {
        var items = [];
        this.props.projects.forEach(element => {
            items.push(
                    <ListTile name={element} />
            )
        });

        return (
            <div className="proj-row-container">
                    {items}
            </div>
        );
    }

}

export default ListView;
