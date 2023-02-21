import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { PopupType } from './alert-type.enum';

@Component({
  selector: 'app-alertdialog',
  templateUrl: './alertdialog.component.html',
  styleUrls: ['./alertdialog.component.scss'],
})
export class AlertdialogComponent implements OnInit {
  PopupType: typeof PopupType = PopupType;
  type!: PopupType;
  title!: string;
  message!: string;
  btnOk!: string;
  btnCancel!: string;

  // @Output() readonly onDone = new EventEmitter<any>();
  constructor(
    public dialogInfoRef: MatDialogRef<AlertdialogComponent>,
  ) { }

  ngOnInit() {

  }

  ok() {
    this.dialogInfoRef.close(true);
    // this.onDone.emit();
  }

  cancel() {
    this.dialogInfoRef.close(false);
  }
}
