# import necesary libraries  
import sqlite3
# import numpy as np
import requests
import json
# create database in memory 
# Import the dependencies.
#%matplotlib inline

import numpy as np

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func

from flask import Flask, jsonify,render_template
import pandas as pd
import datetime as dt
# Python SQL toolkit and Object Relational Mapper

#################################################
# Database Setup
#################################################

# engine = create_engine("sqlite:///Resources/car_data.sqlite")
# # reflect an existing database into a new model
# Base = automap_base()

# # reflect the tables
# # Base.prepare(engine,reflect = True)
# Base.prepare(autoload_with=engine)
# cardata= Base.classes.electric_car_data
database_path = "Resources/car_data.sqlite"
engine = create_engine(f"sqlite:///{database_path}")
print(engine)
# Create our session (link) from Python to the DB

#################################################
# Flask Setup
#################################################
# 2. Create an app, being sure to pass __name__
app = Flask(__name__)
@app.route("/")
def Wlecome():
   #session = Session(engine)
   #data1 = engine.execute("SELECT * FROM electric_car_data where Make = 'NISSAN' and ModelYear = 2018;")
   #print("Saad")
   #print(data1)
   #y = [a for a in data1]
   #print(y)

   return render_template("index.html")
    
#  Create an app

@app.route("/get_data")
def get_data():
   data1 = engine.execute("SELECT Make,Model FROM electric_car_data where Make = 'NISSAN' and ModelYear = 2018;")
   # print(data1)
   y = [a for a in data1]
   # print(y)
   
   
   all_passengers = []
   for name, year in y:
        passenger_dict = {}
        passenger_dict["Make"] = name
        passenger_dict["Model"] = year
       
        all_passengers.append(passenger_dict)

   return jsonify(all_passengers)
   
   # return render_template("index.html",data=jsonify(all_passengers))
   #print(data)

if __name__ == "__main__":
 app.run()