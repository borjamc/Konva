var stage = new Konva.Stage({
  container: 'miCanvas',
  width: 300,
  height: 300
});

var layer = new Konva.Layer();
stage.add(layer);
//stripes are 3 to 9 pixels wide, alteranting between different colors
function reDibuja() {
  var background = new Konva.Rect({
    x: 0,
    y: 0,
    width: 300,
    height: 300,
    fill: 'black'
  });
  layer.add(background);
  //random width between 3 and 9
  var anchoLinea = Math.round(Math.random() * 6 + 3);
  var linea;
  for (var i = 0; i <= 400; i = i + anchoLinea * 3) {
    // stripes will appear across the page
    linea = new Konva.Rect({
      x: 0,
      y: i,
      width: 300,
      height: anchoLinea,
      fill: colorRandom()
    })
    layer.add(linea);
  }

  function colorRandom() {
    // hues can be from 0 to 360
    var color = Math.round(Math.random() * 360);
    return 'hsl(' + color + ', 100%, 50%)';
  }

  stage.draw();
}
document.getElementById('draw').addEventListener('click', reDibuja)
reDibuja();
