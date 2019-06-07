import os
from flask import Flask, render_template, jsonify, request
import MySQLdb
from flask_cors import CORS

app = Flask(__name__, static_folder="./build/static", template_folder="./build")
CORS(app)

connection = MySQLdb.connect(host='127.0.0.1', port=3306, user='root', passwd=os.environ['MYSQLPASS'],
                                 db='Anime', charset='utf8')

@app.route('/search', methods=['GET'])
def search():
    name = request.args.get('name')
    cursor1 = connection.cursor()

    if name:
        select_sql = 'select id, title, image, url from Anime where title like %s limit 5'
        cursor1.execute(select_sql, ('%' + name + '%',))
    else:
        select_sql = 'select id, title, image, url from Anime order by rand() limit 5'
        cursor1.execute(select_sql, )

    send_data = []
    for row1 in cursor1:
        data = {
            'id': row1[0],
            'title': row1[1],
            'image': row1[2],
            'url': row1[3],
        }
        send_data.append(data)

    return jsonify({'data': send_data})


if __name__ == '__main__':
    app.run(host='0.0.0.0')
