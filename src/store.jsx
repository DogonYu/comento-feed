import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import modules, { rootSaga } from 'src/modules';

const logger = createLogger();

const sagaMiddleware = createSagaMiddleware();

const enhancer =
  process.env.NODE_ENV === 'production'
    ? compose(applyMiddleware(sagaMiddleware))
    : composeWithDevTools(applyMiddleware(logger, sagaMiddleware));

export const store = createStore(modules, enhancer);
sagaMiddleware.run(rootSaga);

export default { store };
