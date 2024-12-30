/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_484305853")

  // add field
  collection.fields.addAt(9, new Field({
    "hidden": false,
    "id": "file3085645662",
    "maxSelect": 1,
    "maxSize": 0,
    "mimeTypes": [],
    "name": "main_photo",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_484305853")

  // remove field
  collection.fields.removeById("file3085645662")

  return app.save(collection)
})
