SELECT COUNT(*) FROM Flights;

SELECT AVG (ArrDelay), AVG (DepDelay), Origin
FROM Flights GROUP BY Origin
ORDER BY Origin;

SELECT Origin, colYear, colMonth, AVG(ArrDelay)
FROM Flights GROUP BY Origin, colYear, colMonth
ORDER BY Origin, colYear, colMonth;

SELECT USAirports.City, Flights.colYear, Flights.colMonth, AVG (Flights.ArrDelay)
FROM USAirports, Flights
WHERE USAirports.IATA = Flights.Origin
GROUP BY USAirports.City, Flights.colYear, Flights.colMonth
ORDER BY USAirports.City, Flights.colYear, Flights.colMonth;

SELECT Carriers.Description, SUM(Flights.Cancelled) AS CancelledFlights
FROM Carriers, Flights 
WHERE Carriers.CarrierCode = Flights.UniqueCarrier
GROUP BY Carriers.Description, Flights.Cancelled
ORDER BY CancelledFlights DESC;

SELECT flightID, Distance
FROM Flights
ORDER BY Distance DESC LIMIT 0,10;

SELECT CARRIERS.Description, AVG (Flights.ArrDelay) AS Average
FROM Carriers, Flights
WHERE Carriers.CarrierCode = Flights.Origin
GROUP BY CARRIERS.Description, Flights.ArrDelay
HAVING Flights.ArrDelay>10 
ORDER BY Average DESC;