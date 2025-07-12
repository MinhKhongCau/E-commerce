from flask import Flask, request, jsonify
from flask_cors import CORS

import chatbot

app = Flask(__name__)
CORS(app)

@app.route('/')
@app.route('/api/chatbot')
def chatbot_with_gemini ():
    prompt = request.args.get('message')

    response = chatbot.chat_with_gemini(prompt)
    print(response)

    return jsonify({'text': response})
    # return jsonify({'text': 'You get api compelete'})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000)