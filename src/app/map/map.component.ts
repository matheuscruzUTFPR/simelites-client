import { Component, OnInit } from '@angular/core';
import { Input, Output, SimpleChanges, EventEmitter } from '@angular/core';
import { defaults as defaultControls } from 'ol/control';

import Map from 'ol/Map';
import View from 'ol/View';
import ZoomToExtent from 'ol/control/ZoomToExtent';
import { MultiPoint, Point } from 'ol/geom';
import OSM from 'ol/source/OSM';
import { Circle as CircleStyle, Fill, Stroke, Style } from 'ol/style';
import { getVectorContext } from 'ol/render';
import { toStringXY } from 'ol/coordinate';

import { GPX, GeoJSON, IGC, KML, TopoJSON } from 'ol/format';
import { defaults as defaultInteractions, DragAndDrop } from 'ol/interaction';
import { Tile as TileLayer, Vector as VectorLayer } from 'ol/layer';
import { XYZ, Vector as VectorSource } from 'ol/source';
import { fromLonLat } from 'ol/proj';
import { bbox } from 'ol/loadingstrategy';
import { Vector } from 'ol/source';

@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.css']
})

export class MapComponent implements OnInit {

    map: Map;
    coord = [-49.2749, -25.4287];

    constructor() { }

    ngOnInit(): void {


    }

    ngAfterViewInit() {

        this.map = new Map({
            target: 'map',
            layers: [
                new TileLayer({

                    source: new OSM()
                })
            ],
            view: new View({
                //center: [700000, 700000],
                center: fromLonLat(this.coord, 'EPSG:3857'),
                zoom: 12
            })
        });
        var vectorSource = new VectorSource();
        const source = vectorSource;
        const layer = new VectorLayer({
            source: source
        });
        this.map.addLayer(layer);
        this.map.addInteraction(new DragAndDrop({
            source: source,
            formatConstructors: [GeoJSON]
        }));
    }




}
