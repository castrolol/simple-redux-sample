import React from 'react';
 

class Formulario extends React.Component{

    render(){

        const {login, senha, podeSalvar} = this.props;
        const {setLogin, setSize, size, setSenha, addItem} = this.props;

        return (
            <div>
                <div>
                    <label style={{ display: "block" }}>Login</label>
                    <input value={login} onChange={ev => setLogin(ev.target.value)}  type="text" />
                </div>
                <div>
                    <label style={{ display: "block" }}>Password</label>
                    <input value={senha}  onChange={ev => setSenha(ev.target.value)} type="text" />
                </div>
                 <div>
                    <label style={{ display: "block" }}>size</label>
                    <input value={size}  onChange={ev => setSize(ev.target.value)} type="range" />
                </div>
                <button disabled={!podeSalvar} className="btn btn-primary" onClick={ () => addItem(login, senha) } >Salvar</button>
            </div>
        );

    }

}

export default Formulario;