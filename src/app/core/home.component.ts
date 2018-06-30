import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationListKeys } from '../shared/data/const';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    public navigationListKeys = new NavigationListKeys;
    constructor(
        private router: Router
    ) { }

    ngOnInit(): void {
        this.router.navigate(['home/releases']);
    }

    public onSectionClick(name: string): void {
        switch (name) {
            case 'releases': {
                this.router.navigate(['home/releases']);
                break;
            }
            case 'bio': {
                this.router.navigate(['home/biography']);
                break;
            }
            case 'content': {
                this.router.navigate(['home/free-content']);
                break;
            }
            case 'dreamcatcher': {
                this.router.navigate(['home/dreamcatcher-records']);
                break;
            }
            case 'collab': {
                this.router.navigate(['home/collab']);
                break;
            }
        }
    }
}
