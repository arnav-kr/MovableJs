# MovableJs
Awesome Javascript library to make html elements movable on the go!

See [Live Demo](https://codepen.io/arnav-kr/pen/eYzwQGX).


# Getting The Library

You Can Use these Scripts to include `movable.js` or `movable.min.js` in your website.

```javascript
<script src="https://rawcdn.githack.com/arnav-kr/MovableJs/main/dist/movable.js"></script>
<script src="https://rawcdn.githack.com/arnav-kr/MovableJs/main/dist/movable.min.js"></script>
```

# How To Use

Define a `Movable` object with id of HTML element as its Parameter, store it in a variable. Use `init();` method to initialize. And Done!

HTML:
```html
<div id="myDiv"> I am a Movable </div>
```
JS:
```javascript
var movable = new Movable("myDiv");
//use init(); to initilize
movable.init();
```
# More Options

```javascript
movable.unInit();
//Use unInit(); method to Uninitilize the Movable
```
|Methods|Uses|
|-----|------|
|`init();`|Used to initilize the `Movable`.|
|`unInit();`|Used to uninitilize the `Movable`.|
