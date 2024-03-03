use Northwind
-- Task 1: Display Region ID, Region Description, Territories Description and (inner join with table Territories and Region)
SELECT Territories.RegionID, Territories.TerritoryDescription, Region.RegionID, Region.RegionDescription
	   FROM Territories
	   INNER JOIN Region ON Territories.RegionID = Region.RegionID;
------------------------------------------------------------------------------------------------------------------------------
-- Task 2: Display Company Name and Total orders placed by the company (Table: orders, customer, use inner join, group by)
SELECT Customers.CompanyName, COUNT(Orders.OrderID) AS [Total Orders] FROM Orders
INNER JOIN Customers ON
Orders.CustomerID = Customers.CustomerID
GROUP BY Customers.CompanyName
------------------------------------------------------------------------------------------------------------------------------
-- Task 3: Display Product Name and its Category Name where Category Name starts with B (using Left join category and product)
SELECT Products.ProductName, Categories.CategoryName FROM Products 
LEFT JOIN Categories ON Products.CategoryID = Categories.CategoryID
WHERE Categories.CategoryName LIKE 'B%';
------------------------------------------------------------------------------------------------------------------------------
-- Task 4: Display Titles and their quantity (Hint Pubs database, table title and sales, left join)
use pubs
SELECT titles.title, publishers.pub_name FROM titles
LEFT JOIN publishers ON titles.pub_id = publishers.pub_id
