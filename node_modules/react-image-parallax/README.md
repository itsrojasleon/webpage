# react-image-parallax

[Demo](https://chuson1996.github.io/react-image-parallax)

Install
```
$ npm install --save react-image-parallax
```

Example:
```javascript
<ReactImageParallax scale={1.5}>
    {({y}, onImageLoad) =>
      <img
        style={{
          transform: new CssToMatrix()
            .scale(1.5, 1.5)
            .translate(0, y)
            .getMatrixCSS()
            // I use "css-to-matrix" module to enhance animation performance.
            // You can use normal css inline-style as you like
        }}
        onLoad={onImageLoad}
        src={'https://cdn.pixabay.com/photo/2017/01/21/01/11/the-pink-panter-1996281_1280.jpg'}
        alt="thumbnail"/>
    }
  </ReactImageParallax>
```

* Note: I have to scale up the image as you declare it like the example above in order to make the parallax effect work.