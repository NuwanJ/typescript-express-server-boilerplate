https://thronesapi.com/swagger/index.html?urls.primaryName=Game%20of%20Thrones%20API%20v2

curl -X 'GET' \
 'https://thronesapi.com/api/v2/Characters' \
 -H 'accept: application/json'

curl -X 'GET' \
 'https://thronesapi.com/api/v2/Continents' \
 -H 'accept: application/json'

Create a new API by combining the 2 listing API (upstream API).  
If the user_id is even (eg 0,2,4,8 etc), the continents will be id 0.  
If the user_id is odd (eg 1,7,11,13 etc), the continent will be id 1.  
If the user_id is divisible by 3 OR 5, the continent id will be 2.
If the user_id divisible by 3 AND 5, the continent id will be 3

    {
        "id": 0,
        "name": "Westeros"
    },
    {
        "id": 1,
        "name": "Essos"
    },
    {
        "id": 2,
        "name": "Sothoryos"
    },
    {
        "id": 3,
        "name": "Ulthos"
    }

Eg http://localhost:8000/character-continent/list
[
{
"id": 0,
"firstName": "Daenerys",
"lastName": "Targaryen",
"fullName": "Daenerys Targaryen",
"title": "Mother of Dragons",
"family": "House Targaryen",
"image": "daenerys.jpg",
"imageUrl": "https://thronesapi.com/assets/images/daenerys.jpg",
“continentName”: “Westeros”
},

Task 2:
Add filter title and/or family
Eg
http://localhost:8000/character-continent/list?title=king
http://localhost:8000/character-continent/list?title=king&family=tagaryen
Samuel Chandra1:14 PM

Task 3:
Add pagination (5 per page, 10 per page, 25 per page)
Eg
http://localhost:8000/character-continent/list?title=king&page=1&size=10
