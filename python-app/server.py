from flask import Flask, request

import chatbot

app = Flask(__name__)

@app.route('/')
@app.route('/api/chatbot')
def chatbot_with_gemini ():
    prompt = request.args.get('message')

    response = chatbot.chat_with_gemini(prompt)
    return response

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000)