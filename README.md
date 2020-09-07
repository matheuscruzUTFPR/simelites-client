# TCC


TCC

[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2FmatheuscruzUTFPR%2Fsimelites-client.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2FmatheuscruzUTFPR%2Fsimelites-client?ref=badge_shield)
[![Build Status](https://travis-ci.com/matheuscruzUTFPR/simelites-client.svg?branch=master)](https://travis-ci.com/matheuscruzUTFPR/simelites-client)


<a href="https://david-dm.org/matheuscruzUTFPR/simelites-client"><img src="https://david-dm.org/matheuscruzUTFPR/simelites-client.svg" alt="Dependency Status"></a>
<a href="https://david-dm.org/matheuscruzUTFPR/simelites-client/?type=dev"><img src="https://david-dm.org/matheuscruzUTFPR/simelites-client/dev-status.svg" alt="devDependency Status"></a>

FERRAMENTAS:

FRONT: Angular, NODE.js

BACK: PostGIS, QGIS, PostGRES


SOBRE OS MAPAS:

SOBRE UM DOS MAPAS: EPSG:5858 SAD-69 , TAMBEM EXISTE ESPG:29192 - SAD69

Dados tecnicos sobre os arquivos SHAPE:

DATUM: SAD-69/original
PROJECAO CARTOGRAFICA: UTM-22 (-51o)

OBS.: Devido ao uso do DATUM SAD-69/original por Curitiba,
para converter para SIRGAS-2000, devem-se utilizar os parametros
locais de transformacao de coordenadas descritos abaixo:

SAD-69/original(Curitiba) -> SIRGAS-2000
dX = -66,163 m
dY = 2,028 m
dZ = -33,718 m

Dados sobre os arquivos DWG:

O Ippuc e a Prefeitura de Curitiba nao produzem mapas ou bases cadastrais em formato DWG. Os arquivos DWG aqui disponibilizados sao
resultado de conversao de outros formatos e podem apresentar falhas originadas neste processo.

Esta pagina esta em construcao e permanente atualizacao.
Os arquivos aqui disponibilizados tem carater meramente informativo.
O IPPUC nao se responsabiliza por quaisquer prejuizos ou danos causados pela utilizacao da informacao.

Sugestoes, duvidas ou contribuicoes podem ser encaminhados para geoprocessamento@ippuc.org.br

# Elites

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## License
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2FmatheuscruzUTFPR%2Fsimelites-client.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2FmatheuscruzUTFPR%2Fsimelites-client?ref=badge_large)
