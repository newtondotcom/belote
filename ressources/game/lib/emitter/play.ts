import { formatCarteToPlay } from '@coinche/shared';
import genIdCuid from '@coinche/shared/src/gen_id';
import type { CardSuite, CardValue, ICard } from '@coinche/shared';

import { supabase } from '../utils/listener';

export async function emitCardPlay(card: ICard) {
    const storeAbout = useAboutStore();
    const storeGame = useGameStore();
    await supabase.from('Events').insert([
        {
            id: await genIdCuid(),
            type: 'play',
            playerId: storeAbout.myId,
            gameId: storeAbout.gameId,
            value: formatCarteToPlay(card, storeGame.pli_number, storeGame.current_pli.length),
        },
    ]);
}

export async function cardPressed(suite: CardSuite, value: CardValue) {
    const storeAbout = useAboutStore();
    const selectedCardIndex = storeAbout.hand.findIndex(
        (card) => card.suite === suite && card.value === value,
    );
    if (selectedCardIndex !== -1) {
        const [selectedCard] = storeAbout.hand.splice(selectedCardIndex, 1);
        await emitCardPlay(selectedCard);
    }
}
