from flask import Flask, send_from_directory
app = Flask(__name__,
            static_folder='dist/static')

@app.route("/")
def hello():
    return send_from_directory('dist', 'index.html')