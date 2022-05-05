interface Artist {
    name: string;
    category: "artist";
}

interface Album {
    name: string;
    artistName: string;
    category: "album";
}

const artists: Artist[] = [
    {
        name: "Madonna",
        category: "artist",
    },
    {
        name: "Led Zeppelin",
        category: "artist",
    },
    {
        name: "Earth, Wind, and Fire",
        category: "artist",
    },
];

let albums: Album[] = [
    {
        name: "Like a Virgin",
        artistName: "Madonna",
        category: "album",
    },
    {
        name: "Like a Prayer",
        artistName: "Madonna",
        category: "album",
    },
    {
        name: "Houses of the Holy",
        artistName: "Led Zeppelin",
        category: "album",
    },
    {
        name: "In Through the Out Door",
        artistName: "Led Zeppelin",
        category: "album",
    },
];

// function extractName(object: { name: string }): string {
//     return object.name;
// }

// const gAban = function getAlbumsByArtistName(str: string): Album[] {
//     var arr = [];
//     for (var i = 0; i < albums.length; i++) {
//         if (str === albums[i].artistName) {
//             arr.push(albums[i]);
//             return;
//         }
//     }
// };

// const gAaAbAn = function getArtistAndAlbumsByArtistName(
//     str: string
// ): (Artist | Album)[] {
//     var arr = [];
//     for (var i = 0; i < artists.length; i++) {
//         if (str === artists[i].name) {
//             arr.push(artists[i]);
//         }
//     }
//     return [arr[0], ...gAban(str)];
// };

// function getArtistWithAlbumNames(object: { gAaAbAn(): string[] }) {
//     var obj: {
//         name: string;
//         category: "artist";
//         albumNames: string[];
//     };
//     return obj;
// }

function extractName(object: { name: string }): string {
    return object.name;
}

const getAlbumsByArtistName = (artistName: string): Album[] => {
    return albums.filter((album) => album.artistName === artistName);
};

const getArtistAndAlbumsByArtistName = (
    artistName: string
): [Artist, ...Album[]] => {
    const foundArtist: Artist = artists.find(
        (artist) => artist.name === artistName
    );
    const foundAlbums: Album[] = getAlbumsByArtistName(artistName);
    return [foundArtist, ...foundAlbums];
};

interface ArtistWithAlbumNames extends Artist {
    albumNames: string[];
}

const getArtistWithAlbumNames = (
    arrayWithArtistObject: [Artist, ...Album[]]
): ArtistWithAlbumNames => {
    const albumNames: string[] = arrayWithArtistObject
        .filter((item) => item.category === "album")
        .map((item) => extractName(item));
    const artistWithAlbumNames: ArtistWithAlbumNames = {
        albumNames: albumNames,
        category: "artist",
        name: arrayWithArtistObject[0].name,
    };
    return artistWithAlbumNames;
};

const testLog = getArtistAndAlbumsByArtistName("Led Zeppelin");
console.log(getArtistWithAlbumNames(testLog));

//-----------------------------------------------------------------------------------------------------------------------------------

let num: number;
num = 8;
//------------
// x = "yolo";
// error TS2322: Type 'string' is not assignable to type 'number'.

let mess: string;
mess = "Hello World";

let validation: boolean = true;

const teachers: string[] = ["Pete", "Oli"];
// teachers.push({
//     name: "David",
// });
// Argument of type '{ name: string; }' is not assignable to parameter of type 'string'.

function sum(a: string, b: string): string {
    return a + b;
}
// sum(10, 7);
// Argument of type 'number' is not assignable to parameter of type 'string'.
const text: string = sum("Hello", "World");
