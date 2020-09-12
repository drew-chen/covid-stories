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

@app.route('/posts', methods=['POST', 'GET'])
def handle_posts():
    if request.method == 'POST':
        if request.is_json:
            data = request.get_json()
            new_post = PostModel(
                title=data['title'],
                body=data['body'],
                userId=data['userId']
            )
            db.session.add(new_post)
            db.session.commit()
            return { "message": f"{new_post} has been created successfully." }
        else:
            return { "error": "The request payload is not in JSON format." }

    elif request.method == 'GET':
        query_results = PostModel.query.all()
        posts = [{
            "id": post.id,
            "title": post.title,
            "body": post.body,
            "userId": post.userId
        } for post in query_results]

        return { "posts": posts }
