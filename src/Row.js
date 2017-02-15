import React from 'react';
import {connect} from 'react-redux';

class Row extends React.Component{

    render(){

        var data = this.props.data;
        const removeItem = this.props.removeItem;

        return (
           <tr>
               <td>{data.id}</td>
               <td>{data.login}</td>
               <td>{data.senha}</td>
               <td><button onClick={() => removeItem(data.id)} className="btn btn-danger">x</button></td>
           </tr>
        );

    }

}

const mapDispatcherToProps = (dispatch) => ({

    removeItem(id){
        dispatch({
            type: "REMOVE_ITEM",
            id
        });
    }

});

export default connect(
    null,
    mapDispatcherToProps
)(Row);