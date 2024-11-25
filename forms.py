from flask_wtf import Form
from wtforms import TextAreaField, StringField, SubmitField, validators,  ValidationError
from wtforms.validators import DataRequired
 
class ContactForm(Form):
  name = StringField("Name", [validators.DataRequired('Name Field is Required'), validators.Length(min=4, max=25)])
  email = StringField("Email", [validators.DataRequired('Email Field is required'), validators.Length(min=6, max=35), validators.Email()])
  subject = StringField("Subject", [validators.DataRequired('Subject Field is required')])
  message = TextAreaField("Message", [validators.DataRequired('Message Field is required')])
  submit = SubmitField("Send")