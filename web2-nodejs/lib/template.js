module.exports = {
  // refactoring
  html:function(title, list, body, control) {
    return `
      <!doctype html>
      <html>
      <head>
        <title>WEB - ${title}</title>
        <meta charset="utf-8">
      <body>
        <h1><a href="/">WEB</a></h1>
        ${list}
        ${control}
        ${body}
      </body>

      </head>
      </html>
    `;
  },
  list:function(filelist) {
    var list  = '<ul>';
    var i=0;
    while(i<filelist.length) {
      list += `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`;
      i++;
    }
    list = list+'</ul>';
    return list;
  }
}
