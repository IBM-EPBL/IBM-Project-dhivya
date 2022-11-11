import sqlite3 as sql


connect=sql.connect("database.db")
#Create Cursor
cursor=connect.cursor()

# cursor.execute("""
#     CREATE TABLE customers (
#         first_name text ,
#         lastname text,
#         email text
        
#     )


# """)

cursor.execute("INSERT INTO customers VALUES ('John','John','asheeff')")
print("command executed successfully")

print(cursor.fetchall())


connect.commit()

connect.close()