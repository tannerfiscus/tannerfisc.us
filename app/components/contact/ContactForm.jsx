import { API_URL } 			from '../../../config/';
import { Field, reduxForm } from 'redux-form';
import Loading		   	    from '../foundation/Loading.jsx';
import React 		 		from 'react';
import request     			from 'superagent';
import { validateForm }	    from '../../utils/contact';

class ContactForm extends React.Component {
	constructor(props, context) {
		super(props, context);

		this.state = {
			submitted: {},
			submitting: false
		};

		this.handleSubmisson = this.handleSubmisson.bind(this);
		this.renderField = this.renderField.bind(this);
	}

	render() {
		const { handleSubmit, pristine, reset } = this.props;

		return (
			<div className="contact-form">

				{ !!this.state.submitting && <Loading /> }

				<form onSubmit={handleSubmit(this.handleSubmisson)}>

					<Field name="name" type="text" component={ this.renderField } label="Name"/>
					<Field name="email" type="email" component={ this.renderField } label="Email"/>
					<Field name="message" type="textarea" component={ this.renderField } label="Message"/>

					{ !!this.state.submitted.error && this.renderSubmitError() }

					  <div className="grid">
						  <div className="grid-spread-3 grid-flex-9 form-group">
							  <button type="submit" className="button button-block">
								  Send
							  </button>
						  </div>
					  </div>

				</form>


				{ !!this.state.submitted.success && this.renderSuccessMessage() }

			</div>
		);
	}

	getFixedState(e) {
		if (e.target.value) {
			e.target.parentElement.classList.add('fixed');
		} else {
			e.target.parentElement.classList.remove('fixed');
		}
	}

	handleSubmisson(formData) {
		this.setState({ submitting: true });

        request
			.get(`${API_URL}/api/contact/?name=${formData.name}&email=${formData.email}&message=${formData.message}`)
			.end((err, res) => {

				this.setState({ submitting: false });

				if (err || res.error) {
					this.setState({ submitted: { error: true } });
				} else {
					this.setState({ submitted: { success: true } });
				}

			});
	}

	renderField({ name, input, label, type, meta: { touched, error } }) {
		return (
			<div className="form-group">

				{ [ 'email', 'text' ].includes(type) && <input {...input} className='input' type={ type } onBlur={ this.getFixedState } /> }
				{ type === 'textarea' && <textarea {...input} onBlur={ this.getFixedState }></textarea> }

				<label htmlFor={ name }>{ label }</label>

				{ touched && error && <span className="input-error">{error}</span> }

			</div>
		);
	}

	renderSubmitError() {
		return (
			<h6 className="input-submit-error">
				<i className="twa twa-disappointed"></i> <strong>An error occurred</strong> during submission. Please ensure you have filled out the entire form and try again.
			</h6>
		);
	}

	renderSuccessMessage() {
		return (
			<div className="input-submit-success">
				<div>
					<ul className="icon-heading">
						<li><i className="twa twa-e-mail"></i></li>
					</ul>
					<h2>Thanks for reaching out!</h2>
					<h5>I will get back to you as soon as possible.</h5>
				</div>
			</div>
		);
	}
}

ContactForm = reduxForm({
  form: 'contact',
  validate: validateForm
})(ContactForm);

export default ContactForm;
