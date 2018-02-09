String.prototype.camelCase = function () {
    this.toString().replace(/\s+(.)/g, function (mtch, grp) { return grp.toUpperCase()  });
};

String.prototype.clean= function () {
  return this.toString().replace(/ /g,"").replace(/\//g,"").replace(/\(/g,"").replace(/\)/g,"").replace(/-/g,"").replace(/\)/g,"").replace(/\_/g,"").replace(/\./,'');
}

String.prototype.sentence= function (){
  var result = this.replace( /([A-Z])/g, " $1" );
  var finalResult = result.charAt(0).toUpperCase() + result.slice(1);
  return finalResult;
}


// var columnsToShow = [2,3,4,5,19,20,21,31,32,33,34,38,39,40,41,42,71,72,75,76];
// for(i=0;i<columnsToShow.length;i++){
//   columns+="<th id='"+dataArray[[1][columnsToShow[i]]]+"'>"+dataArray[[1][columnsToShow[i]]]+"</th>";
// }
// $('#tableheader').append(columns);
// temp.push(dataArray[i][columnsToShow[j]]);
