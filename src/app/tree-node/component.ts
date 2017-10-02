import { Component, Input, HostBinding} from '@angular/core';

@Component({
	selector: '[tree-node]',
	template: `
		Hey, {{data.title}}
		<ng-container *ngIf="template" [ngTemplateOutlet]="template"></ng-container>
		<ul *ngIf="data.children">
			<li *ngFor="let child of data.children" [tree-node]="child" [template]="template"></li>
		</ul>`
})
export class TreeNodeComponent {
	@Input('tree-node') data;
	@Input('template') template;
}