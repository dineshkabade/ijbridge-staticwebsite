import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-alert-modal',
  templateUrl: './alert-modal.component.html',
  styleUrls: ['./alert-modal.component.css']
})
export class AlertModalComponent implements OnInit {

  @Input() public alertResponse;

  constructor(public activeAlertModal: NgbActiveModal) { }

  ngOnInit() {
  }

  onOkClick() {
    this.activeAlertModal.close(true);
  }
}
