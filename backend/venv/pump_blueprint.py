from flask import Blueprint, jsonify, request
import pandas as pd

# Create a blueprint
pump_blueprint = Blueprint('pump_blueprint', __name__)

# Replace 'your_csv_file.csv' with the actual path to your CSV file
CSV_FILE_PATH = '/Users/pruthvihosmani/Desktop/flask13sep/backend/venv/new_pumps.csv'

# Read the CSV file into a DataFrame
df = pd.read_csv(CSV_FILE_PATH)

# Routes within the blueprint
@pump_blueprint.route('/api/getPumpOptions', methods=['GET'])
def get_pump_options():
    try:
        # Extract unique pump options from the 'Pump' column of the CSV file
        unique_pumps = df['Pump'].unique()
        pump_options = [{'value': pump, 'label': pump} for pump in unique_pumps]
        return jsonify(pumpOptions=pump_options)
    except Exception as e:
        return jsonify(error=str(e)), 500

@pump_blueprint.route('/api/getPumpDetails', methods=['GET'])
def get_pump_details():
    attribute = request.args.get('attribute')
    try:
        pump_data = df[df['Pump'] == attribute].to_dict(orient='records')
        
        if pump_data:
            # Sanitize data by replacing 'NaN' with 'No data' for each field
            for record in pump_data:
                for key, value in record.items():
                    if pd.isna(value):
                        record[key] = 'No data'
            return jsonify(pump_data[0])
        else:
            return jsonify({}), 404
    except Exception as e:
        return jsonify(error=str(e)), 500

