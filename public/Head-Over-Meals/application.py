import os

from cs50 import SQL
from flask import Flask, flash, redirect, render_template, request, session
from flask_session import Session
from tempfile import mkdtemp
from werkzeug.exceptions import default_exceptions, HTTPException, InternalServerError
from werkzeug.security import check_password_hash, generate_password_hash
import datetime
from flask_mail import Mail, Message
from validate_email import validate_email

# Configure application
app = Flask(__name__)
mail= Mail(app)

# Ensure templates are auto-reloaded
app.config["TEMPLATES_AUTO_RELOAD"] = True

# Ensure responses aren't cached
@app.after_request
def after_request(response):
    response.headers["Cache-Control"] = "no-cache, no-store, must-revalidate"
    response.headers["Expires"] = 0
    response.headers["Pragma"] = "no-cache"
    return response

# Configure session to use filesystem (instead of signed cookies)
app.config["SESSION_FILE_DIR"] = mkdtemp()
app.config["SESSION_PERMANENT"] = False
app.config["SESSION_TYPE"] = "filesystem"
Session(app)

# mail config
app.config['MAIL_SERVER']='smtp.gmail.com'
app.config['MAIL_PORT'] = 465
app.config['MAIL_USERNAME'] = 'headovermealstest@gmail.com'
app.config['MAIL_PASSWORD'] = 'chjtswixdomydwxw'
app.config['MAIL_USE_TLS'] = False
app.config['MAIL_USE_SSL'] = True
mail = Mail(app)

@app.route("/", methods=["GET", "POST"])
def index():

    if request.method == "POST":
        #extract name and date from form through "POST"
        name = request.form.get("name")
        lastname = request.form.get("lastname")
        email = request.form.get("email")

        is_valid = validate_email(
            email_address=email,
            check_format=True,
            check_blacklist=True,
            check_dns=True,
            dns_timeout=10,
            check_smtp=False,
            smtp_timeout=10,
            smtp_helo_host='my.host.name',
            smtp_from_address='my@from.addr.ess',
            smtp_skip_tls=True,
            smtp_tls_context=None,
            smtp_debug=False)

        msg = Message('Hello', sender = 'headovermealstest@gmail.com', recipients=['headovermealstest@gmail.com'])
        msg.body = name + " " + lastname + " has requested on online consultation."
        reply = Message("Head Over Meals consultation",sender = 'headovermealstest@gmail.com',recipients = [email])
        replybody = "Thank you "+ name + " " + lastname +" for choosing Head Over Meals! You will be contacted within the next 24 hours to book a consultation."
        reply.html = render_template("reply.html",body = replybody)

        mail.send(msg)
        mail.send(reply)

        if not is_valid or is_valid == "None" :
            error = "Please enter a valid email address."
        else:
            error = "";
        return error

    else:
        error=""
        return render_template("index.html",error=error)

@app.route("/Recipes")
def Recipes():
    return render_template("recipes.html")

@app.route("/aboutme")
def about():
    return render_template("aboutme.html")

