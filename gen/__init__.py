# from . import thing

import flask

import os

app = flask.Flask('gen')

@app.route('/')
def index():
   return flask.render_template('index.html.jinja2')
