from flask import Flask, render_template, request, redirect
from flask_sqlalchemy import SQLAlchemy
import os

app = Flask(__name__)
basedir = os.path.abspath(os.path.dirname(__file__))
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(basedir, 'app.db')
db = SQLAlchemy(app)

class Chore(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    description = db.Column(db.String(255), nullable=False)

@app.before_first_request
def create_tables():
    db.create_all()

@app.route('/')
def home():
    chores = Chore.query.all()
    return render_template('index.html', chores=chores)

@app.route('/add', methods=['POST'])
def add_chore():
    chore_description = request.form.get('chore')
    if chore_description:
        new_chore = Chore(description=chore_description)
        db.session.add(new_chore)
        db.session.commit()
    return redirect('/')

if __name__ == '__main__':
    app.run(debug=False)