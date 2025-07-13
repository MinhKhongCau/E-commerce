from flask import Flask, request, jsonify
from flask_cors import CORS
from service import getAllProduct, getAllProductByAsc, getAllProductByDesc, getPersonalProduct, getFavoriteProduct, getBestSellingProduct, changeFavorite, lookProduct

import chatbot

app = Flask(__name__)
CORS(app, supports_credentials=True,
     origins=["http://viteapp:5173"],
     allow_headers=["Content-Type", "Authorization"])

@app.route('/api/products', methods=['GET'])
def handleGetProducts():
    asc = request.args.get('asc')
    desc = request.args.get('desc')
    if asc:
        return getAllProductByAsc()
    elif desc:
        return getAllProductByDesc()
    print(getAllProduct)

    return getAllProduct()

@app.route('/api/best-selling-products', methods=['GET'])
def handleGetBestSellingProducts():
    return getBestSellingProduct()

@app.route('/api/personal-products', methods=['GET'])
def handleGetPersonalProducts():
    return getPersonalProduct()

@app.route('/api/favorite-products', methods=['GET'])
def handleGetFavoriteProducts():
    return getFavoriteProduct()

@app.route('/api/toggle-favorite/<productCode>', methods=['POST'])
def handleToggleFavorite(productCode):
    updated = changeFavorite(productCode)
    if updated:
        return jsonify(updated)
    return jsonify({"error": "Product not found"}), 404

@app.route('/api/look-product/<productCode>', methods=['POST'])
def handleLookProduct(productCode):
    updated = lookProduct(productCode)
    if updated:
        return jsonify(updated)
    return jsonify({"error": "Product not found"}), 404


@app.route('/api/chatbot')
def chatbot_with_gemini ():
    prompt = request.args.get('message')

    response = chatbot.chat_with_gemini(prompt)
    print(response)

    return jsonify({'text': response})
    # return jsonify({'text': 'You get api compelete'})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000)