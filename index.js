/* 
// แทรกเอกสารเดียวลงในคอลเลกชัน "blogs"
db.Collection1.insertOne({
  username: "Zakariya",
  noOfBlogs: 100,
  tags: ["science", "fiction"]
})

// ผลลัพธ์ของคำสั่ง insertOne จะแสดงสถานะการแทรกและ ID ของเอกสารที่ถูกแทรก
/*
{
  "acknowledged" : true,
  "insertedId" : ObjectId("5ea3a1561df5c3fd4f752636")
}
*/
