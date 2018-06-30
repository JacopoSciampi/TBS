import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarIconListKeys } from '../../data/const';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
    public navbarIconListKeys = new NavbarIconListKeys;
    constructor(
        private router: Router
    ) { }

    public navigateTo(name: string): void {
        switch (name) {
            case 'facebook': {
                window.open('https://www.facebook.com/TheBrickSlayerMusic');
                break;
            }
            case 'instagram': {
                window.open('https://www.instagram.com/jekosciampi/');
                break;
            }
            case 'twitter': {
                window.open('https://twitter.com/jacopo_sciampi');
                break;
            }
            case 'youtube': {
                window.open('https://www.youtube.com/channel/UCZiWE7fs2W6QCmsJXCnavuw');
                break;
            }
            case 'spotify': {
                window.open('https://open.spotify.com/artist/4o17UxuZhBYV6kRVQTqaQb?si=zteRWniXRS-4CFx4PVsYFQ');
                break;
            }
            case 'soundcloud': {
                window.open('https://soundcloud.com/thebrickslayer');
                break;
            }
        }
    }
}
