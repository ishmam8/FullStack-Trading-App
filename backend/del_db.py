import sqlite3
import config
import json
import alpaca_trade_api as tradeapi
connection = sqlite3.connect(config.DB_FILE)

cursor = connection.cursor()

cursor.execute("""
    DROP TABLE stock 
""")

cursor.execute("""
    DROP TABLE stock_price
    
""")

# cursor.execute("INSERT INTO stock (symbol, company) VALUES ('ADBE','Adobe Inc.')")
# cursor.execute("INSERT INTO stock (symbol, company) VALUES ('VZ','Verizon')")
# cursor.execute("INSERT INTO stock (symbol, company) VALUES ('TSLA','Tesla')")


# commit changes to the database
connection.commit()
