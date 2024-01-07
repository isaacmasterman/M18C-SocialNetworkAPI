// dateFormat function

const addZero = (i) => {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
};
  
const dateFormat = (timestamp) => {
    const date = new Date(timestamp);
    const year = date.getFullYear();
    const month = addZero(date.getMonth() + 1); // JavaScript months are 0-indexed
    const day = addZero(date.getDate());
    const hours = addZero(date.getHours());
    const minutes = addZero(date.getMinutes());
    const seconds = addZero(date.getSeconds());
  
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
};
  
module.exports = dateFormat;