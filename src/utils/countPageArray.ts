const countPageArray = (length: number): number[] => {

  let arrayNumberPages = [];
  const quantPages = Math.ceil(length/5);

  for(let i=1; quantPages >= i; i++ ) { 
    arrayNumberPages.push(i);
  }

  return arrayNumberPages;
}

export default countPageArray;