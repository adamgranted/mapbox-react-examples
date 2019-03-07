import {
    combineEpics,
    ofType
} from 'redux-observable';
import * as Constants from '../constants'
import {
    mapTo
} from 'rxjs/operators';



const exampleEpic = (action$) => action$.pipe(
    ofType('BLAH'),
    mapTo({
        type: 'BLAH_BLAH'
    })
);

export const rootEpic = combineEpics(
    exampleEpic
);