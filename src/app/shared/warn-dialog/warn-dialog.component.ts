import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'app-warn-dialog',
    standalone: true,
    imports: [MatButtonModule],
    templateUrl: './warn-dialog.component.html',
    styleUrl: './warn-dialog.component.scss'
})
export class WarnDialogComponent {
    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any,
        private dialogRef: MatDialogRef<WarnDialogComponent>
    ) {

    }
    onClose() {
        this.dialogRef.close()
    }
}
