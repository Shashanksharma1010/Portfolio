# # import flast module
# from flask import Flask
# from flask import render_template, redirect, flash, request, session
# from forms import ContactForm
# import os

# # instance of flask application
# app = Flask(__name__)


from flask import Flask, render_template, session, request, flash, redirect
from forms import ContactForm
from flask_mail import Message, Mail
import os

mail = Mail()

app = Flask(__name__)

app.secret_key = 'development key'

app.config["MAIL_SERVER"] = "smtp.gmail.com"
app.config["MAIL_PORT"] = 465
app.config["MAIL_USE_SSL"] = True
app.config["MAIL_USERNAME"] = 'pizzapinocchio08@gmail.com'
app.config["MAIL_PASSWORD"] = ''
app.config["MAIL_USE_TLS"] = False
app.config['MAIL_USE_SSL'] = False

mail.init_app(app)

postdata = {}



# home route that returns below text when root url is accessed
@app.route('/', methods=['GET', 'POST'])
def contact():
  form = ContactForm(request.form)

  if request.method == 'GET':
      return render_template('index.html', form=form)

  if request.method == 'POST' and form.validate():
      msg = Message(form.subject.data, sender='pizzapinocchio08@gmail.com', recipients=['ishantsingis261@gmail.com'])
      msg.body = """
      From: %s <%s>
      %s
      """ % (form.name.data, form.email.data, form.message.data)
      mail.send(msg)

      return render_template('index.html', success=True)
  
  flash("message")
  return render_template("index.html", form=form)


# Handling Post Data and error pages.
@app.route('/middle', methods=['POST'])
def data():
	postno = request.form.get('postNo');
	newNo = {1:postno}
	postdata.update(newNo);
	return ""

@app.route('/post')
def post():
	return render_template('post.html', postType=postdata[1])

@app.errorhandler(404)
def page_not_found(e):
    # note that we set the 404 status explicitly
    return render_template('404.html'), 404

@app.errorhandler(500)
def bad_request(e):
    # note that we set the 500 status explicitly
    return render_template('500.html'), 500

if __name__ == '__main__':  
   app.run()  
