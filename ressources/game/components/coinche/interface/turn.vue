<template>
    <Card class="w-[350px] h-[200px] mx-2">
        <CardHeader />
        <CardContent>
            <div class="grid grid-cols-3 gap-4 w-full max-w-md mx-auto">
                <div />
                <div class="flex justify-center items-center">
                    <Badge
                        :variant="
                            playerIdTurn ===
                            storePlayers.players[(indexPlayers + 2) % lengthPlayers].id
                                ? 'default'
                                : 'secondary'
                        "
                        class="mx-1"
                    >
                        {{ storePlayers.players[(indexPlayers + 2) % lengthPlayers].hands.length }}
                    </Badge>
                    <span class="font-semibold mx-1">
                        {{ storePlayers.players[(indexPlayers + 2) % lengthPlayers].id }}
                    </span>
                </div>
                <div />

                <div class="flex justify-center items-center">
                    <Badge
                        :variant="
                            playerIdTurn ===
                            storePlayers.players[(indexPlayers + 1) % lengthPlayers].id
                                ? 'default'
                                : 'secondary'
                        "
                        class="mx-1"
                    >
                        {{ storePlayers.players[(indexPlayers + 1) % lengthPlayers].hands.length }}
                    </Badge>
                    <span class="font-semibold mx-1">
                        {{ storePlayers.players[(indexPlayers + 1) % lengthPlayers].id }}
                    </span>
                </div>
                <div />
                <div class="flex justify-center items-center">
                    <Badge
                        :variant="
                            playerIdTurn ===
                            storePlayers.players[(indexPlayers + 3) % lengthPlayers].id
                                ? 'default'
                                : 'secondary'
                        "
                        class="mx-1"
                    >
                        {{ storePlayers.players[(indexPlayers + 3) % lengthPlayers].hands.length }}
                    </Badge>
                    <span class="font-semibold mx-1">
                        {{ storePlayers.players[(indexPlayers + 3) % lengthPlayers].id }}
                    </span>
                </div>

                <div />
                <div class="flex justify-center items-center">
                    <Badge
                        :variant="
                            playerIdTurn === storePlayers.players[indexPlayers].id
                                ? 'default'
                                : 'secondary'
                        "
                        class="mx-1"
                    >
                        {{ storePlayers.players[indexPlayers].hands.length }}
                    </Badge>
                    <span class="font-semibold mx-1">
                        {{ storePlayers.players[indexPlayers].id }}
                    </span>
                </div>
                <div />
            </div>
        </CardContent>
        <CardFooter />
    </Card>
</template>

<script setup lang="ts">
    const storePlayers = usePlayersStore();
    const storeGame = useGameStore();
    const storeAbout = useAboutStore();

    const playerIdTurn = computed<string>(() => storeGame.current_player_id);
    const indexPlayers = computed<number>(() =>
        storePlayers.players.findIndex((p) => p.id == storeAbout.myId),
    );
    const lengthPlayers = computed<number>(() => storePlayers.players.length);
</script>
