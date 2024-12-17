```javascript
const pipeline = [
  {
    $lookup: {
      from: "collectionB",
      localField: "_id",
      foreignField: "foreignKey",
      as: "relatedDocuments",
    },
  },
  {
    $unwind: "$relatedDocuments",
  },
  {
    $project: {
      _id: 1,
      relatedData: "$relatedDocuments.someField",
    }
  }
];

const result = await collectionA.aggregate(pipeline).toArray();

console.log(result);
```