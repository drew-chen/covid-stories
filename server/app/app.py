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

    def __str__(self):
        return self.__repr__()

if __name__ == '__main__':
    app.run(debug=True)

# Handles requests for multiple posts.
@app.route('/posts', methods=['POST', 'GET', 'DELETE'])
def handle_posts():
    print(request.get_json(), flush=True)
    # this is returned, if none of the if statements are true.
    response = { "error": "Wrong request method." }

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
            response = { "message": f"{new_post} has been created successfully." }
        else:
            response = { "error": "The request payload is not in JSON format." }

    elif request.method == 'GET':
        query_results = PostModel.query.all()
        posts = [{
            "id": post.id,
            "title": post.title,
            "body": post.body,
            "userId": post.userId
        } for post in query_results]
        response = { "posts": posts }
    return response

# Handles requests for a single post.
@app.route('/posts/<post_id>', methods=['GET', 'PUT', 'DELETE'])
def handle_post(post_id):
    post = PostModel.query.get_or_404(post_id)
    response = { "error": "Wrong request method." }
    if request.method == 'GET':
        response = {
            "id": post.id,
            "title": post.title,
            "body": post.body,
            "userId": post.userId
        }
        response = {"message": "success", "post": response}

    elif request.method == 'PUT':
        data = request.get_json()
        post.title = data['title']
        post.body = data['body']
        post.userId = data['userId']
        db.session.add(post)
        db.session.commit()
        response =  {"message": f"Post {post} successfully updated"}

    elif request.method == 'DELETE':
        db.session.delete(post)
        db.session.commit()
        response = {"message": f"Post {post} successfully deleted."}
    return response
    