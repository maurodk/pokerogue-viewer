import * as vscode from 'vscode';

const POKEROGUE_URL = 'https://pokerogue.net';

export function activate(context: vscode.ExtensionContext) {
    console.log('PokeRogue Viewer ativado!');

    const openPokerogue = vscode.commands.registerCommand('pokerogue.open', () => {
        vscode.commands.executeCommand('simpleBrowser.show', POKEROGUE_URL);
    });

    context.subscriptions.push(openPokerogue);
}

export function deactivate() {}