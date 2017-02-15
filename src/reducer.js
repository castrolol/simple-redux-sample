const DEFAULT_STATE = {

    items: [],
    login: "luan",
    password: "123",
    carregando: false

};

var id = 1;

function newId() {
    return id++;
}


export default function reducer(state = DEFAULT_STATE, action) {

    var type = action.type;

    console.log(action);

    switch (type) {

        case "SET_LOGIN":
            return { ...state, login: action.login };

        case "SET_SENHA":
            return { ...state, password: action.senha };
        case "SET_SIZE":
            return { ...state, size: action.size };

        case "ADD_ITEM":
            var items = state.items;
            items = items.concat({
                id: newId(),
                login: action.login,
                senha: action.senha
            });
            return { ...state, items: items, login: "", password: "" };

        case "REMOVE_ITEM":
            var items = state.items;
            items = items.filter(x => x.id != action.id);
            return { ...state, items: items };

        default:
            return state;

    }


}