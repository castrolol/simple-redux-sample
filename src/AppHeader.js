import React from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';

class Row extends React.Component {

    render() {

        var data = this.props.data;
        const removeItem = this.props.removeItem;
        const trans =  (  (this.props.size / 100) * 300) + "px";
        return (
            <div className="App-header">
                <img style={{ height: trans }} src={logo} className="App-logo" alt="logo" />
                <h2>Welcome to React</h2>
            </div>
        );

    }

}

const mapStateToProps = (state) => ({

    size: state.size
});

export default connect(
    mapStateToProps,
    null
)(Row);