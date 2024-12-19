from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

if __name__ == "__main__":
    # Bind to 0.0.0.0 and specify the port
    app.run(host="0.0.0.0", port=5000)
