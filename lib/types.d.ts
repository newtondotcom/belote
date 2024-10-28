type CardSuite = 'diamonds' | 'clubs' | 'hearts' | 'spades' | 'tout-atout' | 'sans-atout' | 'NA';
type CardValue = '7' | '8' | '9' | 'J' | 'Q' | 'K' | '10' | 'A';
type Annonce = 80 | 90 | 100 | 110 | 120 | 130 | 140 | 150 | 160 | 0 | 'capot' | 'generale';
type PlayerPosition = 0 | 1 | 2 | 3;
type PlayerId = string;
type PlayerSurname = string;

interface ICard {
    suite: CardSuite;
    value: CardValue;
    valueNum: number;
}

interface IAnnonce {
    suite: CardSuite;
    annonce: Annonce;
    playerId: PlayerId;
}

interface IPlayer {
    id: PlayerId;
    surname: PlayerSurname;
    position: PlayerPosition;
    hands: ICard[];
    classement: number;
    last_annonce?: IAnnonce;
}

interface IGame {
    current_pli: ICard[];
    current_player_id: PlayerId;
    status: GameStatus;
    pli_number: number;
    player_starting_id: PlayerId;
    team1_point_current_pli: number;
    team2_point_current_pli: number;
    team1_score: number;
    team2_score: number;
    last_annonce: IAnnonce;
    coinched: boolean;
    surcoinched: boolean;
}

type EventType =
    | 'annonce'
    | 'coinche'
    | 'surcoinche'
    | 'play'
    | 'pass'
    | 'end_pli'
    | 'start_pli'
    | 'start_game'
    | 'end_game'
    | 'pause'
    | 'resume'
    | 'leave'
    | 'join'
    | 'error'
    | 'win_pli'
    | 'win_game'
    | 'distribution';
type GameStatus = 'new' | 'paused' | 'active' | 'complete';

interface EventShared {
    id: string;
    timestamp: number;
    playerId: PlayerId;
    type: EventType;
    value: string | ICard | IAnnonce;
    gameId: string;
}
