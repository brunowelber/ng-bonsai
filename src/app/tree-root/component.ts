import { Component, Input, ContentChild, TemplateRef } from '@angular/core';

@Component({
	selector: 'tree-root',
	template: `
		<ul role="tree">
			<li [tree-node]="item" [template]="treeNodeTemplate" *ngFor="let item of data"></li>
		</ul>
	`
})
export class TreeRootComponent {
	@Input() data;
	@ContentChild('treeNodeTemplate') treeNodeTemplate: TemplateRef<any>
};