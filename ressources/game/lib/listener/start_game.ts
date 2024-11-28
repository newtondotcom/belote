import { toast } from '@/lib/utils/listener';
import type { EventShared } from '@coinche/shared';

export async function translateStart(event: EventShared) {
    const storeGame = useGameStore();
    storeGame.setNewRound();
    toast({
        title: `${event.value} commence le jeu`,
    });
    return;
}
