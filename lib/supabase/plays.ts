import { createClient } from '@supabase/supabase-js';

import { formatCarteToDistribute } from './distribution';
import genIdCuid from './gen';
import { closePli, formatTeam } from './pli';

const config = useRuntimeConfig();
const supabase = createClient(config.public.SUPABASE_URL, config.public.SUPABASE_ANON_KEY);

export async function emitCardPlay(card: ICard) {
    const storeAbout = useAboutStore();
    const storeGame = useGameStore();
    await supabase.from('Events').insert([
        {
            id: await genIdCuid(),
            type: 'play',
            playerId: storeAbout.myId,
            gameId: storeAbout.gameId,
            value: formatCarteToDistribute(card, storeGame.pli_number),
        },
    ]);
    // check if end of pli
    if (storeGame.current_pli.length == 4) {
        await closePli();
    }
}

export async function cardPressed(suite: CardSuite, value: CardValue) {
    const storeAbout = useAboutStore();
    const storeGame = useGameStore();
    const selectedCardIndex = storeAbout.hand.findIndex(
        (card) => card.suite === suite && card.value === value,
    );
    if (selectedCardIndex !== -1) {
        const [selectedCard] = storeAbout.hand.splice(selectedCardIndex, 1);
        await emitCardPlay(selectedCard);
    }

    console.log('Atout : ', storeGame.last_annonce.suite);
    console.log('has atout : ', storeAbout.hasAtout);
    console.log('color Asked : ', storeAbout.colorAsked);
    console.log('atoutIsAsked  : ', storeAbout.atoutIsAsked);
    console.log('hasAskedColor : ', storeAbout.hasAskedColor);
    console.log('highestAtoutInPli : ', storeAbout.highestAtoutInPli);
}
