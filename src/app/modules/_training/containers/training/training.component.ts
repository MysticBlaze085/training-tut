import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-training',
    templateUrl: './training.component.html',
    styleUrls: ['./training.component.scss'],
})
export class TrainingComponent implements OnInit {
    links: { key: string; value: string }[];
    activeLink;

    constructor(public route: ActivatedRoute) {}

    ngOnInit() {
        const routeChildren = this.route.snapshot.routeConfig.children;
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
