import React from 'react';
import Row from './Row';

class Table extends React.Component {

    render() {

        const items = this.props.items;

        return (
            <div>
                <h1>{this.props.loginReverso}</h1>
                <table className="table table-striped">
                    <thead> <tr>
                        <th>#</th>
                        <th>Login</th>
                        <th>Senha</th>
                        <th>Actions</th>
                    </tr>

                    </thead>
                    <tbody>
                        {
                            items.map(item => <Row key={item.id} data={item} />)
                        }
                    </tbody>

                </table>
            </div>
        );

    }

}

export default Table;