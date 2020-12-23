# Data Structure of Recycling Points Dataset

A first example is:

| id  | object\_type                  | recycling\_type            | shop\_type                                                                | description     | name | address | location\_desc    | hours | telephone |
| --- | ----------------------------- | -------------------------- | ------------------------------------------------------------------------- | --------------- | ---- | ------- | ----------------- | ----- | --------- |
| -   | {container, shop, givebox...} | {glass, clothes, paper...} | given when `object\_type` is `shop`, {unverpacktladen, second hand store} | additional info | -    | -       | nagigational help | -     | -         |


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
                "object_type": "container",
                "description": "FALSE",
                "website": "FALSE",
                "name": "FALSE",
                "hours": "FALSE",
                "shop_type": "FALSE",
                "telephone": "FALSE"
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
                "id": 2,
                "address": "Kristiansandstraße",
                "location_desc": "Hst. Rektoratsweg (Richtung Grevener Straße)",
                "recycling_type": "individual waste",
                "object_type": "waste basket",
                "description": "FALSE",
                "website": "FALSE",
                "name": "FALSE",
                "hours": "all day, every day",
                "shop_type": "FALSE",
                "telephone": "FALSE"
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
                "id": 3,
                "address": "FALSE",
                "location_desc": "FALSE",
                "recycling_type": "clothes",
                "object_type": "container",
                "description": "FALSE",
                "website": "FALSE",
                "name": "FALSE",
                "hours": "all day, every day",
                "shop_type": "FALSE",
                "telephone": "FALSE"
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
                "id": 4,
                "address": "FALSE",
                "location_desc": "Skagerrakstraße gegenüber Ska-Treff, Skagerrakstraße",
                "recycling_type": "FALSE",
                "object_type": "Givebox",
                "description": "FALSE",
                "website": "https://hvghirten.jimdofree.com/-/sozialraumaktivit%C3%A4ten/ska-treff/",
                "name": "Danziger Freiheit",
                "hours": "immer",
                "shop_type": "FALSE",
                "telephone": "FALSE"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    7.6583,
                    51.967
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "id": 5,
                "address": "FALSE",
                "location_desc": "Mauritz-Lindenweg 61, 48145 Münster",
                "recycling_type": "FALSE",
                "object_type": "Givebox",
                "description": "FALSE",
                "website": "https://www.gutes-morgen.ms/de/givebox/",
                "name": "Haus am Guten Hirten",
                "hours": "immer",
                "shop_type": "FALSE",
                "telephone": "FALSE"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    7.6563,
                    51.9623
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "id": 6,
                "address": "FALSE",
                "location_desc": "Rosenplatz im Kuhviertel",
                "recycling_type": "FALSE",
                "object_type": "Öffentliches Bücherregal",
                "description": "FALSE",
                "website": "http://wiki.muenster.org/index.php/Öffentliche_Bücherregale_in_Münster",
                "name": "Rosenplatz",
                "hours": "immer",
                "shop_type": "FALSE",
                "telephone": "FALSE"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    7.6215,
                    51.9653
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "id": 7,
                "address": "Warendorferstr. 63\n48145 Münster",
                "location_desc": "FALSE",
                "recycling_type": "",
                "object_type": "store",
                "description": "Lebensmittel",
                "website": "https://natuerlich-unverpackt.de/",
                "name": "Natürlich Unverpackt",
                "hours": "Mo. - Fr.: 09:00 - 19:00, Sa.: 09:00 - 15:00",
                "shop_type": "Unverpacktladen",
                "telephone": "0251 / 39 77 97 20"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    7.6446,
                    51.9626
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "id": 8,
                "address": "Schlossplatz 1, 48149 Münster",
                "location_desc": "FALSE",
                "recycling_type": "",
                "object_type": "sharing",
                "description": "Frischeprodukte",
                "website": "https://www.asta.ms/projektstellen/projektstelle-foodsharing",
                "name": "Fairteiler AstA Münster",
                "hours": "Mo. - Do.: 09:00 - 16:00, Fr.: 09:00 - 14:00",
                "shop_type": "Food Sharing",
                "telephone": "0251 / 83 22 28 0"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    7.6158,
                    51.9631
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "id": 9,
                "address": "Hafenstraße 43, 48153 Münster",
                "location_desc": "FALSE",
                "recycling_type": "",
                "object_type": "repair",
                "description": "-",
                "website": "https://repaircafe-muenster.de/",
                "name": "Repair Café",
                "hours": "Zur Zeit nich geöffnet",
                "shop_type": "Reparaturen",
                "telephone": "-"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    7.632,
                    51.954
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "id": 10,
                "address": "Eulerstraße 8, 48155 Münster",
                "location_desc": "FALSE",
                "recycling_type": "clothes, electronics, green waste, glass, plastics, wood, metal, paper, problematic waste, packaging waste, furniture, bicycle batteries",
                "object_type": "recycling",
                "description": "-",
                "website": "https://awm.stadt-muenster.de/wohin-mit-dem-abfall/recyclinghoefe.html",
                "name": "AWM Recyclinghof Eulerstraße",
                "hours": "Mo. - Fr.: 08:30 - 19:00, Sa.: 09:30 - 19:00",
                "shop_type": "Recyclinghof",
                "telephone": "0251 / 60 52 53"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    7.6416,
                    51.9389
                ]
            }
        }
    ]
}
```

Some explanation, hopefully to clear things up.

* if an attribute value is not available, a `FALSE` string is given.
* if `site\_type` is `recycling`, entry is not a shop and therefore has no `shop\_type`
* in general, a lot of attributes are not available for all datasets
* display of attributes should therefore be highly dynamic: _if_ there's a location description, telephone number, address these attributes should be shown. _If_ the `site\_type` is `recycling`, `recycling\_type` should be shown, _if_ `site\_type` is `shop`, `shop\_type` should be shown.


### TODO

* handling of duplicates, e.g. a recycling yard that has an entry from the yard dataset and also from the "glass" dataset`
* Handling of `recycling\_type`: This is only important for the recycling yards. Currently this is given as comma-seperated `string` of all the recycling types.
