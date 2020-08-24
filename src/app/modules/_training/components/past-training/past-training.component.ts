import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Exercise } from 'src/app/_interfaces';
import { TrainingService } from 'src/app/_services';

@Component({
    selector: 'app-past-training',
    templateUrl: './past-training.component.html',
    styleUrls: ['./past-training.component.scss'],
})
export class PastTrainingComponent implements OnInit, AfterViewInit {
    displayedColumns: string[] = ['date', 'name', 'calories', 'duration', 'state'];
    dataSource = new MatTableDataSource<Exercise>();

    @ViewChild(MatSort, { static: true }) sort: MatSort;

    constructor(private trainingService: TrainingService) {}

    ngOnInit(): void {
        this.dataSource.data = this.trainingService.getCompletedOrCancelledExercisers();
    }

    ngAfterViewInit() {
        this.dataSource.sort = this.sort;
    }
}
