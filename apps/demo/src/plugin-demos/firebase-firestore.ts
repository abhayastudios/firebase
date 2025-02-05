import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedFirebaseFirestore } from '@demo/shared';
import { Firestore, GeoPoint } from '@nativescript/firebase-firestore';
import { firebase } from '@nativescript/firebase-core';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedFirebaseFirestore {
	firestore: Firestore;

	constructor() {
		super();
		this.firestore = firebase().firestore();
		console.log(this.firestore.settings);
		this.firestore
			.collection('users')
			.add({
				first: 'Ada',
				last: 'Lovelace',
				born: 1815,
			})
			.then((docRef) => {
				console.log('Document written with ID: ', docRef.id);
			})
			.catch((error) => {
				console.error('Error adding document: ', error);
			});

		const geo = new GeoPoint(10, -10);
		this.firestore
			.collection('geo')
			.add({
				thing: 'it',
				geo,
			})
			.then((docRef) => {
				console.log('Geo Document written with ID: ', docRef.id);
			})
			.catch((error) => {
				console.error('Error adding geo document: ', error);
			});


			this.firestore.collection('items')
			.get()
			.then(items =>{
				console.log(items.docs[0].data())
			})
	}
}
