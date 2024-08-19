# Boards
BoardsApp


CREATE DATABASE BoardsApp;

USE BoardsApp;
CREATE TABLE Boards (
    BoardId INT PRIMARY KEY IDENTITY(1,1),
    BoardName NVARCHAR(100),
    ConvasState TEXT,
    LastModified DATETIME
);
