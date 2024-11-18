import { setNextPlayerTurn } from '~/lib/supabase/annonce';
import { deformatCarteToPlay } from '~/lib/supabase/distribution';

import { assertPliNumber } from '../utils';

export default function translatePlay(event: EventShared) {
    const storeGame = useGameStore();
    const def = deformatCarteToPlay(event.value as string);
    const card = def.card;
    const pli_number = def.pli_number;
    assertPliNumber(pli_number, storeGame.pli_number);
    const player_id = event.playerId;
    storeGame.addCardToPliAndRemove(card, player_id);
    setNextPlayerTurn(player_id);
    return;
}
