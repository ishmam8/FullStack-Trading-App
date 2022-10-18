import sqlite3
import config
import json
import alpaca_trade_api as tradeapi
connection = sqlite3.connect(config.DB_FILE)
# organize the table rows and access the columns by names
connection.row_factory = sqlite3.Row

cursor = connection.cursor()

# list all the stocks from the stock table
cursor.execute("""
    SELECT symbol, name from stock
""")
rows = cursor.fetchall()
symbols = [row['symbol'] for row in rows]

api = tradeapi.REST(config.API_KEY, config.API_SECRET,
                    base_url=config.BASE_URL)

# list of assets in alpaca db
assets = api.list_assets()

for asset in assets:
    try:
        # uniques values only
        if asset.status == 'active' and asset.tradable and asset.symbol not in symbols:
            print("Added an asset to stock table", asset.symbol, asset.name)
            cursor.execute(
                "INSERT INTO stock (symbol, name) VALUES (?,?)", (asset.symbol, asset.name))
    except Exception as e:
        print(asset.symbol)
        print(e)

connection.commit()


# cursor.execute("INSERT INTO stock (symbol, company) VALUES ('ADBE','Adobe Inc.')")
# cursor.execute("INSERT INTO stock (symbol, company) VALUES ('VZ','Verizon')")
# cursor.execute("INSERT INTO stock (symbol, company) VALUES ('TSLA','Tesla')")
