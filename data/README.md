# Data Structure of Recycling Points Dataset

A first example is:

| id  | description                           | object\_type         | name                                    | address | hours | shop\_type                           | telephone | recycling\_type  | location\_desc  |
| --- | ------------------------------------- | -------------------- | --------------------------------------- | ------- | ----- | ------------------------------------ | --------- | ---------------- | --------------- |
| -   | additional info like name or provider | {container, givebox} | -                                       | -       | -     | {unverpacktladen, second hand store} | -         | {glass, clothes} | navigation info |
| 836 | Malteser Hilfsdienst                  | container            | https://www.malteser.de/altkleider.html | false   | false | false                                | false     | false            | clothing        | false |

```
{
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "properties": {
                "id": 1,
                "address": "Westerheide",
                "location_desc": "vor Schule",
                "recycling_type": "glass",
                "object_type": "container"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    7.676,
                    52.0285
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "id": 4,
                "address": "Kristiansandstraße",
                "location_desc": "Hst. Rektoratsweg (Richtung Grevener Straße)",
                "recycling_type": "individual waste",
                "object_type": "waste basket",
                "hours": "all day, every day",
                "shop_type": false,
                "telephone": false
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    7.6081,
                    51.9974
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "id": 1,
                "address": "FALSE",
                "location_desc": "FALSE",
                "recycling_type": "clothes",
                "object_type": "container",
                "name": "FALSE",
                "hours": "all day, every day",
                "shop_type": false,
                "telephone": false
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    7.5496,
                    51.9999
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "id": 1,
                "address": "FALSE",
                "location_desc": "Skagerrakstraße gegenüber Ska-Treff, Skagerrakstraße",
                "recycling_type": "FALSE",
                "object_type": "Givebox",
                "description": "FALSE",
                "website": "https://hvghirten.jimdofree.com/-/sozialraumaktivit%C3%A4ten/ska-treff/",
                "name": "Danziger Freiheit",
                "hours": "immer",
                "shop_type": false,
                "telephone": false
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    7.6583,
                    51.967
                ]
            }
        }
    ]
}
```

* if `site\_type` is `recycling`, entry is not a shop and therefore has no `shop\_type`
* in general, a lot of attributes are not available for all datasets
* display of attributes should therefore be highly dynamic: _if_ there's a location description, telephone number, address these attributes should be shown. _If_ the `site\_type` is `recycling`, `recycling\_type` should be shown, _if_ `site\_type` is `shop`, `shop\_type` should be shown.


### TODO

* handling of duplicates, e.g. a recycling yard that has an entry from the yard dataset and also from the "glass" dataset`
