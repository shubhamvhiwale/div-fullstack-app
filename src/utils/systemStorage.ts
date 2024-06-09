interface StorageProps {
  storageType: string;
  value: string;
  action: string;
  key: string;
}

export const storage = (d: StorageProps) => {
  switch (d.action) {
    case "get":
      return window[d.storageType].getItem(d.key);
    case "set":
      return window[d.storageType].setItem(d.key, d.value);
    case "clear":
      window[d.storageType].clear();
    default:
      return false;
  }
};
