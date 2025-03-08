import pandas as pd
import numpy as np
from flask import Flask, render_template_string

app = Flask(__name__)

# get url for raw data file
url = "https://raw.githubusercontent.com/Laurenwalker25/dashboard/refs/heads/main/data/Week14.csv"

# read the csv file directly from the url
data = pd.read_csv(url)

# convert to df
df = pd.DataFrame(data)

# convert df to an html table
html_table = df.to_html(index=False)

# Create HTML content for the page
html_content = f"""
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Data Table</title>
    <style>
        table {{border-collapse: collapse; width: 50%; margin: 20px auto;}}
        th, td {{border: 1px solid black; padding: 8px; text-align: left;}}
        th {{background-color: #f2f2f2;}}
        h2 {{text-align: center;}}
    </style>
</head>
<body>
    <h2>Data Table</h2>
    {html_table}
</body>
</html>
"""

# Save the HTML content to index.html
with open("desktop/index.html", "w") as file:
    file.write(html_content)

print("index.html has been generated successfully!")
