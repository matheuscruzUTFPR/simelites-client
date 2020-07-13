import { Component, OnInit, ViewChild } from '@angular/core';
import * as moment from "moment";

import {
    ChartComponent,
    ApexAxisChartSeries,
    ApexChart,
    ApexPlotOptions,
    ApexXAxis,
    ApexDataLabels,
    ApexLegend
} from "ng-apexcharts";

export type ChartOptions = {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    dataLabels: ApexDataLabels;
    legend: ApexLegend;
    xaxis: ApexXAxis;
    plotOptions: ApexPlotOptions;
};

import { IIndividuo } from './individuos'




@Component({
    selector: 'app-individuos',
    templateUrl: './individuos.component.html',
    styleUrls: ['./individuos.component.css']
})
export class IndividuosComponent implements OnInit {
    public individuoObj: IIndividuo;
    selectedValue: string;

    @ViewChild("chart") chart: ChartComponent;
    public chartOptions: Partial<ChartOptions>;

    constructor() {
        this.chartOptions = {
            series: [
                {
                    name: 'Fulano',
                    data: [
                        {
                            x: 'Poder Executivo',
                            y: [
                                new Date('2019-03-05').getTime(),
                                new Date('2019-03-08').getTime()
                            ]
                        },
                        {
                            x: 'Poder Judiciário',
                            y: [
                                new Date('2019-03-02').getTime(),
                                new Date('2019-03-05').getTime()
                            ]
                        },
                        {
                            x: 'Poder Judiciário',
                            y: [
                                new Date('2019-03-05').getTime(),
                                new Date('2019-03-07').getTime()
                            ]
                        },
                        {
                            x: 'Acadêmico',
                            y: [
                                new Date('2019-03-03').getTime(),
                                new Date('2019-03-09').getTime()
                            ]
                        },
                        {
                            x: 'Acadêmico',
                            y: [
                                new Date('2019-03-08').getTime(),
                                new Date('2019-03-11').getTime()
                            ]
                        },
                        {
                            x: 'Funcionalismo Público',
                            y: [
                                new Date('2019-03-11').getTime(),
                                new Date('2019-03-16').getTime()
                            ]
                        },
                        {
                            x: 'Poder Executivo',
                            y: [
                                new Date('2019-03-01').getTime(),
                                new Date('2019-03-03').getTime()
                            ]
                        }
                    ]
                },
                {
                    name: 'Beltrano',
                    data: [
                        {
                            x: 'Poder Executivo',
                            y: [
                                new Date('2019-03-02').getTime(),
                                new Date('2019-03-05').getTime()
                            ]
                        },
                        {
                            x: 'Acadêmico',
                            y: [
                                new Date('2019-03-06').getTime(),
                                new Date('2019-03-16').getTime()
                            ]
                        },
                        {
                            x: 'Poder Judiciário',
                            y: [
                                new Date('2019-03-03').getTime(),
                                new Date('2019-03-07').getTime()
                            ]
                        },
                        {
                            x: 'Poder Legislativo',
                            y: [
                                new Date('2019-03-20').getTime(),
                                new Date('2019-03-22').getTime()
                            ]
                        },
                        {
                            x: 'Poder Executivo',
                            y: [
                                new Date('2019-03-10').getTime(),
                                new Date('2019-03-16').getTime()
                            ]
                        }
                    ]
                },
                {
                    name: 'Ciclano',
                    data: [
                        {
                            x: 'Poder Judiciário',
                            y: [
                                new Date('2019-03-10').getTime(),
                                new Date('2019-03-17').getTime()
                            ]
                        },
                        {
                            x: 'Funcionalismo Público',
                            y: [
                                new Date('2019-03-05').getTime(),
                                new Date('2019-03-09').getTime()
                            ]
                        },
                    ]
                }
            ],
            chart: {
                height: 450,
                type: 'rangeBar'
            },
            plotOptions: {
                bar: {
                    horizontal: true,
                    barHeight: '80%'
                }
            },
            xaxis: {
                type: 'datetime'
            },

            legend: {
                position: 'top',
                horizontalAlign: 'left'
            }
        };
    }

    ngOnInit(): void {
        this.individuoObj = this.individuos[0];

    }

    public individuos: IIndividuo[] = [
        { value: '0', viewValue: 'Fulano', localNascimento: 'Curitiba', dataNascimento: '01/01/2020' },
        { value: '1', viewValue: 'Beltrano', localNascimento: 'Rio de Janeiro', dataNascimento: '02/01/2020' },
        { value: '2', viewValue: 'Ciclanono', localNascimento: 'São Paulo', dataNascimento: '03/01/2020' },
    ];



}
