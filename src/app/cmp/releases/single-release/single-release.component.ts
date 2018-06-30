import { Component, Input } from '@angular/core';
import { SingleReleaseModel } from '../releases.model';

@Component({
    selector: 'app-single-release',
    templateUrl: './single-release.component.html',
    styleUrls: ['./single-release.component.scss']
})
export class SingleReleaseComponent {
    @Input() data: SingleReleaseModel;

    public onNavigateIconClick(url: string): void {
        window.open(url);
    }
}
