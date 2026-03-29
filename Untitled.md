````markdown
```datacards
TABLE author, rating, genre, cover FROM #dailies 
SORT rating DESC
WHERE rating >= 4

// Settings
preset: portrait
columns: 8
imageProperty: cover
properties: [author, rating, genre]
```
````
