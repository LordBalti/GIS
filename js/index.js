import {cesiumAccessToken, targetLocation, url} from './cesiumConfig.js'
import { field } from './coords.js';
import { createModel } from './cesiumFun.js';

Cesium.Ion.defaultAccessToken = cesiumAccessToken

// Initialize the Cesium Viewer in the HTML element with the `cesiumContainer` ID.
const viewer = new Cesium.Viewer('cesiumContainer');    


field.features.forEach((feature)=>{
    createModel(
        viewer,
        url.treeGlb,
        feature.geometry.coordinates[0],
        feature.geometry.coordinates[1], 
        0
    ); 
} );


// Fly the camera to San Francisco at the given longitude, latitude, and height.
viewer.camera.flyTo(targetLocation);

/*
// Add Cesium OSM Buildings, a global 3D buildings layer.
const buildingTileset = await Cesium.createOsmBuildingsAsync();
viewer.scene.primitives.add(buildingTileset);

*/