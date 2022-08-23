import sqlite3
import config
import json
import alpaca_trade_api as tradeapi
connection = sqlite3.connect(config.DB_FILE)

cursor = connection.cursor()

cursor.execute("""
    CREATE TABLE IF NOT EXISTS stock (
    id INTEGER PRIMARY KEY,
    symbol TEXT NOT NULL UNIQUE,
    name TEXT NOT NULL
    )
""")
cursor.execute("""
    CREATE TABLE IF NOT EXISTS stock_price (
    id INTEGER PRIMARY KEY,
    stock_id INTEGER,
    date NOT NULL,
    open NOT NULL,
    high NOT NULL,
    low NOT NULL,
    close NOT NULL, 
    volume NOT NULL,
    FOREIGN KEY (stock_id) REFERENCES stock (id)
    )
""")

# cursor.execute("INSERT INTO stock (symbol, company) VALUES ('ADBE','Adobe Inc.')")
# cursor.execute("INSERT INTO stock (symbol, company) VALUES ('VZ','Verizon')")
# cursor.execute("INSERT INTO stock (symbol, company) VALUES ('TSLA','Tesla')")

api = tradeapi.REST('PK739E1ARRB6PUBI8R5I', 'z9Y6hSN5oYRhohRqbvLDbSrqcdlzsnyIX9Cgrgb6',
                    base_url='https://paper-api.alpaca.markets')
assets = api.list_assets()

for asset in assets:
    try:
        if asset.status == 'active' and asset.tradable:
            cursor.execute(
                "INSERT INTO stock (symbol, name) VALUES (?,?)", (asset.symbol, asset.name))
    except Exception as e:
        print(asset.symbol)
        print(e)

# commit changes to the database
connection.commit()
