# digilent-chart-angular2
Chart module for Angular2 using [flot](http://www.flotcharts.org/). jQuery and some useful plugins included.

## Setting Up

### Install digilent-chart-angular2
```
npm install digilent-chart-angular2 --save
```
### Setup App @NgModule
```TypeScript
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
 
//Digilent Instrument Protocol and Digilent Chart
import { DigilentChart  } from 'dip-angular2/services';
 
@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    DigilentChart
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
```

## Usage
DigilentChart requires chartId and chartOptions inputs and emits a chartLoad event when a chart is loaded into the page. It is also useful to use a ViewChild on the element in order to call methods on the component. Chart options are the options directly passed to flot. See the [flot documentation](https://github.com/flot/flot/blob/master/API.md) for options configuration.

```html
<digilent-chart #myChart [flotOptions]="chartOptions" [chartId]="chartId" (chartLoad)="chartLoad()"></digilent-chart>
```

The parent component should include DigilentChart and have properties called chartOptions and chartId to one-way bind them to the DigilentChart component.

```TypeScript
import { Component, ViewChild } from '@angular/core';
import { DigilentChart } from 'digilent-chart-angular2/components';

@Injectable()
export class DeviceManagerService {
    @ViewChild('myChart') myChart: DigilentChart;
    public chartId: string = 'myOpenscopeChart';
    public chartOptions: any = {
        series: {
            lines: {
                show: true
            }
        },
        legend: {
            show: false
        },
        canvas: true,
        grid: {
            hoverable: true,
            clickable: true,
            autoHighlight: false,
            borderWidth: 0,
            backgroundColor: 'black',
            labelMargin: 15,
            margin: {
                top: 15,
                left: 10,
                right: 27,
                bottom: 10
            }
        },
        axisLabels: {
            show: true
        },
        tooltip: {
            show: true,
            cssClass: 'flotTip'
        },
        zoomPan: {
            enabled: true,
            secsPerDivisionValues: [0.0001, 0.0002, 0.0005, 0.001, 0.002, 0.005, 0.01, 0.02, 0.05, 0.1, 0.2, 0.5, 1]
        },
        cursorMoveOnPan: true,
        yaxis: {
            position: 'left',
            axisLabel: '',
            axisLabelColour: '#666666',
            axisLabelUseCanvas: true,
            show: true,
            tickColor: '#666666',
            font: {
                color: '#666666'
            }
        },
        xaxis: {
            tickColor: '#666666',
            font: {
                color: '#666666'
            }
        }
    };

    constructor() {

    }

    drawData() {
        this.myChart.setData([{
            data: [[0, 0], [1, 1], [2, 2]],
            yaxis: 1,
            lines: {
                show: true
            },
            points: {
                show: false
            }
        }], true);
    }
}
```

## License
MIT @ Digilent
