import psycopg2

conn = psycopg2.connect(
    host="localhost",
    database="resume_db",
    user="postgres",
    password="dharshini",
    port="5432"
)

cursor = conn.cursor()