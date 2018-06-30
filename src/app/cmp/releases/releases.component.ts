import { Component, OnInit } from '@angular/core';
import { ReleasesService } from './releases.service';
import { SingleReleaseModel } from './releases.model';

@Component({
    selector: 'app-releases',
    templateUrl: './releases.component.html',
    styleUrls: ['./releases.component.scss']
})
export class ReleasesComponent implements OnInit {
    public releases: SingleReleaseModel[] = [];
    public isLoading = true;

    constructor(
        private service: ReleasesService
    ) { }

    ngOnInit() {
        this.service.getReleases()
            .subscribe(data => {
                this.releases = data;
                this.isLoading = false;
            });
    }

    public onSearchTyped(value: string): void {
        this.service.getReleasesByName(value)
            .subscribe(data => {
                this.releases = data;
            });
    }
}
