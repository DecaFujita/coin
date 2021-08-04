const coinSide = (array) => {
    let index = Math.floor(Math.random() * 2);
    return(array[index]);
}

export { coinSide };