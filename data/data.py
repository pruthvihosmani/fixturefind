import csv

# Define the column name you want to check for entries
target_column = "Pump"

# Input and output file paths
input_file_path = "/Users/pruthvihosmani/Desktop/flask13sep/backend/venv/pumps.csv"
output_file_path = "/Users/pruthvihosmani/Desktop/flask13sep/backend/venv/new_pumps.csv"

# Open the input and output files
with open(input_file_path, 'r', newline='') as input_file, open(output_file_path, 'w', newline='') as output_file:
    # Create CSV reader and writer objects
    reader = csv.DictReader(input_file)
    fieldnames = reader.fieldnames
    writer = csv.DictWriter(output_file, fieldnames=fieldnames)
    
    # Write the header row to the output file
    writer.writeheader()
    
    # Iterate through each row in the input file
    for row in reader:
        # Check if the target column has an entry (not empty)
        if row[target_column]:
            # Write the row to the output file
            writer.writerow(row)

print(f"Rows without an entry in column '{target_column}' have been removed. New data is saved to '{output_file_path}'.")
