

export const getIndex = (array, search) =>{
    for (var i=0; i < array.length; i++) {
      if(array[i].value === search)
        return i
    } 
    return 0
}