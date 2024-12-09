/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_508158286")

  // remove field
  collection.fields.removeById("file701358898")

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_508158286")

  // add field
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "file701358898",
    "maxSelect": 1,
    "maxSize": 0,
    "mimeTypes": [],
    "name": "feature_image",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  return app.save(collection)
})
