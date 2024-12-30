/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3757128435")

  // update collection data
  unmarshal({
    "name": "photo"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3757128435")

  // update collection data
  unmarshal({
    "name": "project_photo"
  }, collection)

  return app.save(collection)
})
