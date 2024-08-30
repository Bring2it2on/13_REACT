
/* 초기값 */
const initialState = [
    {
        id: 0,
        name: '',
    }
]
/* 액션 */
// 액션 타입 설정
const GET_POKEMONS = 'pokemons/GET_POKEMONS'

// 포켓몬 관련 액션 함수
const actions = createActions({
    [GET_POKEMONS]: () => {}
})

/* 리듀서 */
const pokemonReducer = handleActions(
    {
        [GET_POKEMONS]: (state, { payload }) => {
            console.log('payload : ', payload);

            return payload;
        }
    },
    initialState
)

export default pokemonReducer;