window.addEventListener('load', function(){
	function isEven(number) {
		return (number % 2 === 0);
	}

	function isPrimeNumber(number) {
		var mn2 = 0;
		if(number <= 1)
			return false;
		else if(isEven(eval(number)) && number != 2)
			return false;
		else
		{
			for(var i = 1; i <= number; i += 2) 
			{
				var y = Math.floor(Math.sqrt(number));
				if (number % i == 0)
					mn2++;
				
				if(mn2 >= 3)
					break;
			}
			if(mn2 >= 3)
				return false;
			else 
				return true;
		}
	}

	var ext = document.getElementById('export');

	function SOE() {
		var num1 = document.getElementById('number1');
		var num2 = document.getElementById('number2');
		var error = function(){alert('Please enter natural number')};
		var patt = /\D/g;
		if (!patt.test(num1.value) && !patt.test(num2.value)){
			var eNum1 = eval(num1.value);
			var eNum2 =eval(num2.value);
			if(eNum1 > 0 && eNum2 > 0 && eNum1 <= eNum2)
			{
				ext.innerHTML = "";
				if(isEven(eNum1) && eNum1 != 2)
					{++eNum1}
				for(var i = eNum1; i <= eNum2; ++i)
				{
					if(isPrimeNumber(i)){
						console.log(i)
					}
					if(i == eNum2){
						ext.className = "success"
						ext.innerHTML = "The results logged in to console";
					}
				}
			}
			else {
				error();
			}
		}
		else {
			error();
		}
	}

	document.getElementById('submit').addEventListener('click', function(){SOE()})
})