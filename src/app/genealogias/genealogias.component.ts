import { Component, OnInit } from '@angular/core';
const chartData = [
    {
        label: "Saudi",
        value: 260
    },
    {
        label: "Canada",
        value: 180
    },
    {
        label: "Iran",
        value: 140
    },
    {
        label: "Russia",
        value: "115"
    },
    {
        label: "UAE",
        value: "100"
    },
    {
        label: "US",
        value: "30"
    },
    {
        label: "China",
        value: "30"
    }
];

const data = {
    chart: {
        caption: "Flare Data Store Segregation",
        subcaption: "Click on the segments to Drill-down",
        showPlotBorder: "1",
        baseFontColor: "ffffff",
        tooltipcolor: "000000",
        innerRadius: "10",
        theme: "fusion",
        type: "sunburst",
        "plotToolText": "Nome: $label <br>"
    },
    data: [
        {
            id: 1,
            name: "Fulano",
            value: 1,

        },
        {
            id: 2,
            parent: 1,
            name: "Ciclano",
            value: 1,
            tooltext: "Nascido em 03/01/1980"

        },
        {
            id: 3,
            parent: 2,
            name: "Tristano",
            value: 1,
            tooltext: "Nascido em 01/01/1980"

        },
        {
            id: 4,
            parent: 2,
            name: "Fula2",
            value: 1,
            tooltext: "Nascido em 09/09/1909{br}Nome: Fula2"

        },
        {
            id: 5,
            parent: 2,
            name: "Fula3",
            value: 1,
            tooltext: "Nascido em: 01/08/1950{br}Nome: Fula3"

        },
        {
            id: 6,
            parent: 2,
            name: "tris3",
            value: 1,
            tooltext: "Nascido em 08/01/1940"

        },
        {
            id: 11,
            parent: 5,
            name: "tris33",
            value: 1,
            tooltext: "Nascido em 01/01/1900"

        },
        {
            id: 7,
            parent: 1,
            name: "fulan3",
            value: 1,
            tooltext: "Nascido em 01/01/1900"

        },
        {
            id: 8,
            parent: 7,
            name: "tristano4",
            value: 1,
            tooltext: "Nascido em 01/01/1900"

        },
        {
            id: 9,
            parent: 8,
            name: "tristano6",
            value: 1,
            tooltext: "Nascido em 01/01/1900"

        },
        {
            id: 10,
            parent: 1,
            name: "blabla",
            value: 1,
            tooltext: "Nascido em 01/01/1900"
        }
    ]
};

@Component({
    selector: 'app-genealogias',
    templateUrl: './genealogias.component.html',
    styleUrls: ['./genealogias.component.css']
})
export class GenealogiasComponent implements OnInit {

    width = "800";
    height = "400";
    type = "sunburst"
    dataFormat = "json";
    dataSource = data;

    constructor() {

    }
    ngOnInit(): void {

    }

}
