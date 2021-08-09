# IDEA
Not 100% sure how to structure it. All should be in a database at some point, but for now I'll just have separate react components for each blogpost. The reason being speed of delivery, I don't want to fiddle around with creating a web editor for writing blogposts, store them in mongodb, and then display them here. 

## Pros for Database
* Easier to backup the content of the site to be used elsewhere
* No need to rebuild/upload new docker image for each blog entry

## Cons for Database
* More time to implement (Complexity)
* More difficult to customize layout for each blogpost 