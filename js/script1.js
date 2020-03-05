/*
ЕТ - 4 days (3.03.2020)
AT - 3 days



Оцените время, необходимое на выполнение задачи – ET (Estimated Time), 
замерьте реально затраченное время – AT (Actual Time)




Для выполнения задания создайте отдельный репозиторий, e.g. 2020-02-03_click
Задание

Напишите программу, которая позволяет выбирать отдельные ячейки в наборе: 

при клике на ячейку она красится в черный цвет, при повторном клике - в белый:


При клике на кнопку Clear вся область очищается:


При клике на кнопку Restore данные восстанавливаются:

Поле ячеек генерируется функцией, в которую передается количество ячеек по горизонтали и 
вертикали, а также элемент, в который ячейки будут нарисованы.



*/





function Table(widht, height,local='div'){
	


	const newLocal = document.createElement(local);
	const newTable = document.createElement('table');
	

	newLocal.id = 'table';
	document.body.append(newLocal);

	const addTable = document.getElementById('table');
	addTable.appendChild(newTable);


	let masses = {
	 	mas : newMas(),
	 	mas2 :[],
	}


	function newMas () {
		let mas = [];

		for ( let i = 0; i < height; i++ ){
   		 	mas[i] = [];
   				for ( var j = 0; j < widht; j++ ){
    			mas[i][j] = 0;
				}
		}
		return mas
	}


    for( let i = 0; i< masses.mas.length; i++ ) {
    		
    		var tr = document.createElement('tr');
			newTable.appendChild(tr);


    		for( let j = 0; j < masses.mas[i].length; j++ ){

    			var td = document.createElement('td');
    			tr.appendChild(td);
    			
    				td.addEventListener('click', function ()  {
						this.style.background = '#345';
			
						masses.mas[ this.parentNode.rowIndex ][ this.cellIndex ] = 1;
							
					});
    			
    		}
    }


	function draw(arg) {

		for( let i=0; i<arg.length; i++ ) {

			var alltr = document.querySelectorAll('tr')[i];

				for(let j=0; j<arg[i].length; j++) {

					let alltd = alltr.querySelectorAll('td')[j];
		

					arg[i][j] == 1 ? alltd.style.background = '#345': alltd.style.background = '#fff';
		
				}
		}
	}



	document.querySelector('#clear-btn').addEventListener('click', function() {
	
		masses.mas2 = masses.mas;
		masses.mas = newMas()
	
    	draw(masses.mas)
		
	});


	document.querySelector('#return-btn').addEventListener('click', function() {

 		draw(masses.mas2)
	
	});

}


let tebl = new Table(10,10)



