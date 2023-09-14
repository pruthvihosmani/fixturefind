# from flask import Flask, request, jsonify
# import pandas as pd

# app = Flask(__name__)

# # Replace 'your_csv_file.csv' with the actual path to your CSV file
# CSV_FILE_PATH = '/Users/pruthvihosmani/Desktop/flask13sep/backend/venv/pumps.csv'

# # Define a route to serve the "Pump" attribute options
# @app.route('/api/getPumpOptions', methods=['GET'])
# def get_pump_options():
#     try:
#         # Read the CSV file and extract the unique "Pump" values
#         df = pd.read_csv(CSV_FILE_PATH)
#         unique_pumps = df['Pump'].unique()
#         pump_options = [{'value': pump, 'label': pump} for pump in unique_pumps]
#         return jsonify(pumpOptions=pump_options)
#     except Exception as e:
#         return jsonify(error=str(e)), 500

# # Define a route to serve pump details based on the selected attribute
# @app.route('/api/getPumpDetails', methods=['GET'])
# def get_pump_details():
#     attribute = request.args.get('attribute')
#     try:
#         # Read the CSV file and find the pump details based on the selected attribute
#         df = pd.read_csv(CSV_FILE_PATH)
#         pump_data = df[df['Pump'] == attribute].to_dict(orient='records')
#         if pump_data:
#             return jsonify(pump_data[0])
#         else:
#             return jsonify({}), 404  # Return an empty response with a 404 status code if not found
#     except Exception as e:
#         return jsonify(error=str(e)), 500

# if __name__ == '__main__':
#     app.run(debug=True)
# from flask import Flask, request, jsonify
# from flask_cors import CORS
# import pandas as pd

# app = Flask(__name__)
# CORS(app, resources={r"/api/*": {"origins": "http://localhost:3000"}})

# # Replace 'your_csv_file.csv' with the actual path to your CSV file
# CSV_FILE_PATH = '/Users/pruthvihosmani/Desktop/flask13sep/backend/venv/pumps.csv'

# @app.route('/api/getPumpOptions', methods=['GET'])
# def get_pump_options():
#     try:
#         df = pd.read_csv(CSV_FILE_PATH)
#         unique_pumps = df['Pump'].unique()
#         pump_options = [{'value': pump, 'label': pump} for pump in unique_pumps]
#         return jsonify(pumpOptions=pump_options)
#     except Exception as e:
#         return jsonify(error=str(e)), 500

# @app.route('/api/getPumpDetails', methods=['GET'])
# def get_pump_details():
#     attribute = request.args.get('attribute')
#     try:
#         df = pd.read_csv(CSV_FILE_PATH)
#         pump_data = df[df['Pump'] == attribute].to_dict(orient='records')
#         if pump_data:
#             return jsonify(pump_data[0])
#         else:
#             return jsonify({}), 404
#     except Exception as e:
#         return jsonify(error=str(e)), 500

# if __name__ == '__main__':
#     app.run(debug=True)

# from flask import Flask, request, jsonify
# from flask_cors import CORS
# import pandas as pd

# app = Flask(__name__)
# cors = CORS(app, resources={r"/api/*": {"origins": "*"}})

# # Replace 'your_csv_file.csv' with the actual path to your CSV file
# CSV_FILE_PATH = '/Users/pruthvihosmani/Desktop/flask13sep/backend/venv/pumps.csv'

# @app.route('/api/getPumpOptions', methods=['GET'])
# def get_pump_options():
#     try:
#         df = pd.read_csv(CSV_FILE_PATH)
#         unique_pumps = df['Pump'].unique()
#         pump_options = [{'value': pump, 'label': pump} for pump in unique_pumps]
#         return jsonify(pumpOptions=pump_options)
#     except Exception as e:
#         return jsonify(error=str(e)), 500

# @app.route('/api/getPumpDetails', methods=['GET'])
# def get_pump_details():
#     attribute = request.args.get('attribute')
#     try:
#         df = pd.read_csv(CSV_FILE_PATH)
#         pump_data = df[df['Pump'] == attribute].to_dict(orient='records')
#         if pump_data:
#             return jsonify(pump_data[0])
#         else:
#             return jsonify({}), 404
#     except Exception as e:
#         return jsonify(error=str(e)), 500
    

# if __name__ == '__main__':
#     app.run(debug=True)
# from flask import Flask, Blueprint, jsonify
# from flask_cors import CORS

# app = Flask(__name__)

# # Create a blueprint
# your_blueprint = Blueprint('your_blueprint', __name__)

# # Configure CORS for the blueprint
# CORS(your_blueprint, resources={r"/api/*": {"origins": "http://localhost:3000"}})

# # Register the blueprint with the app
# app.register_blueprint(your_blueprint)

# # Routes within the blueprint
# @your_blueprint.route('/api/getPumpOptions', methods=['GET'])
# def get_pump_options():
#     try:
#         # Your code to fetch pump options
#         pump_options = ['Option1', 'Option2', 'Option3']
#         return jsonify(pumpOptions=pump_options)
#     except Exception as e:
#         return jsonify(error=str(e)), 500

# @your_blueprint.route('/api/getPumpDetails', methods=['GET'])
# def get_pump_details():
#     attribute = request.args.get('attribute')
#     try:
#         # Your code to fetch pump details based on the attribute
#         pump_data = {'attribute': attribute, 'value': 'Some Value'}
#         return jsonify(pump_data)
#     except Exception as e:
#         return jsonify(error=str(e)), 500

# if __name__ == '__main__':
#     app.run(debug=True)

from flask import Flask
from flask_cors import CORS
from pump_blueprint import pump_blueprint  # Import the blueprint

app = Flask(__name__)

# Configure CORS for the blueprint
CORS(pump_blueprint, resources={r"/api/*": {"origins": "http://localhost:3000"}})

# Register the blueprint with the app
app.register_blueprint(pump_blueprint)

if __name__ == '__main__':
    app.run(debug=True)

