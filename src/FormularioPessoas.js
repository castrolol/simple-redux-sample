import Formulario from './Formulario';
import { connect } from 'react-redux';

//vem do state pra view
const mapStateToProps = (state) => ({
    login: state.login,
    senha: state.password,
    size: state.size,
    podeSalvar: state.login && state.password
});

//vao da view pro state
const mapDispatcherToProps = (dispatcher) => ({

    setLogin(login) {

        dispatcher({
            type: "SET_LOGIN",
            login
        });

    },

    setSenha(senha) {
        dispatcher({
            type: "SET_SENHA",
            senha
        });
    },
  setSize(size) {
        dispatcher({
            type: "SET_SIZE",
            size
        });
    },

    addItem(login, senha){
        dispatcher({
            type: "ADD_ITEM",
            login, 
            senha
        });
    }

});



export default connect(
    mapStateToProps,
    mapDispatcherToProps
)(Formulario)


