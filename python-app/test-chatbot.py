import chatbot
from service import getAllProduct, getAllProductByAsc, getAllProductByDesc, getPersonalProduct, getFavoriteProduct, getBestSellingProduct, changeFavorite


if __name__ == "__main__":
    # Test chat bot
    
    while True:
        user_input = input('You: ')
        if (user_input.lower() in ['quit', 'exit']):
            break
        response = chatbot.chat_with_chatgpt(user_input)
        print('Chatbot: ', response) 

    # Test service

    # print('All products',getAllProduct())
    # print('All product by asc',getAllProductByAsc())
    # print('All product by desc',getAllProductByDesc())
    # print('Personal product',getPersonalProduct())
    # print('Favorite',getFavoriteProduct())
    # print('Best seller',getBestSellingProduct())