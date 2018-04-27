function getUrlParams(url) {
  let queryString = '';
  if (url) {
    queryString = url.split('=');
    queryString = queryString[queryString.length- 1];
  }

  return queryString;

}
