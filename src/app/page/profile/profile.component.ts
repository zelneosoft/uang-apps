import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiService } from 'src/app/service/api.service';
import { UserService } from 'src/app/service/user.service';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

    url;
    email;
    nama;
    bio;
    telp;
    loading = true;
    versi

    constructor(
        private _snackBar: MatSnackBar,
        private rest: ApiService,
    ) {
        this.versi = environment.versiApp;
    }

    async ngOnInit() {
        await this.rest.get_profile().subscribe((data) => {
            if (data['success']){
                this.loading = false;
                this.url = data['user']['userPhotoUrl'];
                this.email = data['user']['userEmail'];
                this.nama = data['user']['userName'];
                this.bio = data['user']['userBio'];
                this.telp = data['user']['userPhone'];
            }
        });
    }

    async save() {
        this.loading = true;
        try {
            await this.rest.edit_profile({
                nama: this.nama,
                bio: this.bio,
                telp: this.telp
            }).subscribe(async (data)=>{
                if (data['success']) {
                    this.loading = false;
                    this._snackBar.open('Profil berhasil diperbarui', 'Oke', {
                        duration: 2000,
                        panelClass: ['mat-snackbar', 'mat-primary']
                    });
                    this.ngOnInit();
                }
            }); 
        } catch (error) {
            console.log(error);
        }
    }

    delete() {
        this._snackBar.open('Fitur ini belum tersedia', 'Oke', {
            duration: 2000,
            panelClass: ['mat-snackbar', 'mat-primary']
        });
    }

}
