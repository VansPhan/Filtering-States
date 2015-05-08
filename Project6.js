        var theStates = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida",
                 "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine",
                 "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska",
                 "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio",
                 "Oklahoma", "Oregon", "Pennsylvania","Rhode Island","South Carolina", "South Dakota", "Tennessee", "Texas",
                 "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"];


        display(theStates);

        function display(array) {
          var stateString = array.join("  ");
			   states.innerHTML = stateString;
			   states.style.fontSize = "20pt";
			   states.style.fontFamily = "Arial";

        }

        function radio() {
        	var choices = document.getElementsByName("pixel");
        	if (choices[0].checked) {
        		states.style.fontSize = "20pt";
      		}
      		else if (choices[1].checked) {
      			states.style.fontSize = "25pt";
      		}
      		else {
      			states.style.fontSize = "30pt";
      		}
      	}

      	function dropdown() {
      		var selected = textFamily[textFamily.selectedIndex].value;
      		states.style.fontFamily = selected;
      	}

      	function textLength(element, index, array) {
      		var min = document.getElementById("min").value;
      		var minNum = parseInt(min);
      		var max = document.getElementById("max").value;
      		var maxNum = parseInt(max);
      			if (isNaN(minNum)) {
      				var minNum = 0;
      			}
      			if (isNaN(maxNum)) {
      				var maxNum = 100;
      			}
      			if ((element.length > minNum) && (element.length < maxNum)) {
      				return true;
      			}
            return false;
      		}
          
    function call() {
      var arrExcluded = theStates.filter(exclusionCheck);
      var arrFinal = arrExcluded.filter(textLength).join(" ");
      states.innerHTML = arrFinal;
    }

		function exclusionCheck(element, index, array) {

      		if (excludeA.checked) {
        		var numA = element.indexOf("a");
        		if (numA > 0) {
        			return false;
      			}
        	}
        	if (excludeE.checked) {
        		var numE = element.indexOf("e");
        		if (numE > 0) {
              return false;
        		}
        	}
        	if (excludeO.checked) {
      			var numO = element.indexOf("o");
        		if (numO > 0) {
              return false;
        		}
        	}
      			return true;
		}