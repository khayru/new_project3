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


# from flask import Flask
from flask_cors import CORS
app = Flask(__name__)
CORS(app)

# app = Flask(__name__)
@app.route("/")
def Wlecome():

   #session = Session(engine)
   #data1 = engine.execute("SELECT * FROM electric_car_data where Make = 'NISSAN' and ModelYear = 2018;")
   
   #print(data1)
   #y = [a for a in data1]
   #print(y)

   return render_template("index.html")
    
#  Create an app
# NISSAN
@app.route("/get_data")
def get_data():
   data1 = engine.execute("SELECT Make,Model,sum(SalePrice) FROM electric_car_data where Make = 'NISSAN' and ModelYear= 2021 GROUP BY Make, Model, ModelYear;")
   # print(data1)
   y = [a for a in data1]
   # print(y)
   
   
   all_passengers = []
   for name, year ,sale, in y:
        passenger_dict = {}
        passenger_dict["Make"] = name
        passenger_dict ["Model"] = year
        passenger_dict["SalePrice"] = sale
       
        all_passengers.append(passenger_dict)

   return jsonify(all_passengers)
   
   # return render_template("index.html",data=jsonify(all_passengers))
   #print(data)
# JEEP
@app.route("/get_car")
def get_car():
   data2 = engine.execute("SELECT Make,Model,ModelYear,sum(SalePrice) FROM electric_car_data where Make = 'JEEP' and ModelYear= 2021 GROUP BY Make, Model, ModelYear;")
   # print(data1)
   z = [a for a in data2]
   # print(y)
   
   
   all_car = []
   for name, year , ModelYear, sale in z:
        car_dict = {}
        car_dict["Make"] = name
        car_dict["Model"] = year
        car_dict["ModelYear"] = ModelYear
        car_dict["SalePrice"] = sale
       
        all_car.append(car_dict)

   return jsonify(all_car)
# volovo
@app.route("/get_car_data")
def get_car_data():
   data3 = engine.execute("SELECT Make,Model,ModelYear,sum(SalePrice) FROM electric_car_data WHERE Make = 'VOLVO' and ModelYear= 2022 GROUP BY Make, Model, ModelYear;")
   # print(data1)
   x = [a for a in data3]
   # print(x)
   
   
   all_car = []
   for name, model , ModelYear,price in x:
        car_dict = {}
        car_dict["Make"] = name
        car_dict["Model"] = model
        car_dict["ModelYear"] = ModelYear
      #   car_dict["SaleDate"]= date
        car_dict["SalePrice"] = price
       
        all_car.append(car_dict)

   return jsonify(all_car)

# TESLA 
@app.route("/get_car_car")
def get_car_car():
   data4 = engine.execute("SELECT Make,Model,ModelYear,sum(SalePrice) FROM electric_car_data WHERE Make = 'TESLA' and ModelYear= 2023 GROUP BY Make, Model, ModelYear;")
   # print(data1)
   x = [a for a in data4]
   # print(x)
   
   
   all_car = []
   for name, model , ModelYear,price in x:
        car_dict = {}
        car_dict["Make"] = name
        car_dict["Model"] = model
        car_dict["ModelYear"] = ModelYear
      #   car_dict["SaleDate"]= date
        car_dict["SalePrice"] = price
       
        all_car.append(car_dict)

   return jsonify(all_car)



# get here the cities type and make and model 
@app.route("/get_car_type")
def get_car_type():
   data5 = engine.execute("SELECT Make,Model,ModelYear,City,CleanAlternativeFuelVehicleType FROM electric_car_data") 
   # print(data1)
   xx= [a for a in data5]
   # print(x)
   
   
   all_car = []
   for name, model , ModelYear,city , type in xx:
        car_dict = {}
        car_dict["Make"] = name
        car_dict["Model"] = model
        car_dict["ModelYear"] = ModelYear
        car_dict["City"]= city
        car_dict["Clean Alternative Fuel Vehicle Type"] = type
       
        all_car.append(car_dict)
   return jsonify(all_car)

#print(data)
if __name__ == "__main__":
 app.run()