document.getElementById('content1').style.display = 'none';
document.getElementById('content2').style.display = 'none';
document.getElementById('content3').style.display = 'none';

function switchtabs(tid) {
	var mtable = document.getElementById('menutable');
	var col_id = 'divtled' + tid;
	for(var i = 1, col; col =  mtable.rows[0].cells[i - 1]; i++){
		if(col.id != col_id){
			document.getElementById('content' + i).style.display = 'none';
			col.style.background = '#79aec8';
		}
	}
	document.getElementById('content' + tid).style.display = 'block';
	document.getElementById(col_id).style.background = '#4863a0';
}

document.getElementById('divtled1').addEventListener('click', function(){switchtabs(1);});
document.getElementById('divtled2').addEventListener('click', function(){switchtabs(2);});
document.getElementById('divtled3').addEventListener('click', function(){switchtabs(3);});

switchtabs(1);