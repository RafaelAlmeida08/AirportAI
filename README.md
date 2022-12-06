# AirportAI exercise

Api developed for the airportAI selection process

> ## Requirements?

* MongoDB : 6^
* Node: 16^

> ## How to use it?

# 1st step : Clone the project and use yarn or npm install to download dependencies
# 2nd step : Set Bearer token in your request program to:

eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiQWlycG9ydEFJIiwiaWF0IjoxNjcwMjg3MzIyLCJleHAiOjE3MDE4MjMzMjJ9.V7V28a6Jp6OkynHXdQoEg0fBosv5FqOTUMO-xESbunk

# 3rd step :
* Post to "localhost:3333/products" to create a losted item with the following json body request:
{
  "name": "item_name",
	"color": "item_color",
	"description": "Eg. I lost my red bag",
	"lostTime": "2021-11-01T10:30:00Z"
}

* Get to "/products/<item_id>" to get an item by id
* Get to "/products/?description=<item_description>" to get an item by description
* Delete to "/products/<item_id>" to delete an item by id


> ## Design Patterns

* Factory
* Adapter
* Decorator
* Proxy
* Dependency Injection

> ## Methodologies and Designs

* TDD
* Clean Architecture
* DDD
* Conventional Commits


## Rafael Almeida - Software Engineer :rocket:	:computer:
