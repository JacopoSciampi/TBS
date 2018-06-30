import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { SingleReleaseModel } from './releases.model';

@Injectable()

export class ReleasesService {
    public getReleases(): Observable<SingleReleaseModel[]> {
        return Observable.of(data);
    }

    public getReleasesByName(typo: string): Observable<SingleReleaseModel[]> {
        return Observable.of(data.filter(el => el.track.name.startsWith(typo)));
    }
}

const data: SingleReleaseModel[] = [
    {
        imageUrl: 'https://e-cdns-images.dzcdn.net/images/cover/eab8d8c9c7feb6149871f4002bc9606d/330x330-000000-80-0-0.jpg',
        urlRedirect: 'https://mega.nz/#!dM5kgKZA!FFJVMIeRDJu4jaBQRsCm7cekeGE3rX1wZvlC1D_rlTU',
        track: {
            name: 'DreamCatcher',
            author: 'The Brick Slayer',
            yearPub: 2016,
            genere: 'Hands Up',
            youtubeUrl: 'https://www.youtube.com/watch?v=DK4qjyowoE4',
            spotifyUrl: 'https://open.spotify.com/album/0c2P9ZfXE4mdZoXpvdaj3g'
        }
    },
    {
        imageUrl: 'https://i.scdn.co/image/b4ae1ae77da7060b5a0e233a7a8c9465ad7ebb8c',
        track: {
            name: 'Last Of Us',
            author: 'The Brick Slayer',
            yearPub: 2017,
            genere: 'Ambient / Epic',
            spotifyUrl: 'https://open.spotify.com/album/7rn9AY8MyyaDEz7jtIRFcQ'
        }
    },
    {
        imageUrl: 'https://f4.bcbits.com/img/a0757723494_16.jpg',
        urlRedirect: 'https://mega.nz/#!kFRxgBJI!RJDRaGcaYCIFPsBkXYgPFMu4qtkqedhVd0PNjKUKO48',
        track: {
            name: 'Far Away',
            author: 'The Brick Slayer',
            yearPub: 2017,
            genere: 'Dubstep / Epic',
            spotifyUrl: 'https://open.spotify.com/album/7a7EExdNcRpMw83bLwKrGW',
            youtubeUrl: 'https://www.youtube.com/watch?v=uVAfwb1qQP8'
        }
    },
    {
        imageUrl: 'https://i.ytimg.com/vi/HBk_wJXAuek/maxresdefault.jpg',
        urlRedirect: 'https://mega.nz/#!oEYVXIIQ!gpW5T-SrtN0F4zC_CL-fCCSSG0Nrga_5c9u8nu_N96w',
        track: {
            name: 'Here in Tokyo',
            author: 'The Brick Slayer ft. Stepa K',
            yearPub: 2017,
            genere: 'Progressive House',
            spotifyUrl: 'https://open.spotify.com/track/2RCkHaCJ3eixbd4USbLlNe?si=Q-Msz-9ZTaSd84nPRFCnpw',
            youtubeUrl: 'https://www.youtube.com/watch?v=HBk_wJXAuek',
            soundcloudUrl: 'https://soundcloud.com/thebrickslayer/the-brick-slayer-here-in-tokyo-ft-chris-silvertune'
        }
    },
    {
        imageUrl: 'https://i.ytimg.com/vi/gRQhBLzYAI8/maxresdefault.jpg',
        urlRedirect: 'https://mega.nz/#!YAIlkKwQ!tMlVALDvKamd_9iiYGQUUGn6DoCGCxV5NrFeqXpMCTE',
        track: {
            name: 'Dream it Possible (TheBrickSlayer remix)',
            author: 'Delacey',
            yearPub: 2016,
            genere: 'Chillstep',
            spotifyUrl: 'https://open.spotify.com/track/3fJjrwWO3r8kQq8JyRdXuq?si=PKg3U61tR4KGetCXpVev4Q',
            youtubeUrl: 'https://www.youtube.com/watch?v=32wDiTMIKMo',
        }
    },
    {
        imageUrl: 'https://i.scdn.co/image/d641cca8ab566138a199b5fdc717c144b1e22c74',
        track: {
            name: 'Evvai',
            author: 'The Brick Slayer & NeXKore',
            yearPub: 2018,
            genere: 'Progressive House',
            spotifyUrl: 'https://open.spotify.com/album/0MjzUnvEGo1ouZZx7WlWgV',
        }
    },
    {
        imageUrl: 'https://yt3.ggpht.com/-WKWHWJOYogQ/AAAAAAAAAAI/AAAAAAAAAAA/pitEQFCJKIs/s288-mo-c-c0xffffffff-rj-k-no/photo.jpg',
        urlRedirect: 'https://mega.nz/#!hIQijJZA!1YCJXos1A-J_QpMzrgpeRPPMQPrEBKJdKkAC5vDKIK8',
        track: {
            name: 'Space to Voice',
            author: 'The Brick Slayer',
            yearPub: 2013,
            genere: 'Hands Up',
            spotifyUrl: 'https://open.spotify.com/track/3fJjrwWO3r8kQq8JyRdXuq?si=PKg3U61tR4KGetCXpVev4Q',
            youtubeUrl: 'https://www.youtube.com/watch?v=4GHbFe_mEYw',
        }
    },
    {
        imageUrl: 'https://yt3.ggpht.com/-WKWHWJOYogQ/AAAAAAAAAAI/AAAAAAAAAAA/pitEQFCJKIs/s288-mo-c-c0xffffffff-rj-k-no/photo.jpg',
        urlRedirect: 'https://mega.nz/#!VYoiWR4Z!tW6sTx63bZ-9rPGfBws_q29DsDIrCFd8tZemBCAlFRE',
        track: {
            name: 'Pacific Universe',
            author: 'The Brick Slayer',
            yearPub: 2014,
            genere: 'Progressive House',
            spotifyUrl: 'https://open.spotify.com/track/71FnyhLdmbOZQV186gvb1h?si=KCI84JwdSCOU3sXIuthJrw',
            soundcloudUrl: 'https://soundcloud.com/officialslyx/slyx-pacific-universedemo'
        }
    },
    {
        imageUrl: 'https://yt3.ggpht.com/-WKWHWJOYogQ/AAAAAAAAAAI/AAAAAAAAAAA/pitEQFCJKIs/s288-mo-c-c0xffffffff-rj-k-no/photo.jpg',
        urlRedirect: 'https://mega.nz/#!kQJmwZqS!ALNORqh8EIDK_1reGxrvst8GVMp9QqC0KnmJITSLxOo',
        track: {
            name: 'Hands Up',
            author: 'The Brick Slayer',
            yearPub: 2014,
            genere: 'Progressive House',
            spotifyUrl: 'https://open.spotify.com/track/4g4sjnlBY8lyKP17CmJQqq?si=lAHoIGmPSQCz1AqoVbebpA',
            soundcloudUrl: 'https://soundcloud.com/officialslyx/progressiveslyx-hands-upfree-download'
        }
    },
    {
        imageUrl: 'https://yt3.ggpht.com/-WKWHWJOYogQ/AAAAAAAAAAI/AAAAAAAAAAA/pitEQFCJKIs/s288-mo-c-c0xffffffff-rj-k-no/photo.jpg',
        track: {
            name: 'Watching The Storm (TheBrickSlayer remix)',
            author: 'U137',
            yearPub: 2015,
            genere: 'Slowstyle',
            spotifyUrl: 'https://open.spotify.com/track/44xUzw0nrJRwaD69m9bJiW?si=Cj8I__zjSBSlcFcFCXOV5g',
        }
    },
    {
        imageUrl: 'https://e-cdns-images.dzcdn.net/images/cover/fb873e13f72cb4c7fdf8188544f4a6bd/500x500.jpg',
        urlRedirect: 'https://mega.nz/#!RIxCFJrJ!030e43czmqd1_4s9wbr7FI9kdo81jnEDJ-w6lagjJS4',
        track: {
            name: `I'm Free`,
            author: 'The Brick Slayer',
            yearPub: 2015,
            genere: 'Dubstep',
            spotifyUrl: 'https://open.spotify.com/album/5otX7jw6FfFKxLPHIX8bLO?si=K-kmUnolR2CAbi4WUC3d5w',
        }
    },
    {
        imageUrl: 'https://e-cdns-images.dzcdn.net/images/cover/349292f60d9f4ad7705efae946833516/500x500.jpg',
        urlRedirect: 'https://mega.nz/#!4U5AzBSa!V1CVP6x5v8XPdMGPhYe9vkm6XEFEuWHPiwEgBCvtIjA',
        track: {
            name: 'Weakness',
            author: 'The Brick Slayer',
            yearPub: 2016,
            genere: 'Hands Up',
            spotifyUrl: 'https://open.spotify.com/album/5VvYaWQt3SD97xsHoVt341?si=Z-gxNLv4ToOBPF4PBCEkUw',
        }
    },
    {
        imageUrl: 'https://e-cdns-images.dzcdn.net/images/cover/5d36d9723eb1ecb4245c929bd61c0a3f/500x500.jpg',
        urlRedirect: 'https://mega.nz/#!oFokiJJC!zjlV9wdBGyE6XqY88AEfo4Ydf7zYuu0fmmbI5G43DGU',
        track: {
            name: 'The Hunter',
            author: 'The Brick Slayer',
            yearPub: 2016,
            genere: 'Hands Up',
            spotifyUrl: 'https://open.spotify.com/album/4lwnLN9h8KlMAawF4PxmA6?si=clzm66J8TEKMXAntnbjXWw',
        }
    },
    {
        imageUrl: 'https://i.scdn.co/image/125adce198d78bff0056b488211036e80ea7b569',
        urlRedirect: 'https://mega.nz/#!AQoykKbT!5IHttxIASUqdXFC_yJbp2ZpS0WinXdU83u2iOeRFy7I',
        track: {
            name: 'One Of Us (TheBrickSlayer Remix)',
            author: 'Juan Osborne',
            yearPub: 2016,
            genere: 'Hands Up',
            spotifyUrl: 'https://open.spotify.com/album/3wwrajE2MEsv2zKSrzLF4w?si=yZ4MmOW4T_WQq_SwbLS5KQ',
        }
    },
    {
        imageUrl: 'https://e-cdns-images.dzcdn.net/images/cover/6ee6399663c73c13d90f52dafbafb0d6/500x500.jpg',
        urlRedirect: 'https://mega.nz/#!kBQiQbha!Q5sG2e2PFs4w1_r58HzpX172S5-wv9oOr7N0kjQVJa0',
        track: {
            name: 'I Love You',
            author: 'The Brick Slayer',
            yearPub: 2016,
            genere: 'Trance',
            spotifyUrl: 'https://open.spotify.com/album/2BZ3Vw3ILUJHEpwFbxOLNQ?si=4Aiuu7uYRBuyWu1H-0A9cA',
            youtubeUrl: 'https://www.youtube.com/watch?v=_DnZeLHxGbw'
        }
    },
    {
        imageUrl: 'https://e-cdns-images.dzcdn.net/images/cover/eab8d8c9c7feb6149871f4002bc9606d/500x500.jpg',
        urlRedirect: 'https://mega.nz/#!dM5kgKZA!FFJVMIeRDJu4jaBQRsCm7cekeGE3rX1wZvlC1D_rlTU',
        track: {
            name: 'Dreamcatcher',
            author: 'The Brick Slayer',
            yearPub: 2016,
            genere: 'Hands Up',
            spotifyUrl: 'https://open.spotify.com/album/0c2P9ZfXE4mdZoXpvdaj3g?si=DkwZ24nTTneAQIZwk3IVNQ',
            youtubeUrl: 'https://www.youtube.com/watch?v=DK4qjyowoE4'
        }
    },
    {
        imageUrl: 'https://i.scdn.co/image/a69c89baaed81c4890f3e8a684dda5bb7ad070a7',
        urlRedirect: 'https://mega.nz/#!YEIyiQpB!2_E1eIdA-hmtgv1xGeUNwGXh3nkwtVlIbrb1WmPRmrs',
        track: {
            name: 'Come Around (TheBrickSlayer Remix)',
            author: 'Rosi Golan',
            yearPub: 2016,
            genere: 'Dubstep',
            spotifyUrl: 'https://open.spotify.com/album/5D1jESLEK6csa1uL2B7nbm?si=R-9vofufR-OZXUO8h9NXTQ'
        }
    },
    {
        imageUrl: 'https://i.scdn.co/image/b62b7d71f9442f81313c76d9b16cc5bb5f8c5046',
        urlRedirect: 'https://mega.nz/#!NZoCnJoJ!Af_5IS1_VpSMBAke4LB7gvbNWNun7J7_7YksfN7A2U4',
        track: {
            name: 'A Long goodbye',
            author: 'The Brick Slayer',
            yearPub: 2016,
            genere: 'Trance',
            spotifyUrl: 'https://open.spotify.com/album/6pVbBkrxjOlxzY3gxBlH8O?si=fGOnnbCIR8657B02WHUl0A'
        }
    },
    {
        imageUrl: 'https://i.scdn.co/image/1148b94731a70299aeb3f0722e60eb9bf7114e73',
        urlRedirect: 'https://mega.nz/#!NMAFCCSZ!6rj4gtHr0wGvE4xvgHv6vlaKehxqZlQyb6HjzPYVRLk',
        track: {
            name: 'Sometimes',
            author: 'The Brick Slayer',
            yearPub: 2017,
            genere: 'Melbourne Bounce',
            spotifyUrl: 'https://open.spotify.com/album/6ncHMACYxhIErINMumbtU9?si=6O8ufltkSNukud1MhkCvew',
            youtubeUrl: 'https://www.youtube.com/watch?v=UMP5bRpm5Ws',
            soundcloudUrl: 'https://soundcloud.com/thebrickslayer/the-brick-slayer-sometimes'
        }
    },
    {
        imageUrl: 'https://e-cdns-images.dzcdn.net/images/cover/20d612f365f0d28bb16b94a1804b9836/500x500.jpg',
        track: {
            name: 'Sometimes (Deca Edit)',
            author: 'The Brick Slayer',
            yearPub: 2017,
            genere: 'Progressive House',
            spotifyUrl: 'https://open.spotify.com/album/0aAs3xuOxazUJx0DEMrCe2?si=dnOA0TrWRU-Nm2vlve6-TA',
            youtubeUrl: 'https://www.youtube.com/watch?v=5L4465JM7EQ',
            soundcloudUrl: 'https://soundcloud.com/thebrickslayer/the-brick-slayer-sometimesdeca-edit'
        }
    },
    {
        imageUrl: 'https://i.scdn.co/image/1148b94731a70299aeb3f0722e60eb9bf7114e73',
        track: {
            name: 'Sometimes (Hardstyle Edit)',
            author: 'The Brick Slayer',
            yearPub: 2017,
            genere: 'Progressive House',
            youtubeUrl: 'https://www.youtube.com/watch?v=ijFh6zRnEvQ',
            soundcloudUrl: 'https://soundcloud.com/thebrickslayer/sometimes-hardstyle-remix'
        }
    },
    {
        imageUrl: 'https://i.scdn.co/image/e0e106a12d898ba3d360bf560f8cd5dbd852d340',
        urlRedirect: 'https://mega.nz/#!EQhnwKYY!ijYmSPhONxIS_LWJ2UA3I5yMviZUoDhVO4Tqdo8KkyM',
        track: {
            name: 'About Me',
            author: 'The Brick Slayer',
            yearPub: 2017,
            genere: 'Progressive House',
            youtubeUrl: 'https://www.youtube.com/watch?v=sHkjh3jU_RU',
            spotifyUrl: 'https://open.spotify.com/album/1tQwnG80o2UvZ6btZmcIU7?si=JUqSRK21RZO6jGB4G3VPJg'
        }
    },
    {
        imageUrl: 'https://e-cdns-images.dzcdn.net/images/cover/9e778bc4cb3cebe6b4215dcb443ace59/500x500.jpg',
        urlRedirect: 'https://mega.nz/#!oMInEYzZ!ayqgkqJ1NSEjSCFF0EokD9CvW1sEGhJoqy0QtoCE6bk',
        track: {
            name: 'Be Mine',
            author: 'The Brick Slayer',
            yearPub: 2018,
            genere: 'Hardstyle',
            youtubeUrl: 'https://www.youtube.com/watch?v=3yVoSc-iVJo',
            spotifyUrl: 'https://open.spotify.com/album/7uwcoeJvT9V0NkESVw4PZk?si=4oLc8c2xR_StIJaXAuaEyQ'
        }
    },
    {
        imageUrl: 'https://i.ytimg.com/vi/nliE2Ky0B3M/maxresdefault.jpg',
        urlRedirect: 'https://mega.nz/#!JAA1yb4Z!AHwYgw4RkH1boW9gv7rovUd5TmqyW2zzRFbnLTAAZ0Y',
        track: {
            name: 'Strenght of a Thousand Man (TheBrickSlayer Remix)',
            author: 'Two Steps From Hell',
            yearPub: 2018,
            genere: 'Epicstep',
            youtubeUrl: 'https://www.youtube.com/watch?v=nliE2Ky0B3M',
            spotifyUrl: 'https://open.spotify.com/album/2WloFp6hUv12er45QrBfWD?si=-vmAtGdLR1qoytlEvQHk4Q'
        }
    },
    {
        imageUrl: 'https://i.scdn.co/image/0f59ff880db32cd1fad40ef3bf306331333429c1',
        urlRedirect: 'https://mega.nz/#!wVghkbza!Gwk8ZhGADCbfJFYX9fxD_Aw99lnp-NGLc1wvd9mHPkc',
        track: {
            name: 'Biomes',
            author: 'The Brick Slayer',
            yearPub: 2018,
            genere: 'Downtempo?',
            youtubeUrl: 'https://www.youtube.com/watch?v=7R97yKZwN9Y',
            soundcloudUrl: 'https://soundcloud.com/slyxofficial/slyx-biomes',
            spotifyUrl: 'https://open.spotify.com/album/0kDquvHlFzKD3sZs14TN9O?si=nqx2FVvARziiNM0-OZ84nw'
        }
    },
    {
        imageUrl: 'https://i1.sndcdn.com/avatars-000312251370-00i75r-t500x500.jpg',
        track: {
            name: 'One More Light (TheBrickSlayer Bootleg)',
            author: 'Linkin Park',
            yearPub: 2018,
            genere: 'Slowstyle',
            soundcloudUrl: 'https://soundcloud.com/thebrickslayer/one-more-lightthe-brick-slayer-bootleg',
        }
    },
    {
        imageUrl: 'https://i1.sndcdn.com/avatars-000312251370-00i75r-t500x500.jpg',
        track: {
            name: 'Hollow Heart (NCN Release)',
            author: 'The Brick Slayer',
            yearPub: 2018,
            genere: 'Progressive House',
            soundcloudUrl: 'https://soundcloud.com/thebrickslayer/hollow-heartncn-release',
            youtubeUrl: 'https://www.youtube.com/watch?v=5-AlaEPjlNM'
        }
    },
    {
        imageUrl: 'https://i1.sndcdn.com/avatars-000312251370-00i75r-t500x500.jpg',
        urlRedirect: 'https://mega.nz/#!FZJhRDgS!OCdswgvH3A2eCKyC7Zoi9aHRunPXe0deZ9YwsqmDxw0',
        track: {
            name: 'The Other Side (TheBrickSlayer Bootleg)',
            author: 'Ruelle from ShadowHunters',
            yearPub: 2017,
            genere: 'Chillstep',
            soundcloudUrl: 'https://soundcloud.com/thebrickslayer/tbstosr',
            youtubeUrl: 'https://www.youtube.com/watch?v=EP0oEJvUC7A'
        }
    },
    {
        imageUrl: 'https://i1.sndcdn.com/artworks-000228499495-t6v6ac-t500x500.jpg',
        urlRedirect: 'https://mega.nz/#!BZgBWRqJ!PFpqUV0t6ZLf-ApfMPApRr68EpjcUwXsyoFk5wpJMU8',
        track: {
            name: 'Starlight (Could You Be Mine) The Brick Slayer EDIT',
            author: 'Don Diablo & Matt Nash',
            yearPub: 2017,
            genere: 'Chillstep',
            soundcloudUrl: 'https://soundcloud.com/thebrickslayer/don-diablo-xmatt-nash-starlight-could-you-be-minethebrickslayer-edit',
            youtubeUrl: 'https://www.youtube.com/watch?v=zl9WhDRMOrU'
        }
    }
];



