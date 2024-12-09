/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2869362744")

  // remove field
  collection.fields.removeById("number1384568619")

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2869362744")

  // add field
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "number1384568619",
    "max": null,
    "min": null,
    "name": "sequence",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  return app.save(collection)
})
