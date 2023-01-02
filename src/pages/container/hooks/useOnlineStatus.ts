import { useSyncExternalStore } from "react";

const useOnlineStatus = () => {
  const status = useSyncExternalStore(subscribe, getSnapshot);
  return status;
};

const subscribe = (callback: () => void) => {
  window.addEventListener("online", callback);
  window.addEventListener("offline", callback);
  return () => {
    window.removeEventListener("online", callback);
    window.removeEventListener("offline", callback);
  };
};

const getSnapshot = () => {
  return navigator.onLine;
};

export default useOnlineStatus;
