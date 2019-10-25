import { Input } from '@angular/core';

import { PermissionComponentBase } from './permission-base';

export abstract class ComponentBase extends PermissionComponentBase {
    @Input() public tooltip: string;
    @Input() public tooltipPosition: 'left' | 'right' | 'above' | 'below' | 'before' | 'after' = 'below';
    @Input() public classes: string;
}
