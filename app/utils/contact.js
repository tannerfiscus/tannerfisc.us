module.exports = {
    validateForm: (values) => {
        let errors = {};

    	if (!values.name) {
    		errors.name = 'Please provide your name.';
    	}

    	const validEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    	if (!values.email) {
    		errors.email = 'Please provide your email address.';
    	} else if (!validEmail.test(values.email)) {
    		errors.email = 'Please provide a valid email address.';
    	}

    	const noHtml = /^((?!\0|<([a-zA-z]|!|\/|\?)|(&#)).)*$/;
    	if (!values.message) {
    		errors.message = 'Please provide a message.';
    	} else if (!noHtml.test(values.message)) {
    		errors.message = 'Please provide only unformatted text.';
    	}

    	return errors;
    }
}
