import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

enum SnackbarMessageType {
  Success = 'success',
  Error = 'error',
  Info = 'info',
  Warning = 'warning',
  notLogged = 'not_logged_in'
}

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private snackBar:MatSnackBar) { }

  showMessage(message: string, action: string = 'Fechar', duration: number = 2000) {
    this.snackBar.open(this.getSnackBarMessage(message).text, this.getSnackBarMessage(message).action, {
      panelClass: this.getSnackBarMessage(message).panelClass,
      duration: duration,
      horizontalPosition: 'right',
      verticalPosition: 'bottom',
    });
  }

  private getSnackBarMessage(type: string) {
    switch (type) {
      case SnackbarMessageType.Success:
        return {
          text: 'Operação realizada com sucesso!',
          action: 'Fechar',
          panelClass: 'success-snack-bar',
        };
      case SnackbarMessageType.Error:
        return {
          text: 'Ocorreu um erro! Tente novamente.',
          action: 'Fechar',
          panelClass: 'error-snack-bar',
        };
      case SnackbarMessageType.Info:
        return {
          text: 'Informação importante!',
          action: 'Fechar',
          panelClass: 'info-snack-bar',
        };
      case SnackbarMessageType.Warning:
        return {
          text: 'Preencha todos os campos obrigatórios.',
          // text: 'Aviso: Algo não está certo!',
          action: '',
          // action: 'Fechar',
          panelClass: 'warning-snack-bar',
        };

        case SnackbarMessageType.notLogged:
          return{
            text:"Usuário não está logado.",
            action: "",
            panelClass: 'info-snack-bar',
          }
      default:
        return {
          text: 'Mensagem padrão.',
          action: 'Fechar',
          panelClass: 'default-snack-bar',
        };
    }
  }
}
