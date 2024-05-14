// Insert ข้อมูลหลายรายการลงในคอลเลกชัน "records"
db.records.insertMany([
  { Name: "Aaliya A", City: "Sydney" },
  { Name: "Naseem A", City: "New Delhi" },
]);

// ผลลัพธ์จะแสดงสถานะการ insert และ ID ของเอกสารที่ถูกเพิ่ม
/*
  {
    "acknowledged" : true,
    "insertedIds" : [
      ObjectId("5f33cfac592962df72246aeb"),
      ObjectId("5f33cfac592962df72246aec")
    ]
  }
  */

// ดึงข้อมูลจากคอลเลกชัน "records" โดยใช้คำสั่ง find() ธรรมดา
db.records.find();

// ผลลัพธ์จะแสดงเอกสารที่ถูกดึงมาในรูปแบบที่ไม่ได้จัดรูปแบบ
/*
  {
    "_id" : ObjectId("5f33cfac592962df72246aeb"),
    "Name" : "Aaliya A",
    "City" : "Sydney"
  }
  {
    "_id" : ObjectId("5f33cfac592962df72246aec"),
    "Name" : "Naseem A",
    "City" : "New Delhi"
  }
  */

// ดึงข้อมูลจากคอลเลกชัน "records" โดยใช้คำสั่ง find() ร่วมกับเมธอด pretty()
db.Collection1.find().pretty();

// ผลลัพธ์จะแสดงเอกสารที่ถูกดึงมาในรูปแบบที่จัดรูปแบบอย่างสวยงาม
/*
  {
    "_id" : ObjectId("5f33cfac592962df72246aeb"),
    "Name" : "Aaliya A",
    "City" : "Sydney"
  }
  {
    "_id" : ObjectId("5f33cfac592962df72246aec"),
    "Name" : "Naseem A",
    "City" : "New Delhi"
  }
  */
