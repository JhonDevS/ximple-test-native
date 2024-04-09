import {
  fetchCreditsRequest,
  fetchCreditsSuccess,
  fetchCreditsFailure,
} from '../reducers/creditsReducer';
import Config from 'react-native-config';

export const fetchCredits = async (dispatch: any) => {
  dispatch(fetchCreditsRequest());
  try {
    const response = await fetch(Config.API_URL ?? '');
    const data = (await response.json()).credits;
    dispatch(fetchCreditsSuccess(data));
  } catch (error) {
    dispatch(fetchCreditsFailure('Error obteniendo creditos'));
  }
};
