import numpy
import sqlite3
import config
import alpaca_trade_api as tradeapi
from alpaca_trade_api.rest import TimeFrame
from datetime import date

connection = sqlite3.connect(config.DB_FILE)

connection.row_factory = sqlite3.Row

cursor = connection.cursor()

cursor.execute("""
    SELECT id, symbol, name FROM stock
""")

rows = cursor.fetchall()

# symbols = [row['symbol'] for row in rows]
symbols = []
stock_dict = {}
# print(symbols)
for row in rows:
    symbol = row['symbol']
    symbols.append(symbol)
    stock_dict[symbol] = row['id']

# print(symbols)

api = tradeapi.REST(config.API_KEY, config.API_SECRET,
                    base_url=config.BASE_URL)


chunk_size = 200
for i in range(0, len(symbols), chunk_size):
    curr_date = str(date.today())
    print(curr_date)
    symbol_chunk = symbols[i:i+chunk_size]
    try:
        barsets = api.get_bars(symbol_chunk, TimeFrame.Day,
                               "2022-01-01")
        # print(barsets)
    except Exception as e:
        print("crypto", symbol_chunk)

    unique = []
    print(barsets)
    for symbol in barsets:

        if len(unique) == 0 or unique[-1] != symbol.S:
            stock_id = stock_dict[symbol.S]
            print(f"processing symbol {symbol.S}")
            # print(unique)
            unique.append(symbol.S)

            for bar in barsets:
                if unique[-1] == bar.S:
                    cursor.execute("""
                        INSERT INTO stock_price (stock_id, date, open, high, low, close, volume)
                        VALUES (?, ?, ?, ?, ?, ?, ?)
                    """, (stock_id, bar.t.date(), bar.o, bar.h, bar.l, bar.c, bar.v))

                    # unique = []
                    # for symbol1 in barsets:
                    #     #print(f"Processing symbol {bar}")
                    #     if len(unique) == 0 or unique[-1] != symbol1.S:
                    #         unique.append(symbol1.S)
                    #         print(unique[-1])
                    #         for symbol in barsets:
                    #             if unique[-1] == symbol.S:
                    #                 # print(bar.S)
                    #                 # print(symbol.t, symbol.o, symbol.h, symbol.l, symbol.c, symbol.v)
                    #                 # print(symbol)
                    #                 print(symbol.t, symbol.o, symbol.h,
                    #                       symbol.l, symbol.c, symbol.v)
connection.commit()
