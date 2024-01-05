// https://www.youtube.com/watch?v=4LwtgjE9r44
// https://www.emailjs.com/
// https://www.npmjs.com/package/@emailjs/browser

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import emailjs from '@emailjs/browser';
import { WarnDialogComponent } from '../../shared/warn-dialog/warn-dialog.component';

@Component({
    selector: 'app-contact',
    standalone: true,
    imports: [
        ReactiveFormsModule,
        MatFormFieldModule,
        MatButtonModule,
        MatInputModule,
        MatDialogModule
    ],
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {

    templateParams = {
        name: 'James',
        notes: 'Check this out!'
    };
    contactForm!: FormGroup

    form: FormGroup = this.fb.group({
        from_name: '',
        to_name: 'Admin',
        from_email: '',
        subject: '',
        message: ''

    })

    constructor(
        private fb: FormBuilder,
        private dialog: MatDialog) { }

    ngOnInit(): void {
        this.initContactForm()
    }
    initContactForm() {
        this.contactForm = this.fb.group({
            'full name': new FormControl(null, [Validators.required]),
            'email address': new FormControl(null, [Validators.required]),
            'subject': new FormControl(null, [Validators.required]),
            'message': new FormControl(null, [Validators.required])
        })
    }
    // onSendMessage() {
    //     console.log(this.contactForm.value)
    // }
    async onSendMessage() {
        emailjs.init('tuE9hqVOhWXY7XMwW')
        let response = await emailjs.send("service_lsupwom", "template_o93bu0p", {
            from_name: this.contactForm.value['full name'],
            to_name: "jacobus schoonderwoerd",
            from_email: this.contactForm.value['email address'],
            subject: this.contactForm.value.subject,
            message: this.contactForm.value.message,
        });
        alert('Message has been sent.')
        this.dialog.open(WarnDialogComponent, {
            data: {
                message: 'Your message has been sent.'
            }
        })
        this.contactForm.reset();
    }
}

// emailjs.send("service_lsupwom", "template_o93bu0p", {
//     from_name: "boes",
//     to_name: "test",
//     from_email: "jackoschoonderwoerd@yahoo.nl",
//     subject: "test subject",
//     message: "test message",
// });
