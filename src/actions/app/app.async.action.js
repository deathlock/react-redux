import axios from 'axios';
import * as appSyncActions from './app.sync.action';

export const appGetData = () => dispatch => axios.get("http://stage.procarematch.com/api/public/procare/contractlengths")
                                .then(response => dispatch(appSyncActions.appSetData(response)));