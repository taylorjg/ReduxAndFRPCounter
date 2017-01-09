import ReactDOM from 'react-dom'
import { createStore } from 'redux';
import counter from './reducers';
import * as actions from './actions';

const store = createStore(counter);
const rootElement = document.getElementById('content');

const render = () => ReactDOM.render(
    <Counter
        value={store.getState()}
        onIncrement={() => store.dispatch(actions.increment())}
        onDecrement={() => store.dispatch(actions.decrement())}
    />,
    rootElement
)

render();
store.subscribe(render);
