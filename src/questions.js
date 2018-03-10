'use strict';

module.exports = {
    /**
     * When editing your questions pay attention to your punctuation. Make sure you use question marks or periods.
     * Make sure the first answer is the correct one. Set at least ANSWER_COUNT answers, any extras will be shuffled in.
     */
    "QUESTIONS_EN_GB" : [
		{
			"The DBMS acts as an interface between what two components of an enterprise class database system?" : [
				"Database application and the database",
				"Data and the database",
				"The user and the database application",
				"Database application and SQL"
				]
		}, 
		{
			"Which of the following products was an early implementation of the relational model developed by E F Codd of IBM?" : [
				"DB2",
				"IDMS",
				"dBase II",
				"R base"
			]
		}, 
		{
			"The following are components of a database except?" : [
				"reports",
				"user data",
				"metadata",
				"indexes"
			]
		}, 
		{
			"An application where only one user accesses the database at a given time is an example of a of n?" : [
				"single user database application",
				"multiuser database application",
				"e commerce database application",
				"data mining database application"
			]
		}, 
		{
			"An online commercial site such as Amazon.com is an example of a of n? " : [
				"ecommerce database application",
				"single user database application",
				"multi user database application",
				"data mining database application"
				]
		}, 
		{
			"Which of the following products was the first to implement true relational algebra in a PC DBMS?" : [
				"R base",
				"dBase II",
				"Oracle",
				"IDMS"
				]
		}, 
		{
			"SQL stands for?" : [
				"Structured Query Language",
				"Sequential Query Language",
				"Structured Question Language",
				"Sequential Question Language"
				]
		}, 
		{
			"The following are functions of a DBMS except. " : [
				"creating and processing forms",
				"creating databases",
				"processing data",
				"administrating databases"]
		}, 
		{
			"You can add a row using SQL in a database with which of the following?" : [
				"INSERT",
				"ADD",
				"CREATE",
				"MAKE"]
		}, 
		{
			"The command to remove rows from a table CUSTOMER is ? " : [
				"DELETE FROM CUSTOMER WHERE",
				"REMOVE FROM CUSTOMER",
				"DROP FROM CUSTOMER",
				"UPDATE FROM CUSTOMER"]
		}, 
		{
			"The SQL WHERE clause. " : [
				"limits the row data are returned",
				"limits the column data that are returned",
				"Both A and B are correct",
				"Neither A nor B are correct"]
		},
		{
			"when is the wildcard in a WHERE clause is useful?" : [
				"An exact match is not possible in a SELECT statement",
				"An exact match is necessary in a SELECT statement",
				"An exact match is necessary in a CREATE statement",
				"An exact match is not possible in a CREATE statement"]
		}, 
		{
			"A view is which of the following?" : [
				"A virtual table that can be accessed via SQL commands",
				"A virtual table that cannot be accessed via SQL commands",
				"A base table that can be accessed via SQL commands",
				"A base table that cannot be accessed via SQL commands"]
		},
		{
			"What is the command to eliminate a table from a database is? " : [
				"DROP TABLE CUSTOMER",
				"REMOVE TABLE CUSTOMER",
				"DELETE TABLE CUSTOMER",
				"UPDATE TABLE CUSTOMER"]
		}, 
		{
			"On Update Cascade ensures which of the following?" : [
				"Data Integrity",
				"Normalization",
				"Materialized Views",
				"All of the above"
			]
		}, 
		{
			"Which of the following is valid SQL for an Index?" : [
				"CREATE INDEX ID",
				"CHANGE INDEX ID",
				"ADD INDEX ID",
				"REMOVE INDEX ID"]
		}, 
		{
			"Which of the following is the correct order of keywords for SQL SELECT statements?" : [
				"SELECT  FROM  WHERE",
				"FROM WHERE SELECT",
				"WHERE FROM SELECT",
				"SELECT WHERE FROM"]
		},
		{
			"What type of failure occurs when Oracle fails due to an operating system or computer hardware failure?" : [
			"Instance Failure",
			"Application failure",
			"Media Failure",
			"Rollback failure"
			]
		},
		{
			"Which statement about sequences is not true?" : [
			"Sequences guarantee valid surrogate key values",
			"A sequence is an object that generates a sequential series of unique numbers",
			"Sequences are most often used to provide values for surrogate keys",
			"NextVal and CurrVal are both sequence methods"
			]
		},
		{
			"Which prefixes are available to Oracle triggers?" : [
			"Both new and old",
			"old only",
			"new only",
			"Neither new nor old"
			]
		},
		{
			"Which of the following is not true about indexes?" : [
			"Indexes are created with the ALTER TABLE command",
			"Indexes are created to enforce uniqueness on columns",
			"Indexes are created to enable fast retrieval by column values",
			"Columns that are frequently used with equal conditions in WHERE clauses are good candidates for indexes"
			]
		},
		{
			"Which of the following is not true of SQL views?" : [
			"Oracle views cannot use the ORDER BY clause in view definitions",
			"Oracle views are created using the standard SQL 92 CREATE VIEW command",
			"Oracle views can by queried",
			"The SQL 92 standard does not allow the use of the ORDER BY clause in view definitions"
			]
		},
		{
			"Which of the following is NOT an Oracle supported trigger?":[
			"DURING",
			"BEFORE",
			"AFTER",
			"INSTEAD OF"
			]
		},
		{
			"After a table has been created  its structure can be modified using the SQL command ?":[
			"ALTER TABLE TableName",
			"CHANGE TABLE TableName",
			"UPDATE TABLE TableName",
			"MODIFY TABLE TableName"
			]
		},
		{
			"Which of the following is not true about modifying table columns?":[
			"You cannot increase or decrease the number of decimal places.",
			"You can drop a column at any time",
			"You can add a column at any time as long as it is a NULL column",
			"You can increase the number of characters in character columns or the number of digits in numeric columns"
			]
		},
		{
			"Of the three ways to create an Oracle database which one is the easiest and most recommended?":[
			"Using the Oracle Database Configuration Assistant",
			"Using the Oracle supplied database creation procedures",
			"Using the SQL CREATE DATABASE command",
			"None of the above is correct"
			]
		},
		{
			"What Oracle backup and recover file contains user and system data?":[
			"Datafile",
			"Control file",
			"OnLine ReDo file",
			"Offline ReDo file"
			]
		},
		{
			"When using SQL Plus, Oracle commands, column names, table names and all other database elements?":[
			"are case insensitive",
			"are case sensitive",
			"must always be in lower case",
			"must always be in upper case"
			]
		},
		{
			"Which SQL phrase is not supported by Oracle?":[
			"ON UPDATE CASCADE",
			"ON DELETE CASCADE",
			"CREATE SEQUENCE SequenceName",
			"DROP SEQUENCE SequenceName"
			]
		},
		{
			"What is the type of Oracle backup in which all uncommitted changes have been removed from the datafiles?":[
			"Consistent backup",
			"Full backup",
			"Inconsistent backup",
			"Differential backup"
			]
		},
		{
			"The default extension for an Oracle SQL * Plus file is ?":[
			"sql",
			"txt",
			"pls",
			"ora"
			]
		},
		{
			"An Oracle System Change Number ?":[
			"is a value that is incremented whenever database changes are made",
			"is a value that is incremented whenever a dirty read occurs",
			"is incremented whenever a deadlock occurs",
			"is a value that keeps track of explicit locks"
			]
		},
		{
			"To obtain the structure of an Oracle table, the command to use is ?":[
			"DESCRIBE TableName",
			"STRUCTURE TableName",
			"DESCRIBE STRUCTURE TableName",
			"DESC TABLE TableName"
			]
		},
		{
			"To see the contents of the SQL*Plus buffer, type ?":[
			"LIST",
			"CONTENTS",
			"CURRENT",
			"BUFFER"
			]	
		},
		{
			"A data warehouse uses ?":[
			"historical operational data",
			"partial operational data",
			"future operational data",
			"health care data"
			]
		},
		{
			"Metadata enables database designers and users to do all of the following except ?":[
			"sample data",
			"understand what data exist",
			"what the fine distinctions are between similar data items",
			"what the data mean"
			]
		},
		{
			"Duplicate data often results in loss of data integrity because ?":[
			"Both A and B",
			"the data formats may be inconsistent",
			"data values may not agree",
			"Neither A and B"]
		},
		{
			"Legacy data is which of the following ?":[
			"Data contained by a system used prior to the installation of a new system",
			"Data contained in a newly-installed system",
			"Data rejected during the installation of a new system",
			"Data contained in a file system"
			]
		},
		{
			"A database management system (DBMS) is a ?":[
			"software system used to create, maintain, and provide controlled access to a database",
			"hardware system used to create, maintain, and provide controlled access to a database",
			"hardware system used to create, maintain, and provide uncontrolled access to a database",
			"software system used to create, maintain, and provide uncontrolled access to a database"
			]
		},
		{
			"A database application can perform which of the following activities?":[
			"All of the above",
			"Add records",
			"Update records",
			"Read records"
			]
		},
		{
			"An enterprise data model is ?":[
			"a graphical model that shows the high-level entities for an organization.",
			"a graphical model that shows all entities for an organization.",
			"a non-graphical model that shows the high-level entities for an organization.",
			"a non-graphical model that shows the all entities for an organization"
			]
		},
		{
			"Data administrators are responsible for ?":[
			"overall management of data resources in an organization.",
			"physical database design.",
			"writing application programs.",
			"managing technical issues in the database environment"
			]
		},
		{
			"Which of the following types of databases are the most common?":[
			"Department",
			"Enterprise",
			"Workgroup",
			"Personal"
			]
		},
		{
			"Which of the following is true for a relational database?":[
			"Data is represented by tables.",
			"It is difficult to access data.",
			"Complex programs have to be written for simple queries.",
			"It is difficult to update data."
			]
		},
		{
			"Some advantages of the database approach include all, but ?":[
			"program-data dependency.",
			"minimal data redundancy.",
			"improved data consistency",
			"improved data sharing."
			]
		},
		{
			"An enterprise database is which of the following?":[
			"A database designed to support an entire organization",
			"A database designed to support only users external to an organization",
			"A database designed to support a relatively small group",
			"A database designed to support a single PC"
			]
		},
		{
			"Structured data may include which of the following ?":[
			"Dates",
			"Photo image",
			"Video clip",
			"audio clip"
			]
		},
		{
			"An extranet is which of the following?":[
			"The use of Internet protocols with limited access to company data by the company's customers and suppliers.",
			"The use of Internet protocols with unlimited access to company data by the company's customers and suppliers.",
			"The use of Internet protocols with limited access to company data by people within an organization.",
			"The use of Internet protocols with unlimited access to company data by people within an organization."
			]
		},
		{
			"The entity integrity rule states that ?":[
			"no primary key attribute may be null.",
			"no primary key can be composite.",
			"no primary key may be unique.",
			"no primary key may be equal to a value in a foreign key."
			]
		},
		{
			"When mapping a many-to-many unary relationship into a relation which of the following is true?":[
			"Two relations are created.",
			"One relation is created.",
			"Three relation is created.",
			"Four relation is created."
			]
		},
		{
			"If no multivalued attributes exist and no partial dependencies exist in a relation, then the relation is in what normal form?":[
			"Second normal form",
			"First normal form",
			"Third normal form",
			"Fourth normal form"
			]
		},
		{
			"A foreign key is which of the following?":[
			"An attribute that serves as the primary key of another relation",
			"An attribute that serves no purpose",
			"The same thing as a primary key",
			"Any attribute"
			]
		},
		{
			"A transitive dependency is which of the following?":[
			"A functional dependency between two or more nonkey attributes.",
			"A functional dependency between two or more key attributes.",
			"A relation that is in first normal form.",
			"A relation that is in second normal form."
			]
		},
		{
			"When mapping a multivalued attribute into a relation which of the following is true?":[
			"Two relations are created.",
			"One relation is created.",
			"Three relations are created.",
			"Four relations are created."
			]
		},
		{
			"If no multivalued attributes exist in a relation, then the relation is in what normal form?":[
			"First normal form",
			"Second normal form",
			"Third normal form",
			"Fourth normal form"
			]
		},
		{
			"A primary key is which of the following?":[
			"An attribute that uniquely identifies each row",
			"Any attribute",
			"An attribute that uniquely identifies each column",
			"A derived attribute"
			]
		},
		{
			"The relational model consists of ?":[
			"data in the form of tables.",
			"data redundancy.",
			"unorganized data.",
			"operations using non-SQL languages."
			]
		},
		{
			"When mapping a binary many-to-many relationship into a relation which of the following is true?":[
			"Three relations are created.",
			"Two relations are created.",
			"One relation is created.",
			"Four relations are created."
			]
		},
		{
			"A relation has which of the following properties?":[
			"Each relation has a unique name.",
			"Each row is not unique.",
			"Attributes can have the same name within a given table.",
			"The order of the columns is significant."
			]
		},
		{
			"When mapping a ternary relationship with an associative entity into a relation which of the following is true?":[
			"Four relations are created.",
			"One relations are created.",
			"Two relations are created.",
			"Three relations are created."
			]
		},
		{
			"When mapping a regular entity into a relation which of the following is true?":[
			"One relation is created.",
			"Two relations are created.",
			"Four relations are created.",
			"Three relations are created."
			]
		},
		{
			"When mapping a supertype or subtype relationship which of the following is true?":[
			"The supertype primary key is assigned to each subtype.",
			"There is no link between the supertype or subtype entities.",
			"The subtype primary key is assigned to each supertype.",
			"There is no primary key or foreign key relationship between a supertype/subtype."]
		},
		{
			"Relations are ?":[
			"two dimensional tables.",
			"three dimensional tables.",
			"four dimensional tables.",
			"five dimensional tables."]
		}
    ],
    "QUESTIONS_EN_US" : [
      	{
			"The DBMS acts as an interface between what two components of an enterprise class database system?" : [
				"Database application and the database",
				"Data and the database",
				"The user and the database application",
				"Database application and SQL"
				]
		}, 
		{
			"Which of the following products was an early implementation of the relational model developed by E F Codd of IBM?" : [
				"DB2",
				"IDMS",
				"dBase II",
				"R base"
			]
		}, 
		{
			"The following are components of a database except?" : [
				"reports",
				"user data",
				"metadata",
				"indexes"
			]
		}, 
		{
			"An application where only one user accesses the database at a given time is an example of a of n?" : [
				"single user database application",
				"multiuser database application",
				"e commerce database application",
				"data mining database application"
			]
		}, 
		{
			"An online commercial site such as Amazon.com is an example of a of n?" : [
				"e commerce database application",
				"single user database application",
				"multi user database application",
				"data mining database application"
				]
		}, 
		{
			"Which of the following products was the first to implement true relational algebra in a PC DBMS?" : [
				"R base",
				"dBase II",
				"Oracle",
				"IDMS"
				]
		}, 
		{
			"SQL stands for?" : [
				"Structured Query Language",
				"Sequential Query Language",
				"Structured Question Language",
				"Sequential Question Language"
				]
		}, 
		{
			"The following are functions of a DBMS except. " : [
				"creating and processing forms",
				"creating databases",
				"processing data",
				"administrating databases"]
		}, 
		{
			"You can add a row using SQL in a database with which of the following?" : [
				"INSERT",
				"ADD",
				"CREATE",
				"MAKE"]
		}, 
		{
			"The command to remove rows from a table CUSTOMER is ? " : [
				"DELETE FROM CUSTOMER WHERE",
				"REMOVE FROM CUSTOMER",
				"DROP FROM CUSTOMER",
				"UPDATE FROM CUSTOMER"]
		}, 
		{
			"The SQL WHERE clause. " : [
				"limits the row data are returned",
				"limits the column data that are returned",
				"Both A and B are correct",
				"Neither A nor B are correct"]
		},
		{
			"when is the wildcard in a WHERE clause is useful?" : [
				"An exact match is not possible in a SELECT statement",
				"An exact match is necessary in a SELECT statement",
				"An exact match is necessary in a CREATE statement",
				"An exact match is not possible in a CREATE statement"]
		}, 
		{
			"A view is which of the following?" : [
				"A virtual table that can be accessed via SQL commands",
				"A virtual table that cannot be accessed via SQL commands",
				"A base table that can be accessed via SQL commands",
				"A base table that cannot be accessed via SQL commands"]
		},
		{
			"What is the command to eliminate a table from a database is. " : [
				"DROP TABLE CUSTOMER",
				"REMOVE TABLE CUSTOMER",
				"DELETE TABLE CUSTOMER",
				"UPDATE TABLE CUSTOMER"]
		}, 
		{
			"On Update Cascade ensures which of the following?" : [
				"Data Integrity",
				"Normalization",
				"Materialized Views",
				"All of the above"
			]
		}, 
		{
			"Which of the following is valid SQL for an Index?" : [
				"CREATE INDEX ID",
				"CHANGE INDEX ID",
				"ADD INDEX ID",
				"REMOVE INDEX ID"]
		}, 
		{
			"Which of the following is the correct order of keywords for SQL SELECT statements?" : [
				"SELECT  FROM  WHERE",
				"FROM WHERE SELECT",
				"WHERE FROM SELECT",
				"SELECT WHERE FROM"]
		},
		{
			"Which of the following is NOT an Oracle supported trigger?":[
			"DURING",
			"BEFORE",
			"AFTER",
			"INSTEAD OF"
			]
		},
		{
			"After a table has been created  its structure can be modified using the SQL command ?":[
			"ALTER TABLE TableName",
			"CHANGE TABLE TableName",
			"UPDATE TABLE TableName",
			"MODIFY TABLE TableName"
			]
		},
		{
			"Which of the following is not true about modifying table columns?":[
			"You cannot increase or decrease the number of decimal places.",
			"You can drop a column at any time",
			"You can add a column at any time as long as it is a NULL column",
			"You can increase the number of characters in character columns or the number of digits in numeric columns"
			]
		},
		{
			"Of the three ways to create an Oracle database which one is the easiest and most recommended?":[
			"Using the Oracle Database Configuration Assistant",
			"Using the Oracle supplied database creation procedures",
			"Using the SQL CREATE DATABASE command",
			"None of the above is correct"
			]
		},
		{
			"What Oracle backup and recover file contains user and system data?":[
			"Datafile",
			"Control file",
			"OnLine ReDo file",
			"Offline ReDo file"
			]
		},
		{
			"When using SQL Plus, Oracle commands, column names, table names and all other database elements?":[
			"are case insensitive",
			"are case sensitive",
			"must always be in lower case",
			"must always be in upper case"
			]
		},
		{
			"Which SQL phrase is not supported by Oracle?":[
			"ON UPDATE CASCADE",
			"ON DELETE CASCADE",
			"CREATE SEQUENCE SequenceName",
			"DROP SEQUENCE SequenceName"
			]
		},
		{
			"What is the type of Oracle backup in which all uncommitted changes have been removed from the datafiles?":[
			"Consistent backup",
			"Full backup",
			"Inconsistent backup",
			"Differential backup"
			]
		},
		{
			"The default extension for an Oracle SQL * Plus file is ?":[
			"sql",
			"txt",
			"pls",
			"ora"
			]
		},
		{
			"An Oracle System Change Number ?":[
			"is a value that is incremented whenever database changes are made",
			"is a value that is incremented whenever a dirty read occurs",
			"is incremented whenever a deadlock occurs",
			"is a value that keeps track of explicit locks"
			]
		},
		{
			"To obtain the structure of an Oracle table, the command to use is ?":[
			"DESCRIBE TableName",
			"STRUCTURE TableName",
			"DESCRIBE STRUCTURE TableName",
			"DESC TABLE TableName"
			]
		},
		{
			"To see the contents of the SQL*Plus buffer, type ?":[
			"LIST",
			"CONTENTS",
			"CURRENT",
			"BUFFER"
			]	
		},
		{
			"A data warehouse uses ?":[
			"historical operational data",
			"partial operational data",
			"future operational data",
			"health care data"
			]
		},
		{
			"Metadata enables database designers and users to do all of the following except ?":[
			"sample data",
			"understand what data exist",
			"what the fine distinctions are between similar data items",
			"what the data mean"
			]
		},
		{
			"Duplicate data often results in loss of data integrity because ?":[
			"Both A and B",
			"the data formats may be inconsistent",
			"data values may not agree",
			"Neither A and B"]
		},
		{
			"Legacy data is which of the following ?":[
			"Data contained by a system used prior to the installation of a new system",
			"Data contained in a newly-installed system",
			"Data rejected during the installation of a new system",
			"Data contained in a file system"
			]
		},
		{
			"A database management system (DBMS) is a ?":[
			"software system used to create, maintain, and provide controlled access to a database",
			"hardware system used to create, maintain, and provide controlled access to a database",
			"hardware system used to create, maintain, and provide uncontrolled access to a database",
			"software system used to create, maintain, and provide uncontrolled access to a database"
			]
		},
		{
			"A database application can perform which of the following activities?":[
			"All of the above",
			"Add records",
			"Update records",
			"Read records"
			]
		},
		{
			"An enterprise data model is ?":[
			"a graphical model that shows the high-level entities for an organization.",
			"a graphical model that shows all entities for an organization.",
			"a non-graphical model that shows the high-level entities for an organization.",
			"a non-graphical model that shows the all entities for an organization"
			]
		},
		{
			"Data administrators are responsible for ?":[
			"overall management of data resources in an organization.",
			"physical database design.",
			"writing application programs.",
			"managing technical issues in the database environment"
			]
		},
		{
			"Which of the following types of databases are the most common?":[
			"Department",
			"Enterprise",
			"Workgroup",
			"Personal"
			]
		},
		{
			"Which of the following is true for a relational database?":[
			"Data is represented by tables.",
			"It is difficult to access data.",
			"Complex programs have to be written for simple queries.",
			"It is difficult to update data."
			]
		},
		{
			"Some advantages of the database approach include all, but ?":[
			"program-data dependency.",
			"minimal data redundancy.",
			"improved data consistency",
			"improved data sharing."
			]
		},
		{
			"An enterprise database is which of the following?":[
			"A database designed to support an entire organization",
			"A database designed to support only users external to an organization",
			"A database designed to support a relatively small group",
			"A database designed to support a single PC"
			]
		},
		{
			"Structured data may include which of the following ?":[
			"Dates",
			"Photo image",
			"Video clip",
			"audio clip"
			]
		},
		{
			"An extranet is which of the following?":[
			"The use of Internet protocols with limited access to company data by the company's customers and suppliers.",
			"The use of Internet protocols with unlimited access to company data by the company's customers and suppliers.",
			"The use of Internet protocols with limited access to company data by people within an organization.",
			"The use of Internet protocols with unlimited access to company data by people within an organization."
			]
		},
		{
			"The entity integrity rule states that ?":[
			"no primary key attribute may be null.",
			"no primary key can be composite.",
			"no primary key may be unique.",
			"no primary key may be equal to a value in a foreign key."
			]
		},
		{
			"When mapping a many-to-many unary relationship into a relation which of the following is true?":[
			"Two relations are created.",
			"One relation is created.",
			"Three relation is created.",
			"Four relation is created."
			]
		},
		{
			"If no multivalued attributes exist and no partial dependencies exist in a relation, then the relation is in what normal form?":[
			"Second normal form",
			"First normal form",
			"Third normal form",
			"Fourth normal form"
			]
		},
		{
			"A foreign key is which of the following?":[
			"An attribute that serves as the primary key of another relation",
			"An attribute that serves no purpose",
			"The same thing as a primary key",
			"Any attribute"
			]
		},
		{
			"A transitive dependency is which of the following?":[
			"A functional dependency between two or more nonkey attributes.",
			"A functional dependency between two or more key attributes.",
			"A relation that is in first normal form.",
			"A relation that is in second normal form."
			]
		},
		{
			"When mapping a multivalued attribute into a relation which of the following is true?":[
			"Two relations are created.",
			"One relation is created.",
			"Three relations are created.",
			"Four relations are created."
			]
		},
		{
			"If no multivalued attributes exist in a relation, then the relation is in what normal form?":[
			"First normal form",
			"Second normal form",
			"Third normal form",
			"Fourth normal form"
			]
		},
		{
			"A primary key is which of the following?":[
			"An attribute that uniquely identifies each row",
			"Any attribute",
			"An attribute that uniquely identifies each column",
			"A derived attribute"
			]
		},
		{
			"The relational model consists of ?":[
			"data in the form of tables.",
			"data redundancy.",
			"unorganized data.",
			"operations using non-SQL languages."
			]
		},
		{
			"When mapping a binary many-to-many relationship into a relation which of the following is true?":[
			"Three relations are created.",
			"Two relations are created.",
			"One relation is created.",
			"Four relations are created."
			]
		},
		{
			"A relation has which of the following properties?":[
			"Each relation has a unique name.",
			"Each row is not unique.",
			"Attributes can have the same name within a given table.",
			"The order of the columns is significant."
			]
		},
		{
			"When mapping a ternary relationship with an associative entity into a relation which of the following is true?":[
			"Four relations are created.",
			"One relations are created.",
			"Two relations are created.",
			"Three relations are created."
			]
		},
		{
			"When mapping a regular entity into a relation which of the following is true?":[
			"One relation is created.",
			"Two relations are created.",
			"Four relations are created.",
			"Three relations are created."
			]
		},
		{
			"When mapping a supertype or subtype relationship which of the following is true?":[
			"The supertype primary key is assigned to each subtype.",
			"There is no link between the supertype or subtype entities.",
			"The subtype primary key is assigned to each supertype.",
			"There is no primary key or foreign key relationship between a supertype/subtype."]
		},
		{
			"Relations are ?":[
			"two dimensional tables.",
			"three dimensional tables.",
			"four dimensional tables.",
			"five dimensional tables."]
		}
    ],
    "QUESTIONS_DE_DE" : [
        {
            "Rentiere haben ein sehr dickes Fell. Wie viele Haare pro Quadratzentimeter haben sie?": [
                "13,000",
                "1,200",
                "5,000",
                "700",
                "1,000",
                "120,000"
            ]
        },
        {
            "Der Klassiker aus dem Jahr 1964, Rudolph mit der roten Nase, wurde gedreht in. ": [
                "Japan",
                "USA",
                "Finnland",
                "Deutschland",
                "Kanada",
                "Norwegen",
                "Frankreich"
            ]
        },
        {
            "Um die Rentiere des Weihnachtsmanns kümmert sich eine der Weihnachtselfen. Wie heißt sie?": [
                "Wunorse Openslae",
                "Alabaster Snowball",
                "Bushy Evergreen",
                "Pfeffer Minstix"
            ]
        },
        {
            "Wenn alle Rentiere des Weihnachtsmanns Geweihe hätten, während sie seinen Weihnachtsschlitten ziehen, wären sie alle. ": [
                "Weiblich",
                "Männlich",
                "Weiblich und männlich",
                "Kann man nicht sagen"
            ]
        },
        {
            "Was essen Rentiere?": [
                "Flechten",
                "Gras",
                "Blätter",
                "Beeren"
            ]
        },
        {
            "Welche Aussage ist nicht richtig?": [
                "Karibus leben auf allen Kontinenten",
                "Karibus und Rentiere gehören derselben Gattung an ",
                "Karibus sind größer als Rentiere",
                "Rentiere leben in Skandinavien und Russland"
            ]
        },
        {
            "In welchem Jahr kam Rudolph ins Fernsehen?": [
                "1964",
                "1979",
                "2000",
                "1956"
            ]
        },
        {
            "Wer war der Sprecher für Rudolph im klassischen Film aus dem Jahr 1964?": [
                "Billie Mae Richards",
                "Burl Ives",
                "Paul Soles",
                "Lady Gaga"
            ]
        },
        {
            "Welche Handelskette verwendete 1939 die Geschichte von Rudolph mit der roten Nase?": [
                "Montgomery Ward",
                "Sears",
                "Macys",
                "Kmart"
            ]
        },
        {
            "Wie hieß das Rentier des Weihnachtsmanns namens Donner ursprünglich?": [
                "Dunder",
                "Donny",
                "Dweedle",
                "Dreamy"
            ]
        },
        {
            "Wer hat die Geschichte von Rudolph erfunden?": [
                "Robert May",
                "Johnny Marks",
                "Santa",
                "J.K. Rowling"
            ]
        },
        {
            "Wo findest du keine Rentiere?": [
                "Nordpol",
                "Lappland",
                "Korvatunturi-Berge",
                "Finnland"
            ]
        },
        {
            "Warum können die Rentiere des Weihnachtsmanns fliegen?": [
                "Magischer Staub der Rentiere",
                "Fusion",
                "Amanita muscaria",
                "Elfen"
            ]
        },
        {
            "Wieviele Rentierhufe gibt es hier einschließlich Rudolph?": [
                "36",
                "24",
                "16",
                "8"
            ]
        },
        {
            "Der Weihnachtsmann hat nur ein weibliches Rentier. Wie heißt es?": [
                "Blitzen",
                "Clarice",
                "Cupid",
                "Cupid"
            ]
        },
        {
            "Wie war der Name des erzählenden Schneemanns im klassischen Film Rudolph mit der roten Nase aus dem Jahr 1964?": [
                "Sam",
                "Frosty",
                "Burl",
                "Snowy"
            ]
        },
        {
            "Wie hieß der Vater von Rudolph?": [
                "Donner",
                "Dasher",
                "Blixen",
                "Comet"
            ]
        },
        {
            "Wie war der Name des Trainers der Rentierspiele im klassischen Film aus dem Jahr 1964?": [
                "Comet",
                "Blixen",
                "Donner",
                "Dasher"
            ]
        },
        {
            "Wie war im klassichen Film aus 1964 der Name des Hirsches, mit dem sich Rudolph befreundete?": [
                "Fireball",
                "Clarice",
                "Jumper",
                "Vixen"
            ]
        },
        {
            "Wie hat der Vater von Rudolph, Donner, im Film aus dem Jahr 1964 versucht, die Nase von Rudolph zu verbergen?": [
                "Schwarzer Schlamm",
                "Sack",
                "Kissenbezug",
                "Socke"
            ]
        },
        {
            "Was möchte die Misfit-Elfe im Film aus dem Jahr 1964 werden anstatt eine Elfe für den Weihnachtsmann?": [
                "Zahnarzt",
                "Rentier",
                "Spielzeugmacher",
                "Kerzenmacher"
            ]
        },
        {
            "Was war die einzige Schwäche von Bumble im Film aus dem Jahr 1964?": [
                "Konnte nicht schwimmen",
                "War immer hungrig",
                "Zuckerstangen",
                "Schielte"
            ]
        },
        {
            "Was sucht Yukon Cornelius in Wirklichkeit im Film aus dem Jahr 1964?": [
                "Pfefferminz",
                "Gold",
                "Indien",
                "Polarbären"
            ]
        },
        {
            "Warum befindet sich der Zug im Film aus dem Jahr 1964 auf der Insel des fehlerhaften Spielzeugs?": [
                "Viereckige Räder",
                "Keine Dampfmaschine",
                "Farbe stimmt nicht",
                "Pfeift nicht"
            ]
        },
        {
            "Wie lautet der Name des Schachtelmännchens im Film aus dem Jahr 1964?": [
                "Charlie",
                "Sam",
                "Billy",
                "Jack"
            ]
        },
        {
            "Warum hat der Weihnachtsmann im Film aus dem Jahr 1964 Weihnachten beinahe abgesagt?": [
                "Sturm",
                "Kein Schnee",
                "Kein Spielzeug",
                "Die Rentiere waren krank"
            ]
        },
        {
            "Welches tierische Geräusch machte die Elfe im Film aus dem Jahr 1964, um den Bumble abzulenken?": [
                "Oink",
                "Knurr",
                "Wauwau",
                "Miau"
            ]
        },
        {
            "Wie lautet der Name des Goldsuchers im Film aus dem Jahr 1964?": [
                "Yukon Cornelius",
                "Slider Sam",
                "Bumble",
                "Jack"
            ]
        },
        {
            "Wie weit ziehen Rentiere auf ihren Wanderungen?": [
                "4800 km",
                "1100 km",
                "800 km",
                "0 km"
            ]
        },
        {
            "Wie schnell läuft ein Rentier?": [
                "77 km pro Stunde",
                "27 km pro Stunde",
                "30 km pro Stunde",
                "22 km pro Stunde",
                "83 km pro Stunde",
                "65 km pro Stunde"
            ]
        }
    ]
};
