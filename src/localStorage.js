import { processBackgroundCalculating } from './utils/game';

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('TP_Adventure_STATE');
    if (serializedState === null) {
      return undefined;
    }
    return processBackgroundCalculating(JSON.parse(serializedState));
  } catch (error) {
    console.warn(error);
    return undefined;
  }
}

export const saveState = (state) => {
  try {
    localStorage.setItem('TP_Adventure_STATE', JSON.stringify(state));
  } catch (error) {
    console.warn(error);
  }
}

export const getCloseTime = () => {
  try {
    const time = localStorage.getItem('TP_Adventure_CloseTime');
    if (time === null) {
      return undefined;
    }
    return Number(time);
  } catch (error) {
    console.warn(error);
    return undefined;
  }
}

export const saveCloseTime = () => {
  try {
    localStorage.setItem('TP_Adventure_CloseTime', (new Date().getTime()));
  } catch (error) {
    console.warn(error);
  }
}