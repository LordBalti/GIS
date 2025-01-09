const field = {
    type: "FeatureCollection",
    name: "trees",
    crs: { 
        type: "name", 
        properties: { name: "urn:ogc:def:crs:OGC:1.3:CRS84" } 
    },
    features: [
    { 
        type: "Feature", 
        properties : { id: 1 }, 
        geometry : { 
            type: "Point", 
            coordinates: [ 11.496774839431872, 3.869038915369335 ]    
        } 
    },
    { 
        type: "Feature", 
        properties: { id: 2 }, 
        geometry: { 
            type: "Point", 
            coordinates: [ 11.496645790961001, 3.869381550855794 ] 
        } 
    },
    { 
        type: "Feature", 
        properties: { id: 3 }, 
        geometry: { 
            type: "Point", 
            coordinates: [ 11.496741777426941, 3.869551804462125 ] 
        } 
    },
    {
        type: "Feature", 
        properties: { id: 3 }, 
        geometry: { 
            type: "Point", 
            coordinates: [ 11.4955046185326, 3.869826338330252 ] 
        } 
    },
    { 
        type: "Feature", 
        properties: { id: 4 }, 
        geometry: { 
            type: "Point", 
            coordinates : [ 11.495788311865265, 3.870317945267121 ] 
        } 
    },
    { 
        type: "Feature", 
        properties: { id: 5 }, 
        geometry: { 
            type: "Point", 
            coordinates: [ 11.495884298331205, 3.870211536863425 ] 
        } 
    },
    { 
        type: "Feature", 
        properties: { id: 6 }, 
        geometry: { type: "Point", 
            coordinates: [ 11.495854435875135, 3.870077462255732 ] 
        } 
    },
    { 
        type: "Feature", 
        properties: { id: 7 }, 
        geometry: { 
            type: "Point", 
            coordinates: [ 11.49552594885836, 3.870047667895586 ] 
        } 
    },
    
    ],
};
    
export {field}
    