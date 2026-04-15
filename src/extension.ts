import * as vscode from 'vscode';

class PokerogueSidebarProvider implements vscode.WebviewViewProvider {
    public static readonly viewType = 'pokerogue.sidebarView';

    resolveWebviewView(webviewView: vscode.WebviewView) {
        webviewView.webview.options = { enableScripts: true };
        webviewView.webview.html = getWebviewContent();
    }
}

export function activate(context: vscode.ExtensionContext) {
    console.log('PokeRogue Viewer ativado!');

    const sidebarProvider = new PokerogueSidebarProvider();
    context.subscriptions.push(
        vscode.window.registerWebviewViewProvider(PokerogueSidebarProvider.viewType, sidebarProvider, {
            webviewOptions: { retainContextWhenHidden: true }
        })
    );

    const openPokerogue = vscode.commands.registerCommand('pokerogue.open', () => {
        const panel = vscode.window.createWebviewPanel(
            'pokerogue',
            'PokeRogue',
            vscode.ViewColumn.One,
            {
                enableScripts: true
            }
        );

        panel.webview.html = getWebviewContent();
    });

    context.subscriptions.push(openPokerogue);
}

function getWebviewContent(): string {
    return `
        <!DOCTYPE html>
        <html lang="pt-BR">
        <head>
            <meta charset="UTF-8">
            <style>
                html, body {
                    margin: 0;
                    padding: 0;
                    height: 100%;
                    overflow: hidden;
                }
                iframe {
                    width: 100%;
                    height: 100vh;
                    border: none;
                }
            </style>
        </head>
        <body>
            <iframe src="https://pokerogue.net"></iframe>
        </body>
        </html>
    `;
}

export function deactivate() {}