// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100003030302020102020202020201020202010101020201010202020201010202020202010202010101010201010202020202020102020202020202020202020202020201010101010101010201010102020202020202020202020102020201020202020202020202020201020202010101020202020202020202020202020202010101010102020101010101020201020202020201010102020201010202010202020202020201010101010102020101010202020101010202020202020202020202010101020202010101010202010101010102020202020101020202020202020102020202020202020102020102020202020202020202020202020202040404`, img`
. . . . . 2 . . . . . . 2 . . . 
2 2 2 . . 2 2 . . . . 2 2 . . . 
. . 2 . . 2 2 2 2 . 2 2 . . . . 
. . 2 . . . . . . . . . . . . . 
. . 2 2 2 2 2 2 2 2 . 2 2 2 . . 
. . . . . . . . . 2 . . . 2 . . 
. . . . . . . . . 2 . . . 2 2 2 
. . . . . . . . . . . . . . . 2 
2 2 2 2 . . 2 2 2 2 2 . . 2 . . 
. . . 2 2 2 . . . 2 2 . . 2 . . 
. . . . . 2 2 2 2 2 2 . . 2 2 2 
. . . 2 2 2 . . . . . . . . . . 
. 2 2 2 . . . 2 2 2 2 . . 2 2 2 
2 2 . . . . . 2 2 . . . . . . . 
2 . . . . . . . . 2 . . 2 . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.builtin.forestTiles0,myTiles.tile1,sprites.castle.tileGrass1,sprites.castle.tileDarkGrass3], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
