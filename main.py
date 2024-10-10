import sqlite3
import os
from flask import Flask, render_template, request, g, flash, abort, session, url_for, redirect, make_response, jsonify
from flask_login import LoginManager, login_manager, login_user, login_required, logout_user, current_user
from FDataBase import FDataBase
from werkzeug.security import generate_password_hash, check_password_hash
from UserLogin import UserLogin


DATABASE = '/tmp/database.db'
DEBUG = True
SECRET_KEY = 'kldjvfslfegghdfkjvghkitusre'
MAX_CONTENT_LENGTH = 1024 * 1024

app = Flask(__name__)
app.config.from_object(__name__)

app.config.update(dict(DATABASE=os.path.join(app.root_path, 'database.db')))

login_manager = LoginManager(app)
login_manager.login_view = 'login'
login_manager.login_message = "Авторизуйтесь для доступа к закрытым страницам"
login_manager.login_message_category = "success"

def connect_db():
    conn = sqlite3.connect(app.config['DATABASE'])
    conn.row_factory = sqlite3.Row
    return conn


def create_db():
    db = connect_db()
    with app.open_resource('sq_db.sql', mode='r') as f:
        db.cursor().executescript(f.read())
        db.commit()
        db.close()


def get_db():
    if not hasattr(g, 'link_db'):
        g.link_db = connect_db()
    return g.link_db


@app.teardown_appcontext
def close_db(error):
    if hasattr(g, 'link_db'):
        g.link_db.close()


@app.route('/')
@login_required
def index():
    return render_template("index.html")


@app.route('/handbook')
@login_required
def handbook():
    return render_template("handbook.html")


@app.route('/greeting')
@login_required
def greeting():
    return render_template("greeting.html")


@app.route('/pronoun')
@login_required
def pronoun():
    return render_template("pronoun.html")


@app.route('/family')
@login_required
def family():
    return render_template("family.html")


@app.route('/numbers')
@login_required
def numbers():
    return render_template("numbers.html")


@app.route('/verbs')
@login_required
def verbs():
    return render_template("verbs.html")


@app.route('/preposition')
@login_required
def preposition():
    return render_template("preposition.html")


@app.route('/house')
@login_required
def house():
    return render_template("house.html")


@app.route('/body')
@login_required
def body():
    return render_template("body.html")


@app.route('/look')
@login_required
def look():
    return render_template("look.html")


@app.route('/vegetables')
@login_required
def vegetables():
    return render_template("vegetables.html")


@app.route('/clothes')
@login_required
def clothes():
    return render_template("clothes.html")


@app.route('/animals')
@login_required
def animals():
    return render_template("animals.html")


@app.route('/flash_cards_main')
@login_required
def flashcards():
    return render_template('flash_cards_main.html')


@app.route('/flash_cards_themes')
@login_required
def flashcards_themes():
    return render_template('flash_cards_themes.html')


@app.route('/flashcards_1type')
@login_required
def flashcards_1type():
    return render_template('flashcards_1type.html')


@app.route('/cards_1/greeting')
@login_required
def cards_1_greeting():
    return render_template('cards_1/greeting.html')


@app.route('/cards_1/animals')
@login_required
def cards_1_animals():
    return render_template('cards_1/animals.html')


@app.route('/cards_1/body')
@login_required
def cards_1_body():
    return render_template('cards_1/body.html')


@app.route('/cards_1/clothes')
@login_required
def cards_1_clothes():
    return render_template('cards_1/clothes.html')


@app.route('/cards_1/family')
@login_required
def cards_1_family():
    return render_template('cards_1/family.html')


@app.route('/cards_1/house')
@login_required
def cards_1_house():
    return render_template('cards_1/house.html')


@app.route('/cards_1/look')
@login_required
def cards_1_look():
    return render_template('cards_1/look.html')


@app.route('/cards_1/numbers')
@login_required
def cards_1_numbers():
    return render_template('cards_1/numbers.html')


@app.route('/cards_1/prepositions')
@login_required
def cards_1_prepositions():
    return render_template('cards_1/prepositions.html')


@app.route('/cards_1/pronoun')
@login_required
def cards_1_pronoun():
    return render_template('cards_1/pronoun.html')


@app.route('/cards_1/vegetables')
@login_required
def cards_1_vegetables():
    return render_template('cards_1/vegetables.html')


@app.route('/cards_1/verbs')
@login_required
def cards_1_verbs():
    return render_template('cards_1/verbs.html')


@app.route('/flashcards_2type')
@login_required
def flashcards_2type():
    return render_template('flashcards_2type.html')


@app.route('/cards_2/greeting')
@login_required
def cards_2_greeting():
    return render_template('cards_2/greeting.html')


