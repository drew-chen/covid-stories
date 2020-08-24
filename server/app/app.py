from flask import Flask, request
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = "postgresql://postgres:postgres@localhost:5432/covid_stories_api"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)
migrate = Migrate(app, db)

class PostModel(db.Model):
    __tablename__ = 'posts'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String())
    body = db.Column(db.String())
    userId = db.Column(db.Integer())

    def __init__(self, title, body, userId):
        self.title = title
        self.body = body
        self.userId = userId

    def __repr__(self):
        return f"<Post {self.id}>"

if __name__ == '__main__':
    app.run(debug=True)