from flask import Flask, render_template, jsonify, send_file
app = Flask(__name__, template_folder='front/dist')


@app.route('/')
def index():
	return render_template('index.html')


@app.route('/<path:d>')
def dist(d):
	return render_template(d)


@app.route('/index.css')
def css():
	return send_file('front/dist/index.css')

@app.route('/test')
def test():
	return jsonify({'text': '''ボールAがある
    色は赤
    位置は100,100
    半径は50
  
    ボールBがある
    色は赤
    位置は100,100
    半径は50'''})


if __name__ == '__main__':
	app.debug = True
	app.run(host='0.0.0.0', port=8080)
