import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from "../environments/environment";

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

    get featureFrame() {
        return _.map(this.frame, _.dropRight);
    }

    constructor(private http: HttpClient) {
    }

    ngOnInit(): void {
        this.frame.push(this.generateNewRow());
    }

    onClickAddRow(): void {
        this.frame.push(this.generateNewRow())
    }

    onClickEstimateQuality(): void {
        this.http.post(environment.apiOrigin + '/api/estimate', {features: this.featureFrame})
            .subscribe(this.onHTTPSuccess.bind(this), this.onHTTPError.bind(this));
    }

    onHTTPSuccess(data) {
        const { predictions } = data;

        for (let i = 0; i < predictions.length; i++) {
            this.frame[i][this.frame[i].length - 1] = predictions[i];
        }
    }

    onHTTPError(error) {
        alert(error.message);
    }

    onUserInput(val: number, row: number, col: number): void {
        const deepClone = _.cloneDeep(this.frame);
        deepClone[row][col] = val;
        this.frame = deepClone;
    }

    private generateNewRow(): number[] {
        return _.fill(Array(this.names.length), 0);
    }

}
