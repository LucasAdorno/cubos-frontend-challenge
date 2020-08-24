const ajustDate = (date: string): string => {
  if(date[0] !== undefined) {
    let splitDate = date.split('-');
    let resolveDate = `${splitDate[2]}/${splitDate[1]}/${splitDate[0]}`;
    return resolveDate
  }
  else {
    return 'Data não informada'
  }
}

export default ajustDate;