import chatbot

if __name__ == "__main__":
    while True:
        user_input = input('You: ')
        if (user_input.lower() in ['quit', 'exit']):
            break
        response = chatbot.chat_with_chatgpt(user_input)
        print('Chatbot: ', response) 