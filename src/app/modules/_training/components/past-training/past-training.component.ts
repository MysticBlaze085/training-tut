import { AfterViewInit, Component, Input, OnInit, ViewChild, OnChanges, SimpleChanges } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Exercise } from 'src/app/_interfaces';
import { TrainingService } from 'src/app/_services';

@Component({
    selector: 'app-past-training',
    templateUrl: './past-training.component.html',
})
export class PastTrainingComponent implements OnChanges {
    @Input() finishedWorkOutData: Exercise[];
    displayedColumns: string[] = ['date', 'name', 'calories', 'duration', 'state'];
    dataSource: MatTableDataSource<Exercise> = new MatTableDataSource<Exercise>();

    private paginator: MatPaginator;
    private sort: MatSort;

    @ViewChild(MatSort) set matSort(ms: MatSort) {
        this.sort = ms;
        this.setDataSourceAttributes();
    }

    @ViewChild(MatPaginator) set matPaginator(mp: MatPaginator) {
        this.paginator = mp;
        this.setDataSourceAttributes();
    }

    resultsLength = 0;

    constructor() {}

    ngOnChanges({ finishedWorkOutData }: SimpleChanges): void {
        if (finishedWorkOutData && this.finishedWorkOutData) {
            this.dataSource.data = this.finishedWorkOutData;
        }
    }

    setDataSourceAttributes() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }

    doFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
}
