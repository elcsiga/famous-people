export interface Player {
    name: string;
    sheets: string[];
    ord: number;
};

export interface PlayerReport extends Player {
    connected: boolean;
}

export interface GameClient {
    ws: any;
    clientId: string;
    player?: Player
};

export type GameStatus = 'GATHERING' | 'GROUPING' | 'QUIZ' | 'RESULTS';

// inner status
export interface GameState {
    status: GameStatus;
    clients: GameClient[];
};

// report for clients

export interface GameReport {
    status: GameStatus;
    myIndex: number;
    myClientId: string;
    players: PlayerReport[];
    numOfClients: number;
};

// commands

export interface Command {
    command: 'goToGathering' | 'connect' | 'apply' | 'quit' | 'quitNotConnectedPlayers' | 'sendSheets'
     | 'goToGrouping' | 'shuffleGroups' | 'clearGroups'
     | 'goToQuiz' | 'startRound' | 'solve' | 'skip' | 'endRound'
     | 'goToResults';
}

export interface GoToGatheringCommand extends Command {
    command: 'goToGathering';
}

export interface ConnectCommand extends Command {
    command: 'connect';
    clientId: string;
}

export interface ApplyCommand extends Command {
    command: 'apply';
    name: string;
}

export interface QuitCommand extends Command {
    command: 'quit';
}

export interface QuitNotConnectedPlayersCommand extends Command {
    command: 'quitNotConnectedPlayers';
}

export interface SendSheetsCommand extends Command {
    command: 'sendSheets';
    sheets: string[];
}

export interface GoToGroupingCommand extends Command {
    command: 'goToGrouping';
}

export interface ShuffleGroupsCommand extends Command {
    command: 'shuffleGroups';
}

export interface ClearGroupsCommand extends Command {
    command: 'clearGroups';
}

export interface GoToQuizCommand extends Command {
    command: 'goToQuiz';
}

export interface StartRoundCommand extends Command {
    command: 'startRound';
}

export interface SolveCommand extends Command {
    command: 'solve';
}

export interface SkipCommand extends Command {
    command: 'skip';
}

export interface EndRoundCommand extends Command {
    command: 'endRound';
}

export interface GoToResultsCommand extends Command {
    command: 'goToResults';
}
