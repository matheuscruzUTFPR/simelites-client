import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { map } from "rxjs/operators";

import { HomeService } from './home.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    providers: [HomeService]
})
export class HomeComponent implements OnInit {
    
    constructor(private homeService: HomeService) { }

    public home;

    // testaBDAmazon(): void {
    //     this.homeService.getHome()
    //         .subscribe(home => this.home = home);
    //     console.log(this.home)
    // }

    ngOnInit(): void {    }

}
