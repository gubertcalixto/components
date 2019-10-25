import { Input } from '@angular/core';

import { PermissionComponentBase } from './permission-component-base';

export abstract class ComponentBase extends PermissionComponentBase {
    @Input() tooltip: string;
    @Input() toolipPosition: 'left' | 'right' | 'above' | 'below' | 'before' | 'after' = 'below';
    @Input() classes: string;
}
