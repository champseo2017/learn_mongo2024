/* 
// แทรกหลายเอกสารพร้อมกันลงในคอลเลกชัน "Collection1"
db.Collection1.insertMany([
  {
    username: "Thaha",
    noOfBlogs: 200,
    tags: ["science", "robotics"]
  },
  {
    username: "Thayebbah",
    noOfBlogs: 500,
    tags: ["cooking", "general knowledge"]
  },
  {
    username: "Thaherah",
    noOfBlogs: 50,
    tags: ["beauty", "arts"]
  }
])

// ผลลัพธ์ของคำสั่ง insertMany จะแสดงสถานะการแทรกและ ID ของเอกสารที่ถูกแทรกทั้งหมด
/*
{
  "acknowledged" : true,
  "insertedIds" : [
    ObjectId("5f33cf74592962df72246ae8"),
    ObjectId("5f33cf74592962df72246ae9"),
    ObjectId("5f33cf74592962df72246aea")
  ]
}
*/
db.Collection1.insertMany([
  {
    username: "Thaha",
    noOfBlogs: 200,
    tags: ["science", "robotics"],
  },
  {
    username: "Thayebbah",
    noOfBlogs: 500,
    tags: ["cooking", "general knowledge"],
  },
  {
    username: "Thaherah",
    noOfBlogs: 50,
    tags: ["beauty", "arts"],
  },
]);
