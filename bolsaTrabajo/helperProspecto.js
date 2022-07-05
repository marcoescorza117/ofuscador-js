const removeSpacesFORMS = (item) => {
    let expresion = /^\s+|\s+$|\s+(?=\s)/g;
    item.value = item.value.replace(expresion, " ");
}
