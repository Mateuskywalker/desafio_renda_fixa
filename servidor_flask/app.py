from flask import Flask, jsonify, request
from flask_pymongo import PyMongo
from flask_cors import CORS

#configuracao do Flask
app = Flask(__name__)
CORS(app)
cors = CORS(app, resources={r"/api/*": {"origins": "*"}})

app.config['MONGO_DBNAME'] = 'teste_db'

# a URI pode variar de acordo com o pc. Verifique sua URI quando iniciar o banco
app.config['MONGO_URI'] = 'mongodb://127.0.0.1:27017/teste_db'

mongo = PyMongo(app)

#configuracao das rotas
@app.route('/get_records', methods=['GET'])
def get_records():
    collection = mongo.db.catalogo.find()
    print(collection)
    output = []

    for record in collection:
        output.append({"nome": record['nome'], "email": record['email'], 'telefone': record['telefone']})
  
    return jsonify({'result':output})

@app.route('/insert_record', methods=['POST'])
def insert_record():
    collection = mongo.db.catalogo

    nome = request.json['nome']
    email = request.json['email']
    telefone = request.json['telefone']

    collection_id = collection.insert({'nome':nome, 'email':email, 'telefone':telefone})
    new_user = collection.find_one({'_id': collection_id})

    output = {'nome': new_user['nome'], 'email': new_user['email']}

    return jsonify({'result': output})

if __name__ == '__main__':
    app.run(debug=True)