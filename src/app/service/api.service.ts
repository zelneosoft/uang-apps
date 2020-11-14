import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(private http: HttpClient) { }

    getHeaders() {
        const token = localStorage.getItem('token');
        return token ? new HttpHeaders().set('Authorization', token) : null;
    }

    link_url() {
        return environment.urlApi;
    }

    auth_user(data) {
        return this.http.post(`${this.link_url()}/uangku-login`,data);
    }

    get_profile() {
        return this.http.get(`${this.link_url()}/uangku-account`,{ headers: this.getHeaders() });
    }

    get_data_home() {
        return this.http.get(`${this.link_url()}/uangku-account/dashboard`,{ headers: this.getHeaders() });
    }

    get_category() {
        return this.http.get(`${this.link_url()}/uangku-category`,{ headers: this.getHeaders() });
    }

    save_category(data) {
        return this.http.post(`${this.link_url()}/uangku-category/insert`,data ,{ headers: this.getHeaders() });
    }

    update_category(data) {
        return this.http.post(`${this.link_url()}/uangku-category/update`,data ,{ headers: this.getHeaders() });
    }

    delete_category(data) {
        return this.http.post(`${this.link_url()}/uangku-category/delete`,data ,{ headers: this.getHeaders() });
    }

    get_trans_in() {
        return this.http.get(`${this.link_url()}/uangku-transaction/in`,{ headers: this.getHeaders() });
    }

    get_trans_out() {
        return this.http.get(`${this.link_url()}/uangku-transaction/out`,{ headers: this.getHeaders() });
    }

    save_transaction_in(data) {
        return this.http.post(`${this.link_url()}/uangku-transaction/insert-in`,data ,{ headers: this.getHeaders() });
    }
    
    save_transaction_out(data) {
        return this.http.post(`${this.link_url()}/uangku-transaction/insert-out`,data ,{ headers: this.getHeaders() });
    }

    update_transaction_in(data) {
        return this.http.post(`${this.link_url()}/uangku-transaction/update-in`,data ,{ headers: this.getHeaders() });
    }

    update_transaction_out(data) {
        return this.http.post(`${this.link_url()}/uangku-transaction/update-out`,data ,{ headers: this.getHeaders() });
    }

    delete_transaction_in(data) {
        return this.http.post(`${this.link_url()}/uangku-transaction/delete-in`,data ,{ headers: this.getHeaders() });
    }

    delete_transaction_out(data) {
        return this.http.post(`${this.link_url()}/uangku-transaction/delete-out`,data ,{ headers: this.getHeaders() });
    }

}
