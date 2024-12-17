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
    $unwind: {
      path: "$relatedDocuments",
      preserveNullAndEmptyArrays: true //This option solves the issue
    }
  },
  {
    $project: {
      _id: 1,
      relatedData: { $ifNull: [ "$relatedDocuments.someField", null ] },
    }
  }
];

const result = await collectionA.aggregate(pipeline).toArray();

console.log(result);
```