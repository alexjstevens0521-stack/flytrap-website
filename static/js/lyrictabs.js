const songData = {
    "song1": {
        title: "gutted",
        lyrics: `old blood
bearskin rug
i will sit and ill pretend ive met god
hes lying
eyes shut
ive fashioned his replica out of the mud

now i am king of this fort
now i am killing for sport
ive made the 100 most hated
and i feel nothing except emasculated

and i will never get bored
cause i will always want more
all the waste, all the scum
it all fades into one
and it stagnates and im on the next run

and i dont feel ashamed
this is all my domain
pulling grass from the dirt
pulling threads from my shirt
put my knife to the ground
gut and fillet the earth

how come
you never have fun
youre in the corner and youre biting your tongue
come round
melt through the ground
ego’s a battle and the chemical’s won

and if one thing is true
i am nothing like you
plaster my gaze to the ceiling
the thought of the ending is sending me reeling

and i will never get bored
cause i will always want more
all the waste, all the scum
it all fades into one
and it stagnates and im on the next run

and i dont feel ashamed
this is all my domain
pulling grass from the dirt
pulling threads from my shirt
put my knife to the ground
gut and fillet the earth

i know what i deserve`,
        info: `released: 2024
vox: hannah dobbs
guitar1: hannah dobbs
guitar2: alex stevens
bass: hasan naqvi
synth: ollie kelly
drums: arthur mazandarani
prod: alex stevens, spencer withey`
    },
    "song2": {
        title: "river queen",
        lyrics: `oh the river queen
chieftain of the stream`,
        info: `unreleased.
vox: alex stevens, hannah dobbs
guitar1: alex stevens
guitar2: hannah dobbs
bass: hasan naqvi
synth: elizabeth drummond
drums: arthur mazandarani`
    },
    "song3": {
        title: "brown and red",
        lyrics: `brown and red and
brown and red`,
        info: `unreleased.
vox: hannah dobbs
guitar1: hannah dobbs
guitar2: alex stevens
bass: hasan naqvi
synth: elizabeth drummond
drums: arthur mazandarani`
    },
    "song4": {
        title: "megaverse",
        lyrics: `cold corroded carrion
arms stretched across your abdomen
fingers searching for a pulse
cant go out like this again

these things seem reciprocal
but the fears residual
time is eating its own tail
i am waiting for the end

coming from me
it means so little
coming from me
it all sounds wrong
it all sounds wrong
it all sounds wrong
it all sounds wrong

nothing happens in the meantime
let it fall by the wayside
nothing ever happens when its my time
i am nothing if not denied

cold corroded carrion
now all the dust is gathering
there is dirt under my nails
i am almost gone

these things seem reciprocal
but its not fucking fair at all
ill wait ill wait for it
ill hold my breath ill bite my tongue

coming from me
it means so little
coming from me
it all sounds wrong
it all sounds wrong
it all sounds wrong
it all sounds wrong

nothing happens in the meantime
let it fall by the wayside
nothing ever happens when its my time
i am nothing if not denied`,
        info: `unreleased.
vox: hannah dobbs
guitar1: hannah dobbs
guitar2: alex stevens
bass: hasan naqvi
synth: elizabeth drummond
drums: arthur mazandarani`
    },
    "song5": {
        title: "flute song",
        lyrics: `invicta carving on the wall
it’s humorously nautical
the sign clandestine
unsuspecting hour

cheap heretic, forget the health kick
the blue in your nail beds is coldly prophetic
cause fortune favours
and the cards landed right

incandescent, porous cartography
skin dissolving into infinity
the hyacinth surrenders itself to the wind

so kill the augur and sleep off the sickness
behind sodden brickwork, you be my witness
immaculate conception, proud
and nothing if not heaven bound
i know now`,
        info: `unreleased.
vox: hannah dobbs
guitar1: hannah dobbs
guitar2: alex stevens
bass: hasan naqvi
synth: elizabeth drummond
drums: arthur mazandarani`
    },

};

function showLyrics(songKey, element) {
    const song = songData[songKey];
    const lyricsContainer = document.querySelector('.lyrics-content');

    // 1. Update the content
    document.getElementById('song-title').innerText = song.title;
    document.getElementById('lyrics-text').innerText = song.lyrics;
    document.getElementById('meta-content').innerText = song.info;

    // 2. Reset scroll position
    lyricsContainer.scrollTop = 0;

    // 3. Handle the underline logic
    // Remove the 'active-song' class from all buttons
    const buttons = document.querySelectorAll('.song-list button');
    buttons.forEach(btn => btn.classList.remove('active-song'));

    // Add the 'active-song' class to the button that was just clicked
    if (element) {
        element.classList.add('active-song');
    }
}

// Run this when the page opens
window.onload = function () {
    const defaultBtn = document.getElementById('default-song');
    showLyrics('song1', defaultBtn);
};