import { Component, OnInit } from '@angular/core';

import _ from 'lodash';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    names = [
        'Fixed Acidity',
        'Volatile Acidity',
        'Citric Acid',
        'Residual Sugar',
        'Chlorides',
        'Free Sulfur Dioxide',
        'Total Sulfur Dioxide',
        'Density',
        'pH',
        'Sulphates',
        'Alcohol',
        'Estimated Quality'
    ];

    frame = [];

    ngOnInit(): void {
        this.frame.push(this.generateNewRow());
    }

    onClickAddRow(): void {
        this.frame.push(this.generateNewRow())
    }

    onClickEstimateQuality(): void {
        console.log('onClickEstimateQuality')
    }

    private generateNewRow(): number[] {
        return _.times(this.names.length, _.constant(0));
    }

}
