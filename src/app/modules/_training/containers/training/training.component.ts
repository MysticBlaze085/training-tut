import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, CanActivate } from '@angular/router';
import { CurrentTrainingGuard } from 'src/app/_guards';

@Component({
    selector: 'app-training',
    templateUrl: './training.component.html',
    styleUrls: ['./training.component.scss'],
})
export class TrainingComponent implements OnInit {
    links: { key: string; value: string }[];
    activeLink: string;

    constructor(public route: ActivatedRoute, private isActiveRoute: CurrentTrainingGuard) {}

    ngOnInit() {
        const routeSnapShot = this.route.snapshot;
        this.isActiveRoute.canActivate(routeSnapShot).subscribe((res) => console.log('res', res));

        const routeChildren = this.route.snapshot.routeConfig.children;
        console.log('snap', this.route.snapshot);

        this.links = this.mapRouteConfiguration(routeChildren);
        this.activeLink = this.links[0].key;
    }

    private mapRouteConfiguration(routeChildren): { key: string; value: string }[] {
        return routeChildren.map((route) => {
            return {
                key: route.path,
                value: route.data.title,
            };
        });
    }
}
