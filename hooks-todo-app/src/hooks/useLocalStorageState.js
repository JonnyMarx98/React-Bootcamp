import {useState, useEffect} from 'react';

export default function useLocalStorageState(key, defaultVal) {
  // Create piece of state, using local storage or defaultVal
  const [state, setState] = useState(() => {
    let val;
    try {
      val = JSON.parse(window.localStorage.getItem(key)) || defaultVal;
    }
    catch (e){
      val = defaultVal;
    }
    return val;
  });

  // update local storage when the state changes
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [state]);

  return [state, setState];
}

