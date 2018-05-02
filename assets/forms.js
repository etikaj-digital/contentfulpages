	
		function updateButton(button){
		
			button.className = 'g-recaptcha';
			button.setAttribute('data-sitekey', '6Lcke1YUAAAAAMs34BfCP767CNnrHZEcmcleY0XR');
			button.setAttribute('data-callback', 'onSubmit');
			
			return button;
		
		}
	
		function submitted(response, nexturl){ 
      
			console.log(response); 
      
			try {
				var j = JSON.parse(response);
			} catch(e) {
				var j = {
					'success' : false,
					'message' : 'Something went wrong submitting your form'
				}
			}
      
			console.log(j);
      
			if (j.success) {
				console.log(nexturl);
				// window.location.href = nexturl;
				document.getElementById('error').innerTetxt = 'Jumping to ' + nexturl;
			} else {
				document.getElementById('error').innerText = j.message;
			}
      
		}
		
	
		function onSubmit(event){
		
			console.log(event);
			
			event.preventDefault();
    
			var action = 'https://openwhisk.ng.bluemix.net/api/v1/web/christopher.knowles%40roads.vic.gov.au_dev/default/form.json';
			var form = event.target;
			var data = {};
    
			for (var e=0; e < form.elements.length; e++){
				try {
					data[form.elements[e].name] = form.elements[e].value;
				} catch(e){}
			}
			
			try {
				data.formname = form.getAttribute('data-form');
				data.nexturl = form.getAttribute('data-nexturl');
			} catch(e){}
    
			console.log(data);
            
			// example request with data object
			postAjax(action, data, submitted);
    
		} 
  
		
		function postAjax(url, data, success) {
		
			var params = typeof data == 'string' ? data : Object.keys(data).map(
					function(k){ return encodeURIComponent(k) + '=' + encodeURIComponent(data[k]) }
				).join('&');

			var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
			xhr.open('POST', url);
			xhr.onreadystatechange = function() {
				if (xhr.readyState>3 && (xhr.status==200 || xhr.status==201)) { success(xhr.responseText, data.nexturl); }
			};
			xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
			xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
			xhr.send(params);
			return xhr;
		}
		
		
		for (var i=0; i<document.forms.length; i++){
			var form = document.forms[i];
			
			if (form.hasAttribute('data-form')){
				form.name = form.getAttribute('data-form');
			}
			
			if (form.hasAttribute('recaptcha')){
				var btn_found = false;
				for (var e=0; e<form.elements.length; e++){
					var el = form.elements[e];
					if (el.nodeName == 'BUTTON'){
						btn_found = true;
						updateButton(el);
					}
				}
				
				if (!btn_found) {
					var button = updateButton(document.createElement('button'));
					form.appendChild(button);
				}
			}
		}
