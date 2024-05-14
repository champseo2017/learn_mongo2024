// เชื่อมต่อกับ MongoDB
use moviesDB

// สร้างคอลเลกชัน "movies" และเพิ่มข้อมูลภาพยนตร์
db.movies.insertMany([
  {
    "title": "Rocky",
    "releaseDate": new Date("Dec 3, 1976"),
    "genre": "Action",
    "about": "A small-time boxer gets a supremely rare chance to fight a heavy-weight champion in a bout in which he strives to go the distance for his self-respect.",
    "countries": ["USA"],
    "cast": ["Sylvester Stallone", "Talia Shire", "Burt Young"],
    "writers": ["Sylvester Stallone"],
    "directors": ["John G. Avildsen"]
  },
  {
    "title": "Rambo 4",
    "releaseDate": new Date("Jan 25, 2008"),
    "genre": "Action",
    "about": "In Thailand, John Rambo joins a group of mercenaries to venture into war-torn Burma, and rescue a group of Christian aid workers who were kidnapped by the ruthless local infantry unit.",
    "countries": ["USA"],
    "cast": ["Sylvester Stallone", "Julie Benz"]
  }
])

// ตรวจสอบว่าเอกสารถูกเพิ่มเข้าไปโดยการดึงเอกสารออกมา
db.movies.find().pretty()

// สร้างคอลเลกชัน "awards" และเพิ่มข้อมูลรางวัล
db.awards.insertMany([
  {
    "title": "Oscars",
    "year": "1976",
    "category": "Best Film",
    "nominees": ["Rocky", "All The President's Men", "Bound For Glory", "Network", "Taxi Driver"],
    "winners": [
      {
        "movie": "Rocky"
      }
    ]
  },
  {
    "title": "Oscars",
    "year": "1976",
    "category": "Actor In A Leading Role",
    "nominees": ["PETER FINCH", "ROBERT DE NIRO", "GIANCARLO GIANNINI", "WILLIAM HOLDEN", "SYLVESTER STALLONE"],
    "winners": [
      {
        "actor": "PETER FINCH",
        "movie": "Network"
      }
    ]
  }
])

// ตรวจสอบว่าการเพิ่มข้อมูลของคุณได้บันทึกเอกสารลงในคอลเลกชันตามที่ต้องการโดยการดึงเอกสารออกมา
db.awards.find().pretty()