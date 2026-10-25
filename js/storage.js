const STORAGE_KEY = "hcmLiteData";

function getData() {
  const data = localStorage.getItem(STORAGE_KEY);

  if (data === null) {
    return null;
  }

  return JSON.parse(data);
}

function saveData(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}
