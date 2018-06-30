import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/component/navbar/navbar.component';
import { HomeComponent } from './core/home.component';
import { ReleasesComponent } from './cmp/releases/releases.component';
import { BioComponent } from './cmp/bio/bio.component';
import { ContentComponent } from './cmp/content/content.component';
import { DreamCatcherComponent } from './cmp/dream-catcher/dream-catcher.component';
import { CollabComponent } from './cmp/collab/collab.component';
import { ErrorComponent } from './cmp/error/error.component';
import { SingleReleaseComponent } from './cmp/releases/single-release/single-release.component';
import { ReleasesService } from './cmp/releases/releases.service';


const routeConfig: Routes = [
    {
        path: 'home',
        component: HomeComponent,
        children: [
            {
                path: 'releases',
                component: ReleasesComponent
            },
            {
                path: 'biography',
                component: BioComponent
            },
            {
                path: 'free-content',
                component: ContentComponent
            },
            {
                path: 'dreamcatcher-records',
                component: DreamCatcherComponent
            },
            {
                path: 'collab',
                component: CollabComponent
            }
        ]
    },
    {
        path: '',
        component: HomeComponent
    },
    {
        path: '**',
        component: ErrorComponent
    }

];
@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        NavbarComponent,
        ReleasesComponent,
        BioComponent,
        ContentComponent,
        DreamCatcherComponent,
        CollabComponent,
        SingleReleaseComponent,
        ErrorComponent
    ],
    imports: [
        BrowserModule,
        Angular2FontawesomeModule,
        RouterModule.forRoot(routeConfig)
    ],
    providers: [
        ReleasesService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
