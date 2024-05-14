/* 
// ดึงเอกสารทั้งหมดจากคอลเลกชัน "Collection1"
db.Collection1.find()

// ผลลัพธ์จะแสดงเอกสารทั้งหมดในคอลเลกชัน
/*
{
  "_id" : ObjectId("5f33cf74592962df72246ae8"),
  "username" : "Thaha",
  "noOfBlogs" : 200,
  "tags" : ["science", "robotics"]
}
{
  "_id" : ObjectId("5f33cf74592962df72246ae9"),
  "username" : "Thayebbah", 
  "noOfBlogs" : 500,
  "tags" : ["cooking", "general knowledge"]
}
{
  "_id" : ObjectId("5f33cf74592962df72246aea"),
  "username" : "Thaherah",
  "noOfBlogs" : 50,
  "tags" : ["beauty", "arts"]
}
*/

// ดึงเอกสารที่มี username เป็น "Thaha" จากคอลเลกชัน "Collection1"
db.Collection1.find({ username: "Thaha" });

// ผลลัพธ์จะแสดงเฉพาะเอกสารที่ตรงกับเงื่อนไข
/*
{
  "_id" : ObjectId("5f33cf74592962df72246ae8"),
  "username" : "Thaha",
  "noOfBlogs" : 200,
  "tags" : ["science", "robotics"]
}
*/

// ดึงเฉพาะ username และ noOfBlogs จากเอกสารในคอลเลกชัน "Collection1"
db.Collection1.find({}, { username: 1, noOfBlogs: 1, _id: 0 });

// ผลลัพธ์จะแสดงเฉพาะแอตทริบิวต์ที่ระบุใน projection
/*
{ "username" : "Thaha", "noOfBlogs" : 200 }
{ "username" : "Thayebbah", "noOfBlogs" : 500 }
{ "username" : "Thaherah", "noOfBlogs" : 50 }
*/
