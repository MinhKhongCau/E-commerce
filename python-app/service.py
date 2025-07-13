import json

PRODUCTS_FILE = "products.json"

# Đọc dữ liệu từ file JSON
def load_products():
    with open(PRODUCTS_FILE, "r") as f:
        return json.load(f)

# Ghi dữ liệu trở lại file JSON
def save_products(products):
    with open(PRODUCTS_FILE, "w") as f:
        json.dump(products, f, indent=4)

# Các service chính
def getAllProduct():
    return load_products()

def getAllProductByAsc():
    products = load_products()
    return sorted(products, key=lambda p: int(p["price"].replace("k", "")))

def getAllProductByDesc():
    products = load_products()
    return sorted(products, key=lambda p: int(p["price"].replace("k", "")), reverse=True)

def getPersonalProduct():
    products = load_products()
    return [p for p in products if str(p["looking"]).lower() == "true" or str(p["favorite"]).lower() == "true"]

def getFavoriteProduct():
    products = load_products()
    return [p for p in products if str(p["favorite"]).lower() == "true"]

def getBestSellingProduct():
    products = load_products()
    return sorted(products, key=lambda p: int(p["sold"].replace("k", "")), reverse=True)[:8]

def changeFavorite(productCode):
    products = load_products()
    for p in products:
        if p["productCode"] == productCode:
            current_fav = str(p["favorite"]).lower() == "true"
            p["favorite"] = not current_fav
            save_products(products)
            return p
    return None

def lookProduct(productCode):
    products = load_products()
    for p in products:
        if p["productCode"] == productCode:
            p["looking"] = True
            save_products(products)
            return p
    return None

