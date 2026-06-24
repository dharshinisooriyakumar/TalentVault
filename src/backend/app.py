from flask import Flask, request, jsonify
from flask_cors import CORS
import os
import pdfplumber
import re
from db import conn, cursor

app = Flask(__name__)
CORS(app)

UPLOAD_FOLDER = "uploads"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

@app.route("/")
def home():
    return "Flask Backend Running"

@app.route("/upload", methods=["POST"])
def upload_file():

    if "resume" not in request.files:
        return jsonify({"message": "No file uploaded"}), 400

    file = request.files["resume"]

    filepath = os.path.join(UPLOAD_FOLDER, file.filename)
    file.save(filepath)

    text = ""

    if file.filename.endswith(".pdf"):
        with pdfplumber.open(filepath) as pdf:
            for page in pdf.pages:
                text += page.extract_text() or ""

    print("\n===== RESUME CONTENT =====")
    print(text[:1000])
    print("=========================\n")

    name = text.split("\n")[0]

    email = re.findall(r'[\w\.-]+@[\w\.-]+', text)

    phone = re.findall(r'\b\d{10}\b', text)

    cursor.execute(
        """
        INSERT INTO candidates
        (name, email, phone, resume_file)
        VALUES (%s, %s, %s, %s)
        """,
        (
            name,
            email[0] if email else "Not Found",
            phone[0] if phone else "Not Found",
            file.filename
        )
    )

    conn.commit()

    return jsonify({
        "message": "Upload Successful",
        "filename": file.filename,
        "name": name,
        "email": email[0] if email else "Not Found",
        "phone": phone[0] if phone else "Not Found"
    })

if __name__ == "__main__":
    app.run(debug=True)