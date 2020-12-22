# Data Structure of Recycling Points Dataset

Much needs to be done, however, a very first example is:

|id |description |object\_type |name |address |hours |shop\_type |telephone |site\_type |recycling\_type |location\_desc |
|---|---|---|---|---|---|---|---|---|---|---|
| - |additional info like name or provider |{container, givebox} | - | - | - |{unverpacktladen, second hand store} | - |{shop, sharing, recycling} |{glass, clothes} |navigation info |
|836 |Malteser Hilfsdienst |container |https://www.malteser.de/altkleider.html |false |false |false |false |false |recycling |clothing |false |

```
{ "type":"FeatureCollection",
	"features": [
		{"type":"Feature","properties": {
			"id":"node/5051507836",
			"description":"Malteser Hilfsdienst",
			"object_type":"container",
			"website":"https://www.malteser.de/altkleider.html",
			"name":false,
			"address":false,
			"hours":false,
			"shop_type":false,
			"telephone":false,
			"site_type":"recycling",
			"recycling_type":"clothing",
			"location_desc":false},
			"geometry":{
				"type":"Point",
				"coordinates":[7.6099,51.9883]
				}
			}
		]
}
```

* if `site\_type` is `recycling`, entry is not a shop and therefore has no `shop\_type`
* in general, a lot of attributes are not available for all datasets
* display of attributes should therefore be highly dynamic: _if_ there's a location description, telephone number, address these attributes should be shown. _If_ the `site\_type` is `recycling`, `recycling\_type` should be shown, _if_ `site\_type` is `shop`, `shop\_type` should be shown.


### TODO

* coordinate `object\_type` and `site\_type`, might be duplicate
* handling of duplicates, e.g. a recycling yard that has an entry from the yard dataset and also from the "glass" dataset`
