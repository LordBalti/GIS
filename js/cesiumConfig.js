const cesiumAccessToken  = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIxMzEwYmIzZS0wNzE3LTQ1OTctODAxOS03N2JhMjYxYmRkOTMiLCJpZCI6MTYyNDA1LCJpYXQiOjE2OTI4ODk5NzV9.ji2puR2AUwsq5VAe5iUSrSzFeU5FsIvENxKlA8Vz6D4'
let lat
let lon

 /*
if (navigator.geolocation){

navigator.geolocation.getCurrentPosition(
    (e) => {
        console.log(e)
        lat = e.coords.latitude
        lon = e.coords.longitude
    }
) 

}
*/

const targetLocation = {
    destination: Cesium.Cartesian3.fromDegrees(11.496774839431872, 3.869038915369335, 10),
    orientation: {
        heading: Cesium.Math.toRadians(0.0),
        pitch: Cesium.Math.toRadians(-15),
    }
}

const url = {
    'treeGlb': './glbDatad/tree.glb'
}

export {cesiumAccessToken, url, targetLocation};
