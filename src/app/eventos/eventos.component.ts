import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { MatAutocompleteSelectedEvent, MatAutocomplete } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { ElementRef, ViewChild } from '@angular/core';

@Component({
    selector: 'app-eventos',
    templateUrl: './eventos.component.html',
    styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {
    isLinear = true;
    firstFormGroup: FormGroup;
    secondFormGroup: FormGroup;
    thirdFormGroup: FormGroup;

    camposSociais = new FormControl();
    campoSocialLista: string[] = ['Família', 'Político', 'Empresa', 'Religião'];

    individuos = new FormControl();
    individuoLista: string[] = ['Fulano', 'Ciclano', 'Tristano', 'Beltrano'];

    firstCtrlRotulo = new FormControl();
    options: string[] = ['Nascimento', 'Óbito', 'Casamento', 'Eleito'];
    filteredOptions: Observable<string[]>;

    visible = true;
    selectable = true;
    removable = true;
    separatorKeysCodes: number[] = [ENTER, COMMA];

    @ViewChild('fruitInput') fruitInput: ElementRef<HTMLInputElement>;
    @ViewChild('auto') matAutocomplete: MatAutocomplete;

    constructor(private _formBuilder: FormBuilder) {
    }

    ngOnInit() {
        this.filteredOptions = this.firstCtrlRotulo.valueChanges
            .pipe(
                startWith(''),
                map(value => this._filter(value))
            );
        this.firstFormGroup = this._formBuilder.group({
            firstCtrlRotulo: ['', Validators.required],
            firstCtrlDataInicio: ['', Validators.required],
            firstCtrlDataFim: [''],
            firstCtrlFonte: ['', Validators.required],
            firstCtrlDescricao: [''],
            firstCtrlIndividuos: ['', Validators.required],
            firstCtrlCamposSociais: ['', Validators.required]

        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrlNome: [''],
            secondCtrlPapel: ['', Validators.required]
        });
        this.thirdFormGroup = this._formBuilder.group({
            thirdCtrl: ['', Validators.required]
        });
    }




    salvar() {

    }


    private _filter(value: string): string[] {
        const filterValue = value.toLowerCase();

        return this.options.filter(fruit => fruit.toLowerCase().indexOf(filterValue) === 0);
    }
}
