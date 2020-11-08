import { trigger, transition, style, query, animateChild, group, animate } from '@angular/animations';

export const routeTransitionAnimations = 
trigger('triggerName', [
	transition('One => Two, Two => Three, One => Three', [
		style({ position: 'relative' }),
		query(':enter, :leave', [
			style({
				position: 'absolute',
				top: 0,
				right: 0,
				width: '100%',
				height: '0px'
			})
		]),
		query(':enter', [style({ right: '-100%', opacity: 0, overflow: 'hidden' })]),
		query(':leave', animateChild()),
		group([
			query(':leave', [animate('200ms ease-out', style({ right: '100%', opacity: 0, overflow: 'hidden' }))]),
			query(':enter', [animate('200ms ease-out', style({ right: '0%', opacity: 1, overflow: 'hidden' }))])
		]),
		query(':enter', animateChild())
	]),
	transition('Three => Two, Two => One, Three => One', [
		style({ position: 'relative' }),
		query(':enter, :leave', [
			style({
				position: 'absolute',
				top: 0,
				left: 0,
				// width: '100%',
				height: '0px'
			})
		]),
		query(':enter', [style({ left: '-100%', opacity: 0, overflow: 'hidden' })]),
		query(':leave', animateChild()),
		group([
			query(':leave', [animate('300ms ease-out', style({ left: '100%', opacity: 0, overflow: 'hidden' }))]),
			query(':enter', [animate('300ms ease-out', style({ left: '0%', opacity: 1, overflow: 'hidden' }))])
		]),
		query(':enter', animateChild())
	]),
]);
