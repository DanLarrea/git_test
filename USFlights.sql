SELECT COUNT(*) FROM Flights;

SELECT AVG (ArrDelay), AVG (DepDelay), Origin
FROM Flights GROUP BY Origin
ORDER BY Origin;

SELECT Origin, colYear, colMonth, AVG(ArrDelay)
FROM Flights GROUP BY Origin, colYear, colMonth
ORDER BY Origin, colYear, colMonth;

SELECT USAirports.City, Flights.colYear, Flights.colMonth, AVG (Flights.ArrDelay)
FROM Flights LEFT JOIN USAirports
ON USAirports.IATA = Flights.Origin
GROUP BY USAirports.City, Flights.colYear, Flights.colMonth
ORDER BY USAirports.City, Flights.colYear, Flights.colMonth;

SELECT Carriers.Description, COUNT(Flights.Cancelled) AS CancelledFlights
FROM Carriers, Flights 
WHERE Carriers.CarrierCode = Flights.UniqueCarrier
GROUP BY Carriers.Description, Flights.Cancelled
ORDER BY CancelledFlights DESC;

SELECT TailNum, SUM(Distance)
FROM Flights
WHERE TailNum NOT LIKE 'NA'
GROUP BY TailNum, Distance
ORDER BY SUM(Distance) DESC LIMIT 0,10;

SELECT CARRIERS.Description, AVG (Flights.ArrDelay) AS Average
FROM Carriers, Flights
WHERE Carriers.CarrierCode = Flights.Origin
GROUP BY CARRIERS.Description, Flights.ArrDelay
HAVING Flights.ArrDelay>10 
ORDER BY Average DESC;