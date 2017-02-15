import Table from './Table';
import { connect } from 'react-redux';

//vem do state pra view
const mapStateToProps = (state) => {
    

    return {
        items: state.items,
        loginReverso: state.login.split("").reverse().join("")
    }

};

//vao da view pro state
const mapDispatcherToProps = (dispatcher) => ({


});



export default connect(
    mapStateToProps,
    mapDispatcherToProps
)(Table)


