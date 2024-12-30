/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3757128435")

  // add field
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "bool1793176570",
    "name": "is_main_photo",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "bool"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3757128435")

  // remove field
  collection.fields.removeById("bool1793176570")

  return app.save(collection)
})
