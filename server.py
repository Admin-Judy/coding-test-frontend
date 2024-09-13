from flask import Flask, request, jsonify
from flask_cors import CORS  # 추가
import sys
import io

app = Flask(__name__)
CORS(app)  # CORS 설정 추가

@app.route('/execute', methods=['POST'])
def execute_code():
    code = request.json.get('code', '')
    old_stdout = sys.stdout
    redirected_output = sys.stdout = io.StringIO()
    try:
        exec(code)
        output = redirected_output.getvalue()
    except Exception as e:
        output = str(e)
    finally:
        sys.stdout = old_stdout
        
    return jsonify({'output': output.strip()})

if __name__ == '__main__':
    app.run(debug=True)