@app.route('/cards_2/animals')
@login_required
def cards_2_animals():
    return render_template('cards_2/animals.html')


@app.route('/cards_2/body')
@login_required
def cards_2_body():
    return render_template('cards_2/body.html')


@app.route('/cards_2/clothes')
@login_required
def cards_2_clothes():
    return render_template('cards_2/clothes.html')


@app.route('/cards_2/family')
@login_required
def cards_2_family():
    return render_template('cards_2/family.html')


@app.route('/cards_2/house')
@login_required
def cards_2_house():
    return render_template('cards_2/house.html')


@app.route('/cards_2/look')
@login_required
def cards_2_look():
    return render_template('cards_2/look.html')


@app.route('/cards_2/numbers')
@login_required
def cards_2_numbers():
    return render_template('cards_2/numbers.html')


@app.route('/cards_2/prepositions')
@login_required
def cards_2_prepositions():
    return render_template('cards_2/prepositions.html')


@app.route('/cards_2/pronoun')
@login_required
def cards_2_pronoun():
    return render_template('cards_2/pronoun.html')


@app.route('/cards_2/vegetables')
@login_required
def cards_2_vegetables():
    return render_template('cards_2/vegetables.html')


@app.route('/cards_2/verbs')
@login_required
def cards_2_verbs():
    return render_template('cards_2/verbs.html')


@app.route('/flashcards_zagotovka')
@login_required
def flashcards_zagotovka():
    return render_template('flashcards_zagotovka.html')


@app.route("/login", methods=["POST", "GET"])
def login():
    db = get_db()
    dbase = FDataBase(db)
    if current_user.is_authenticated:
        return redirect(url_for('profile'))

    if request.method == "POST":
        user = dbase.getUserByEmail(request.form['email'])
        if user and check_password_hash(user['psw'], request.form['psw']):
            userlogin = UserLogin().create(user)
            rm = True if request.form.get('remainme') else False
            login_user(userlogin, remember=rm)
            return redirect(request.args.get("next") or url_for("index"))
        flash("Неверная пара логин/пароль", "error")

    return render_template("login.html")


@app.route("/register", methods=["POST", "GET"])
def register():
    db = get_db()
    dbase = FDataBase(db)
    if request.method == "POST":
        if len(request.form['name']) > 4 and len(request.form['email']) > 4 \
                and len(request.form['psw']) > 4 and request.form['psw'] == request.form['psw2']:
            hash = generate_password_hash(request.form['psw'])
            res = dbase.addUser(request.form['name'], request.form['email'], hash)
            if res:
                flash("Вы успешно зарегистрированы", "success")
                return redirect(url_for('login'))
            else:
                flash("Ошибка при добавлении в БД", "error")
        else:
            flash("Неверно заполнены поля", "error")

    return render_template("register.html")


@login_manager.user_loader
def load_user(user_id):
    db = get_db()
    dbase = FDataBase(db)
    print("load_user")
    return UserLogin().fromDB(user_id, dbase)


@app.route('/logout')
@login_required
def logout():
    logout_user()
    flash("Вы вышли из аккаунта", "success")
    return redirect(url_for('login'))


@app.route('/profile')
@login_required
def profile():
    db = get_db()
    dbase = FDataBase(db)
    return render_template("profile.html", title="Профиль")


@app.route('/userava')
@login_required
def userava():
    img = current_user.getAvatar(app)
    if not img:
        return ""

    h = make_response(img)
    h.headers['Content-Type'] = 'image/png'
    return h


@app.route('/upload', methods=["POST", "GET"])
@login_required
def upload():
    db = get_db()
    dbase = FDataBase(db)
    if request.method == 'POST':
        file = request.files['file']
        if file and current_user.verifyExt(file.filename):
            try:
                img = file.read()
                res = dbase.updateUserAvatar(img, current_user.get_id())
                if not res:
                    flash("Ошибка обновления аватара", "error")
                    return redirect(url_for('profile'))
                flash("Аватар обновлен", "success")
            except FileNotFoundError as e:
                flash("Ошибка чтения файла", "error")
        else:
            flash("Ошибка обновления аватара", "error")

    return redirect(url_for('profile'))


words = {}

@app.route("/add_word", methods=["GET", "POST"])
def add_word():
    if request.method == "POST":
        word = request.form["word"]
        translation = request.form["translation"]
        words[word] = translation
        return redirect(url_for("show_words"))
    return render_template("add_word.html")

@app.route("/show_words")
def show_words():
    return render_template("show_words.html", words=words)


if __name__ == '__main__':
    app.run(port=8095, host='127.0.0.1', debug=True)