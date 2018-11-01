function randFloat(min, max) {
  return Math.random() * (max - min) + min;
}

/**
  *Function that constructs a given geometry and returns its Mesh
      vertices, positions: array of THREE.Vector3()
      material: for example new THREE.MeshBasicMaterial()
      rgb: new THREE.Color() type
  */
function constructGeometry(vertices) {
  var geometry = new THREE.Geometry();
  console.log(vertices)
  for (var vertice in vertices)
    geometry.vertices.push(vertices[vertice]);
  var normal = new THREE.Vector3();
  for (var i = 0; i < vertices.length; i += 3){  // vertices / 3  = number of faces
      console.log(i)
      var face = new THREE.Face3( i, i + 1, i + 2, normal);
      geometry.faces.push(face);
  }

  geometry.computeFaceNormals();
  geometry.computeVertexNormals();

  return geometry

}
